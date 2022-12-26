import React, {useState,useEffect} from 'react'
import '../styles/Home.scss'
import {Link} from 'react-router-dom'
import { db } from '../../firebase'
import {collection,getDocs,query} from 'firebase/firestore'


function Articleheader() {

  const [article,setArticle]=useState([]);

    
  const getarticle = async ()=>{
    const q = query(collection(db,'articles'));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id,
    }));
    setArticle(data);
   };

   useEffect(()=>{
    getarticle();
   },[]);

  return (
    <div className='articleHomemain'>
      <div className='nextGame-block1-title'>ACTUALITE</div>
      <div className='articleBoxContainer'>
      {article.map((data,id)=>{return(
        <Link to={`/Actualite/${data.id}`} className='homearticleLink'>
          <div className='boxContainer' key={id}>
            <div className='photoContainer'><img src={data.image} alt="" className='photo'/> </div>
            <div className='articleTitle'>{data.titre1}</div>
            <div className='articleTEXTE'>
              {data.text} 
            </div>
          </div> 
        </Link>
        )})}
      </div>
    </div>
  )
}

export default Articleheader