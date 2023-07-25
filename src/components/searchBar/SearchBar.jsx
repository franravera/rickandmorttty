import { useState } from "react";
export default function SearchBar({onSearch, random}) {
 
   const [id, setId] = useState ('')
    
   function handleChange (event) {
     setId(event.target.value)  
    };
   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={()=>onSearch(id)}>Agregar</button> 
         <button onClick={random}>randompj</button>
      </div>
   );
}

// Crea una función handleChange de modo que, cada
//  vez que el usuario escriba algo en el input, este se guarde en el estado local id.
// No te olvides de pasarle esta función al input,
//  y asignarle a este el estado local como su value.
// Una vez que hayas cumplido con todos estos pasos,
//  asegúrate de que cada vez que se ejecute la función onSearch esa reciba 
//  el estado id como argumento.
