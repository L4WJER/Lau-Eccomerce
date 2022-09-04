import React from "react";
import Tittle from '../Tittle';
import itemCount from "../itemCount";

export const ItemListContainer = ({texto}) => {
   
   const onAdd = (quantity)=>{
      console.log('Compraste ${quantity} unidades');
   }
   return (
      <>

           <Tittle greeting={texto} />  
           <itemCount initial={1} stock={5} onAdd={onAdd} />
      </>
   );

}

export default ItemListContainer;