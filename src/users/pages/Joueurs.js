import React from 'react'
import Players from './Players'
import Staff from './Staff'
import '../styles/Joueurs.scss'
import Footer from './Footer'
import { useState } from 'react'

function Joueurs() {
  const [tabs,setTabs] = useState(1);
  const toggletab = (index)=>{
    setTabs(index);
    
  }
  return (
    <div>
    <div className='joueurMain'>
       <ul className='tabmain'>
        <li className={tabs === 1 ?'active-btn':'btn' } onClick={()=>toggletab(1)}>Joueurs</li>
        <li className={tabs === 2 ?'active-btn':'btn' } onClick={()=>toggletab(2)}>Staff</li>
       </ul>
       <div className={tabs === 1 ? 'active-contenu': 'contenu'}>
          <Players/>
       </div>
        
       <div className={tabs === 2 ?'active-contenu':'contenu' }>
          <Staff/>
       </div>
       
    </div>

    <Footer/>
    </div>
  )
}

export default Joueurs