import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Nav.scss'
import Logo from '../images/logo-fauve-azur.png'
import {AiOutlinePhone} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'

function Nav() {
  const [active,setActive]= useState('off');

  const togglemenu = ()=>{
    active=== 'off' ? setActive('on') : setActive('off');
  }
  return (
    <div className='navMain'>
        <div className='logoContainer'>
            <img  src={Logo} alt='logo fauve azur' className='logoSize' />
        </div>
        <div className={active}>
          <div className='lien'>
              <Link to='/' className='navLink' onClick={()=>{setActive('off');}}>ACCUEIL</Link>
              <Link to='Club' className='navLink' onClick={()=>{setActive('off');}}>LE CLUB</Link>
              {/*<Link to="Actualite" className='navLink' onClick={()=>{setActive('off');}}>ACTUALITE</Link>*/}
              <Link to='Joueurs' className='navLink' onClick={()=>{setActive('off');}}>L'EFFECTIF</Link>
              <Link to='Calandrier' className='navLink' onClick={()=>{setActive('off');}}>CALENDRIER</Link>
              <Link to='Boutique' className='navLink' onClick={()=>{setActive('off');}}>BOUTIQUE</Link>
              <Link to='Galerie' className='navLink' onClick={()=>{setActive('off');}}>GALERIES</Link>
              <Link to='Documents' className='navLink' onClick={()=>{setActive('off');}}>DOCUMENTS</Link>
              <a  href='https:/wa.me/696438148' className='navLink' onClick={()=>{setActive('off');}}><AiOutlinePhone/>Contactez nous</a >
          </div>
        </div>
        <div className='barrcontainer' onClick={togglemenu}><FaBars/></div>
    </div>
  )
}

export default Nav
