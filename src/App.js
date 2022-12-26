import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './users/pages/Nav'
import  Home from './users/pages/Home';
import Boutique from './users/pages/Boutique';
import Images from './users/pages/Images';
import Joueurs from './users/pages/Joueurs';
import Actualite from './users/pages/Actualite';
import Calandrier from './users/pages/Calandrier';
import Club from './users/pages/Club';
import Galerie from './users/pages/Galerie';
import Admin from './admin/Admin';
import Documents from './users/pages/Documents';

function App() {
  return (
    <div className='main'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Actualite/:id" element={<Actualite/>} />
          <Route path='/Calandrier' element={<Calandrier/>} />
          <Route path='/Boutique' element={<Boutique/>} />
          <Route path='/Galerie' element={<Galerie/>} />
          <Route path='/Joueurs' element={<Joueurs/>} />
          <Route path='/Admin' element={<Admin/>} />
          <Route path='/Club' element={<Club/>} />
          <Route path='/Documents' element={<Documents/>} />
        </Routes>
    </div>
  );
}

export default App;
