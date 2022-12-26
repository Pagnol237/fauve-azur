import React,{useState,useEffect} from 'react'
import '../styles/Home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../images/Slide1.jpg'
import Slide2 from '../images/Slide2.jpg'
import Slide4 from '../images/Slide4.jpg'
import Logofauve from '../images/logo-fauve-azur.png'
import Logobtos from '../images/logo-bamboutos.png'
import {GiWhistle} from 'react-icons/gi'
import {BiCalendar} from 'react-icons/bi'
import {VscArrowRight} from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { db } from '../../firebase'
import {collection,getDocs,query} from 'firebase/firestore'

function Header() {

  const [infos,setInfos]=useState([]);


 const getdata = async ()=>{
  const q = query(collection(db,'last_game'));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id,
  }));
  setInfos(data);
 };


 useEffect(()=>{
  getdata();
 },[]);
  return (
    <div className='mainHeader'>
      <div className='headerLastscore'>

      {infos.map((res,id)=>{
        return(

        <div className='block1' key={id}>
          <div className='block1-1'><GiWhistle/> SCORE DERNIER MATCH</div> 
          <div className='block1-2'> 
            <div><img src={res.logo1} alt='image1 fauve azur elite' className='headerLogo'/></div>
            <div><p>{res.score1} - {res.score2}</p></div>
            <div><img src={res.logo2} alt='image2 fauve azur elite' className='headerLogo'/></div>
          </div> 
        </div>

        )
        })}

        <div className='block2'>
          <div className='block1-1'>PROCHAINE JOURNEE</div> 
          <div className='block1-2'> 
            <BiCalendar className='calendaIcon' /><Link to='/Calandrier' className='herdercalendaLink'>CONSULTER LE CALANDRIER</Link><VscArrowRight/>
          </div> 
        </div>

      </div>
      <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={3000}>
        <div className='bg1' style={{ backgroundImage:`url(${Slide1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
          <div className='slideTexte'>
            <p className='headerText1'>BIENVENUE SUR LE SITE DE</p>
            <p className='headerText2'>FAUVE AZUR ELITE FC</p>
            <Link to='/Club' className='slidelink'><div className='slideButton'>En savoir plus</div></Link>
          </div>
        </div>

        <div className='bg1' style={{ backgroundImage:`url(${Slide2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
          <div className='slideTexte'>
            <p className='headerText1'>BIENVENUE SUR LE SITE DE</p>
            <p className='headerText2'>FAUVE AZUR ELITE FC</p>
            <Link to='/Club' className='slidelink'><div className='slideButton'>En savoir plus</div></Link>
          </div>
        </div>

        <div className='bg1' style={{ backgroundImage:`url(${Slide4})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
          <div className='slideTexte'>
            <p className='headerText1'>BIENVENUE SUR LE SITE DE</p>
            <p className='headerText2'>FAUVE AZUR ELITE FC</p>
            <Link to='/Club' className='slidelink'><div className='slideButton'>En savoir plus</div></Link>
          </div> 
        </div>
      </Carousel>
    </div>
  )
}

export default Header