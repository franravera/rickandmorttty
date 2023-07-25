import { Link } from 'react-router-dom';
import style from '../card/card.module.css'

export default function Card({name, status, species, gender, origin, image, id, onClose}) {
   
   return (
      <div className={style.divisor}>
                     
            <button onClick={()=>onClose(id)}>X</button>
             <Link to={`/Detail/${id}`}> 
             <h1 className={style.nombrepj} >{name}</h1>
             </Link>
        
         <h2>{status}</h2>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin.name}</h3>
         <img className={style.imagenn} src={image} alt='' />
          
      </div>
   );
}
