import { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Form from './components/Form/Form'

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import Style from './App.module.css'
import Homes from './components/home/Homes'

const email = '';
const password = '';


function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation()
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);






   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const data =  await  axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
         
      } catch (error) {
         console.log({error: error.message})
      }
      ;
   }







   function logoutHandler(){
      setAccess(false);
      navigate('/')
    }


  
   const onSearch =  async (id)=>{
try {
   const data =  await axios(`http://localhost:3001/rickandmorty/character/${id}`)
   if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
   } else {
      window.alert('¡No hay personajes con este ID!');
   }
} catch (error) {
   console.log({error: error.message})
   
}
   }



   function onClose (id) {
      setCharacters(characters
         .filter((char) => char.id !== Number(id)))
   }


   return (
      <div className={Style.App} >
         {
            pathname !== '/' && <NavBar onSearch={onSearch} logout={logoutHandler}/>
         }

         <Routes>
            <Route path={'/'} element={<Form login={login} />} />
            <Route path={'/home'} element={<Homes characters={characters} onClose={onClose}  onSearch={onSearch} />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/detail/:id'} element={<Detail/>} />
            <Route path={'/favorites'} element={<Favorites/>} />
            
         </Routes>
      </div>

   );
}

export default App;
