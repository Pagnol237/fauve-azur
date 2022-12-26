import React,{useEffect,useState} from 'react'
import { db } from '../../firebase'
import {collection,getDocs,query} from 'firebase/firestore'
import '../styles/Galerie.scss'

function Images() {

  const [images,setImages]=useState([]);

  
 const gamedata = async ()=>{
  const q = query(collection(db,'image_galerie'));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id,
  }));
  setImages(data);
 };

 useEffect(()=>{
  gamedata();
 },[]);
  return (
    <div className='g-main'>

          <div className='img-galeri-box'>
          {images.map((res,id)=>{
        return(
            <div key={id}>
              <img src={res.lien} alt='image_fauve_azur' className='g-img' />
            </div>
                    )
            })}
          </div>

    </div>
  )
}

export default Images