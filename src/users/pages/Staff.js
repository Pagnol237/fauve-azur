import React, {useState} from 'react'
import Staff1 from '../images/rene-essomba.png'
import Staff2 from '../images/kyne.png'
import Staff3 from '../images/gardem.png'
import Staff4 from '../images/ds.png'
import Staff5 from '../images/ph1.png'
import Staff6 from '../images/ph3.png'
import Staff7 from '../images/ph4.png'

function Staff() {
  const [datas,setDatas]=useState([
    {
      nom:'RENNE ESSOMBA',
      poste:'coach',
      photo:Staff1
    },
    {
      nom:'',
      poste:'',
      photo:Staff2
    },
    {
      nom:'',
      poste:'',
      photo:Staff3
    },
    {
      nom:'',
      poste:'',
      photo:Staff4
    },
    {
      nom:'',
      poste:'',
      photo:Staff5
    },
    {
      nom:'',
      poste:'',
      photo:Staff6
    },
    {
      nom:'',
      poste:'',
      photo:Staff7
    }
    
   
   
  ])
  return (
    <div className='main'>
        <div className='playersmain'>
        {datas.map((data,index)=>( 
          <div className='box' key='index'>
            <div className='dossard-contain'>
                  <div className='dossard'>{data.dossar}</div>
            </div>
            <div className='nom-poste'>
              <p className='nom-j'>{data.nom}</p> 
              <span className='poste-j'>{data.poste}</span>
            </div>
            <img src={data.photo} alt='fave azur player' className='picture' />
          </div>
        ))}
        </div>
    </div>
  )
}

export default Staff