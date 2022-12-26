import React from 'react'
import '../styles/Documents.scss';
import {AiOutlineFileImage} from 'react-icons/ai'
import {FaDownload} from 'react-icons/fa'
import Pdf from '../fichiers/DossierMarketing.pdf'

function Documents() {
  return (
    <div className='docmain'>
      <div className='fileBox'>
        <div className='filelogo'><AiOutlineFileImage/></div>
        <div className='filename'>Dossier Marketing</div>
        <a href={Pdf}>
        <div className='downloadBtn'>
          <p>Télécharger</p>
          <FaDownload/>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Documents