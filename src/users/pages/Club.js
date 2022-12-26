import React,{useState,useEffect} from 'react'
import '../styles/Club.scss'
import Footer from '../pages/Footer'
import Pr from '../images/nya_norbert.jpg'
import { db } from '../../firebase'
import {collection,getDocs,query} from 'firebase/firestore'

function Club() {
 
  return (
  <div>
      <div className='clubmain'>
      <div className='club-title'>LE CLUB</div>
        <div className='section1'>
          <div className='section1-a'> <img src={Pr} alt='nya norbert' /> </div>
          <div className='section1-b'>
          Organisé et structuré comme un groupe, Fauve Azur est une véritable institution
          qui a posé les premières pierres de sa fondation en 2015 en Ligue Régionale pour 
          la section jeune et en 2020 la section professionnelle est mise sur pied après un
            rachat d’AS Etoa-Meki qui devient <b>Fauve Azur Elite</b>. <br/><br/>
            Propulsé par un amoureux de sport et de football en particulier, engagé en tant que
            dirigeant d’institutions sportives depuis plusieurs décennies, Monsieur <b> Norbert NYA
              NKAMENJO </b> a décidé de s’inscrire dans l’histoire comme étant l’un des grands bâtisseurs
              du football professionnel au Cameroun. Guidé par une vision qui devrait à terme hisser
                le Groupe Fauve Azur à la dimension des structures sportives les plus professionnelles
                et les plus indépendantes financièrement, le Président NYA s’est entouré d’une équipe
                  dynamique tournée vers les résultats sportifs qui permettront à l’institution d’avoir
                  une  place de choix dans le projet « Redonner au football camerounais toute sa grandeur », 
                  impulsé par le nouveau Président de la Fédération Camerounaise de Football <b> Samuel ETO’O FILS</b>.
          </div>
        </div>

        <div className='club-title'>STRUCTURATION</div>
        <div className='section2'>
            <table className='club-t'>
              <tr className='club-thead'>
                <td>Equipe</td>
                <td>Nom</td>
                <td>Division</td>
                <td>Effectifs</td>
              </tr>
              <tr className='club-body'>
                <td>Equipe première</td>
                <td>Fauve Azur Elite Fc </td>
                <td>1<sup>ere</sup> Division</td>
                <td>35 joueurs licenciés</td>
              </tr>

              <tr className='club-body'>
                <td>Equipe réserve </td>
                <td>Fauve Azur Fc </td>
                <td>2<sup>ere</sup> Division Régionale du Centre </td>
                <td>40 joueurs licenciés</td>
              </tr>

              <tr className='club-body'>
                <td>Equipe réserve </td>
                <td>Cintra Fc </td>
                <td>3<sup>ere</sup> Division Départementale du Centre </td>
                <td>40 joueurs licenciés</td>
              </tr>

            </table>
        </div>
      
      </div>
      <Footer/>
  </div>
  )
}

export default Club