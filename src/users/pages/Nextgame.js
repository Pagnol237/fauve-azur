import React,{useState,useEffect} from 'react'
import '../styles/Home.scss'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {TbSoccerField} from 'react-icons/tb'
import {GiTimeBomb} from 'react-icons/gi'
import Logo1 from '../images/logo-fauve-azur.png'
import Logo2 from '../images/logo-yosa.png'
import Classement from './Classement'
import { db } from '../../firebase'
import {collection,getDocs,query} from 'firebase/firestore'

function Nextgame() {

  const [next,setNext]=useState([]);

  
 const gamedata = async ()=>{
  const q = query(collection(db,'next_game'));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id,
  }));
  setNext(data);
 };

 useEffect(()=>{
  gamedata();
 },[]);
  return (
    <div className='NextgameMain'> 
    {next.map((res,id)=>{
        return(
      <div className='nextGame-block1' key={id}>
        <div className='nextGame-block1-title'>PROCHAINE RENCONTRE</div>

        <div className='nextgameInfo'>
          <div className='nextgameInfo-icon'><BsFillCalendarCheckFill/></div>
          <div className='nextgameInfo-text'>{res.date}</div>
        </div>

        <div className='nextgameInfo'>
          <div className='nextgameInfo-icon'><TbSoccerField/></div>
          <div className='nextgameInfo-text'>{res.stade}</div>
        </div>

        <div className='nextgameInfo'>
          <div className='nextgameInfo-icon'><GiTimeBomb/></div>
          <div className='nextgameInfo-text'>{res.heure}</div>
        </div>
      <div className='next-g-c'>
        <table className='ng-tb'>
            <tr>
              <td className='t1'><img src={res.logoA} className='teamLogo' alt='logo'/></td>
              <td><span className='vs'>VS</span></td>
              <td><img src={res.logoB} className='teamLogo' alt='logo'/></td>
            </tr>
            <tr>
              <td><span className='teamName'>{res.teamA}</span></td>
              <td></td>
              <td><span className='teamName'>{res.teamB}</span></td>
            </tr>
        </table>
      </div>




        <div className='nextgameInfo-logocontainer'>

          <div className='team'>
            <img src={res.logoA} className='teamLogo' alt='logo'/>
            <div className='teamName'>{res.teamA}</div>
          </div>
          <div className='vs'>VS</div>

          <div className='team'>
            <img src={res.logoB} className='teamLogo' alt='logo'/>
            <div className='teamName'>{res.teamB}</div>
          </div>

        </div>
      </div>
       )
      })}


      <div className='nextGame-block2'>
      <div className='nextGame-block1-title'>CLASSEMENT</div>
      <Classement/>
      </div>
    </div>
  )
}

export default Nextgame