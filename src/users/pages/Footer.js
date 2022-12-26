import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footermain'>
        <div className='footer1'>
            <p>News letter</p>
            <form>
                <input type='texte' placeholder='nom'/>
                <input type='texte' placeholder='email'/>
                <button>Envoyer</button>
            </form>
        </div>

        <div className='footer2'>
            <a href='https://www.facebook.com/FauveAzurElite' className='socialLink'><FaFacebookSquare/></a> 
            <Link TO='/' className='socialLink'><FaInstagramSquare/></Link> 
            <Link TO='/' className='socialLink'><FaTwitterSquare/></Link> 
            <Link TO='/' className='socialLink'><FaYoutubeSquare/></Link> 
        </div>
        <div className='footer3'>(+237) 656 36 99 93 | 656 40 62 82 | fauveazur@gmail.com<br/>
              copyright fauve-azur 2022<br/><br/>
              <a href='https:/wa.me/657510322' className='dev_link'>Developpé par pagnol</a>
        </div>
    </div>
  )
}

export default Footer