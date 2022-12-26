import React,{useState} from 'react'
import '../styles/Boutique.scss'
import Slider from "react-slick";
import V1 from '../images/mv-1.png'
import V2 from '../images/mv-2.png'
import V3 from '../images/mv-3.png'
import V4 from '../images/mv-4.png'
import J1 from '../images/mj-1.png'
import J2 from '../images/mj-2.png'
import J3 from '../images/mj-3.png'
import J4 from '../images/mj-4.png'
import P1 from '../images/p-1.png'
import P2 from '../images/p-2.png'
import C from '../images/casquette.png'
import Footer from './Footer';

function Boutique() {

  const settings = {
    dots: true,
    arrows: false,
    accessibility:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [produit,setProduit]=useState([
    {
      name:'Maillot supporter',
      pic1:V1,
      pic2:V2,
      pic3:V3,
      pic4:V4,
      prix:8000
    },
    {
      name:'Maillot supporter',
      pic1:J1,
      pic2:J2,
      pic3:J3,
      pic4:J4,
      prix:8000
    },
    {
      name:'Pollo supporter',
      pic1:P1,
      pic2:P2,
      pic3:P1,
      pic4:P2,
      prix:10000
    },
    {
      name:'Casquette supporter',
      pic1:C,
      pic2:C,
      pic3:C,
      pic4:C,
      prix:4000
    }
  ]);
  return (
  <div>
    <div className='shopmain'>
      <div className='shoping-card'>
      {produit.map((res,index)=>{
        return(

            <div className='product-box' key={index}>
              
              <div className='image-box'>
                  <Slider {...settings}>
                  <div>
                    <img src={res.pic1} className='product-size' />
                  </div>
                  <div>
                    <img src={res.pic2} className='product-size' />
                  </div>
                  <div>
                    <img src={res.pic3} className='product-size' />
                  </div>
                  <div>
                    <img src={res.pic4} className='product-size' />
                  </div>
                </Slider>
              </div>
              <div className='product-name'>{res.name}</div>
              <div className='product-price'>{res.prix} FCFA</div>
              <a href='https:/wa.me/696438148'><button className='buy'>ACHETER</button></a>

            </div>

          )
          })}
      </div>
    </div>
     <Footer/>
    </div>
  )
}

export default Boutique