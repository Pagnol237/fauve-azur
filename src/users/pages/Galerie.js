import React,{useState,useEffect} from 'react'
import Images from './Images'
import '../styles/Joueurs.scss'
import Footer from './Footer'
import YoutubeEmbed from './YoutubeEmbed';
import { db } from '../../firebase'
import {collection,getDocs,query} from 'firebase/firestore'

function Galerie() {

    const [tabs,setTabs] = useState(1);
    const toggletab = (index)=>{
      setTabs(index);}

      const [video,setVideo]=useState([]);

  
      const getvideo = async ()=>{
       const q = query(collection(db,'video-galerie'));
       const querySnapshot = await getDocs(q);
       const data = querySnapshot.docs.map((doc)=>({
         ...doc.data(),
         id:doc.id,
       }));
       setVideo(data);
      };

      useEffect(()=>{
         getvideo();
        },[]);

  return (
    <div>
    <div className='joueurMain'>
       <ul className='tabmain'>
        <li className={tabs === 1 ?'active-btn':'btn' } onClick={()=>toggletab(1)}>Images</li>
        <li className={tabs === 2 ?'active-btn':'btn' } onClick={()=>toggletab(2)}>Vidéos</li>
       </ul>
       <div className={tabs === 1 ? 'active-contenu': 'contenu'}>
          <Images/>
       </div>
        
       <div className={tabs === 2 ?'active-contenu':'contenu' }>
         <div className='video-gallerie-main'>
         {video.map((res,id)=>{
         return(
               <div className='video-box' key={id}>
                  <YoutubeEmbed embedId={res.link}/>
                  <p className='video-title'>{res.titre} <span>(phase {res.phase})</span></p>
                  <p className='video-saison'>Saison {res.saison}</p>
               </div>
               )
             })}

         </div>
       </div>
       
    </div>

    <Footer/>
    </div>
  )
}

export default Galerie