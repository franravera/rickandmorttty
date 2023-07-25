import Card from '../card/Card';
import styleC from '../cards/cards.module.css'


export default function Cards(props) {

   const {characters, onClose} = props;

   return (
   <div className={styleC.div}>
         {characters.map((char)=>{
         return <Card className={styleC.cardsita}
         onClose = {onClose}
        key = {char.id}
         name={char.name}
         status={char.status}
         species={char.species}
         gender={char.gender}
         origin={char.origin}
         image = {char.image}
        id = {char.id}
         />
      })}
   </div>);
}
