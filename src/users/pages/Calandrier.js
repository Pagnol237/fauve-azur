import React,{useState} from 'react'
import '../styles/Calandrier.scss'
import Footer from './Footer'
import Yafoo from '../images/logo-yafoot.png'
import Fauve from '../images/logo-fauve-azur.png'
import Astre from '../images/logo-astre.png'
import Btos from '../images/logo-bamboutos.png'
import Dragon from '../images/logo-dragon.png'
import Fortuna from '../images/logo-fortuna.png'
import Fovu from '../images/logo-fovu.png'
import Gazelle from '../images/logo-gazelle.png'
import Union from '../images/logo-union.png'
import Yosa from '../images/logo-yosa.png'
import Apejes from '../images/logo-apejes.png'

function Calandrier() {
    const [aller,setAller]=useState([
        {
            journee:1,
            team1:'Yafoot',
            logo1:Yafoo,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'16-oct-22'
        },

        {
            journee:2,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Apejes,
            team2:'Apejes fc',
            date:'23-oct-22'
        },

        {
            journee:3,
            team1:'Dragon fc',
            logo1:Dragon,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'30-oct-22'
        },
        {
            journee:4,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Astre,
            team2:'Astre fc',
            date:'2-nov-22'
        },
        {
            journee:5,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Gazelle,
            team2:'Gazelle fc',
            date:'6-nov-22'
        },
        {
            journee:6,
            team1:'Fortuna fc',
            logo1:Fortuna,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'13-nov-22'
        },
        {
            journee:7,
            team1:'Bamboutos fc',
            logo1:Btos,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'16-nov-22'
        },
        {
            journee:8,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Yosa,
            team2:'Yong sport fc',
            date:'19-dec-22'
        },
        {
            journee:10,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Union,
            team2:'Union fc',
            date:'27-dec-22'
        },
        {
            journee:11,
            team1:'Fovu',
            logo1:Fovu,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'31-dec-22'
        },


    ]);

    const [retour,setRetour]=useState([
        {
            journee:1,
            team1:'Yafoot',
            logo1:Yafoo,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'12-fev-23'
        },

        {
            journee:2,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Apejes,
            team2:'Apejes fc',
            date:'19-fev-23'
        },

        {
            journee:3,
            team1:'Dragon fc',
            logo1:Dragon,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'26-fev-23'
        },
        {
            journee:4,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Astre,
            team2:'Astre fc',
            date:'5-mars-23'
        },
        {
            journee:5,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Gazelle,
            team2:'Gazelle fc',
            date:'12-mars-23'
        },
        {
            journee:6,
            team1:'Fortuna fc',
            logo1:Fortuna,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'19-mars-23'
        },
        {
            journee:7,
            team1:'Bamboutos fc',
            logo1:Btos,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'26-mars-23'
        },
        {
            journee:8,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Yosa,
            team2:'Yong sport fc',
            date:'2-avr-23'
        },
        {
            journee:10,
            team1:'Fauve azue elit fc',
            logo1:Fauve,
            logo2:Union,
            team2:'Union fc',
            date:'16-avr-23'
        },
        {
            journee:11,
            team1:'Fovu',
            logo1:Fovu,
            logo2:Fauve,
            team2:'Fauve azue elit fc',
            date:'23-avr-23'
        },


    ]);
  return (
    <div>
        <div className='calendermain'>
            <div className='calenda-block1'>
                <div className='phase-title'>Phase aller</div>
                
            {aller.map((data,index)=>(

           
                <div className='journee-box' key={index}>
                    <div className='N-journee'>JOURNEE {data.journee}</div>

                    <table>
                        <tbody className='tb1'>
                            <tr>
                                <td className='t1'>{data.team1}</td>
                                <td><img src={data.logo1} className='team-logo'/></td>
                                <td className='vs-calenda'>vs</td>
                                <td><img src={data.logo2} className='team-logo'/></td>
                                <td className='t2'>{data.team2}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='game-date'>{data.date}</div>
                    <div className='line'><hr/></div> 
                </div>

            ))}


            </div>






            <div className='calenda-block2'>
                <div className='phase-title'>Phase retour</div>

                {retour.map((data,index)=>(

           
                <div className='journee-box' key={index}>
                    <div className='N-journee'>JOURNEE {data.journee}</div>

                    <table>
                        <tbody className='tb1'>
                            <tr>
                                <td>{data.team2}</td>
                                <td><img src={data.logo2} className='team-logo'/></td>
                                <td className='vs-calenda'>vs</td>
                                <td><img src={data.logo1} className='team-logo'/></td>
                                <td>{data.team1}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='game-date'>{data.date}</div>
                    <div className='line'><hr/></div> 
                </div>

                ))}

            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Calandrier