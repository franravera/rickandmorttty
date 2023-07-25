import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Detail = ()=> {
    const {id}= useParams();

const [character, setCharacter]= useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

   return( 
    <div>
    <div>
         
       <div>
         <h1 >{character.name}</h1>
         <h3>Status | {character.status}</h3>
         <h3>Specie | {character.species}</h3>
         <h3>Gender | {character.gender}</h3>
         <h3>Origin | {character.origin?.name}</h3>
       </div>
         <img src={character.image} alt={character.name}/>              
         
    </div>
    </div>
  )
}


export default Detail;