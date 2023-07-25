import './App.css';
import { useState } from 'react';
import Cards from './components/cards/Cards';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import { Alert } from 'bootstrap';
import Detail from './components/Detail/Detail';


function App() {
   
   const [characters, setCharacters ] = useState ([])   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find((char)=> char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function random () {
      let randomId = Math.ceil(Math.random()* 826);
      onSearch(randomId);
   }
   function onClose(id) {
     setCharacters(characters.filter((char)=>char.id !== id)); 
   }
   return (
      
      <div className='App'>
         <Nav onSearch = {onSearch} random={random}/>

        <Routes>
         <Route 
         path='/Home'
         element={<Cards characters={characters} onClose={onClose}/>}
          />
          <Route
          path='about'
          element={<about/>}
          />
          <Route
          path='/detail/:detalId'
          element={<Detail/>}/>
          </Routes>
         
        
         
      </div>
   );
}

export default App;
