import React,{useState,useEffect} from 'react'
import '../styles/Home.scss'
import Logobtos from '../images/logo-bamboutos.png'
import Logofauve from '../images/logo-fauve-azur.png'
import Logogazelle from '../images/logo-gazelle.png'
import Logounion from '../images/logo-union.png'
import { db } from '../../firebase'
import {collection,orderBy,getDocs,query} from 'firebase/firestore'


function Classement() {
    const [team,setTeam]=useState([]);

  
    const gamedata = async ()=>{
     const q = query(collection(db,'calender'),orderBy("position"));
     const querySnapshot = await getDocs(q);
     const data = querySnapshot.docs.map((doc)=>({
       ...doc.data(),
       id:doc.id,
     }));
     setTeam(data);
    };
   
    useEffect(()=>{
     gamedata();
    },[]);
  return (
    <div>
        <table className='tbl'>
            <tr>
                <th>Equipes</th>
                <th>Positions</th>
                <th>Victoires</th>
                <th>Nuls</th>
                <th>Défaites</th>
                <th>Pts</th>
            </tr>
      {team.map((res,id)=>{
        return(
            <tbody key={id}>
            <tr className={res.option} >
                <td> <img src={res.logo} className='logo-clasement' /> </td>
                <td>{res.position}</td>
                <td>{res.victoire}</td>
                <td>{res.nul}</td>
                <td>{res.defaite}</td>
                <td>{res.pts}</td>
            </tr>
        </tbody>
        )
      })}
        </table>
    </div>
  )
}

export default Classement