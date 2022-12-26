import React, {useState} from 'react'
import Player1 from '../images/mbessa.png'
import Player2 from '../images/moukap.png'
import Player3 from '../images/tchamba.png'
import Player4 from '../images/djessi.png'
import Player5 from '../images/atchom.png'
import Player9 from '../images/mboheu.png'
import Player6 from '../images/madjem.png'
import Player7 from '../images/seko.png'
import Player15 from '../images/ngoupeyou.png'
import Player8 from '../images/dang.png'
import Player10 from '../images/seko.png'
import Player11 from '../images/dang.png'
import Player12 from '../images/joueur1.png'
import Player13 from '../images/joueur2.png'
import Player14 from '../images/joueur3.png'
import Player16 from '../images/hassan.png'
import Player17 from '../images/mbappe.png'
import Cmr from '../images/cmr.png'
import Togo from '../images/togo.png'

function Players() {
  const [datas,setDatas]=useState([
    {
      nom:'TCHAMBA',
      poste:'défenseur',
      dossar:4,
      photo:Player3,
      flag:Cmr
    },
    {
      nom:'MOUKAP',
      poste:'défenseur',
      dossar:2,
      photo:Player2,
      flag:Cmr
    },
    {
      nom:'DJESSI',
      poste:'défenseur',
      dossar:13,
      photo:Player4,
      flag:Cmr
    },
    {
      nom:'ATCHOM',
      poste:'défenseur',
      dossar:15,
      photo:Player5,
      flag:Cmr
    },
    {
      nom:'MBOHEU',
      poste:'défenseur',
      dossar:12,
      photo:Player9,
      flag:Cmr
    },
    {
      nom:'MADJEM',
      poste:'défenseur',
      dossar:3,
      photo:Player6,
      flag:Cmr
    },
    {
      nom:'SEKO',
      poste:'milieu',
      dossar:8,
      photo:Player10,
      flag:Togo
    },
    {
      nom:'DANG SAID',
      poste:'milieu',
      dossar:10,
      photo:Player11,
      flag:Cmr
    },
    {
      nom:'NGOUPEYOU',
      poste:'milieu',
      dossar:6,
      photo:Player15,
      flag:Cmr
    },
    {
      nom:'MBAPPE',
      poste:'attaquan',
      dossar:9,
      photo:Player17,
      flag:Cmr
    },
    {
      nom:'HASSAN',
      poste:'attaquan',
      dossar:7,
      photo:Player16,
      flag:Cmr
    },
    {
      nom:'',
      poste:'',
      dossar:2,
      photo:Player12,
      flag:Cmr
    },
    {
      nom:'',
      poste:'',
      dossar:2,
      photo:Player13,
      flag:Cmr
    },
    {
      nom:'',
      poste:'',
      dossar:2,
      photo:Player14,
      flag:Cmr
    }
  ]);
  return (  
    <div className='main'>
        <div className='playersmain'>
        {datas.map((data,index)=>( 
          <div className='box' key='index'>
            <div className='dossard-contain'>
                  <div className='dossard'>{data.dossar}</div>
                  <img src={data.flag} alt='flag' className='flag' />
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

export default Players