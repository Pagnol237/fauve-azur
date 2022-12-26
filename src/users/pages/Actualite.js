import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import '../styles/Actualite.scss'
import Footer from './Footer'
import Img1 from '../images/img2.jpg'
import Ads from '../images/produit.png'
import Img2 from '../images/img1.jpg'
import Img3 from '../images/img3.jpg'
import {FaAngleDoubleRight} from 'react-icons/fa'
import { db } from '../../firebase'
import { doc, onSnapshot,collection,getDocs,query,limit } from "firebase/firestore";

function Actualite() {
  const [post,setPost]=useState(null);

const {id} = useParams();
const getPost= ()=>{
  const docRef = doc (db,"articles",id);
  onSnapshot(docRef,(snapshot)=>{
    setPost({...snapshot.data(),id:snapshot.id});
  })
}

const [article,setArticle]=useState([]);

    
  const getarticle = async ()=>{
    const q = query(collection(db,'articles'),limit(3));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id,
    }));
    setArticle(data);
   };

useEffect(()=>{
  getarticle();
  getPost();
},[]);



  
  return (
    <div>
    <div className='actualitéMain'>
        <div className='leftsite'>
        <div className='block-title'>News letter</div>
        <form>
          <input placeholder='nom'/>
          <input placeholder='email'/>
          <button>Envoyer</button>
        </form>
            <div className='ads-img'>
              <img  src={Ads} className='ads' alt='article fayaboys' />
            </div>
        </div>

{post && (
        <div className='midle'>
            <div className='big-image-ctn'>
                <img src={post.image} className='big-img' alt='blog-pic' />
                <div className='title-container'>
                    <p className='titre'>{post.titre1}</p>
                    <p className='sous-titre'>{post.titre2}</p>
                </div>
              </div>
              <div className='article-texte'>
             {post.text}
              </div>
        </div>
)}



        <div className='rightsite'>
          <div className='block-title'>Article simmilaire</div>

          <div className='order-article-main'>
              <div className='box-1'>
              {article.map((data,id)=>{return(
              <Link to={`/Actualite/${data.id}`} className='homearticleLink'>
                <div className='boxContainer box2' key={id}>
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
                  

        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Actualite