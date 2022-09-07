import React,{useEffect, useState} from "react";
import Tittle from '../Tittle';
import itemCount from "../itemCount";
import Itemlist from "../ItemList";

const films [ 
{ id: 1, image: ""}
{ id: 1, image: ""}
{ id: 1, image: ""}

];


export const ItemListContainer = ({texto}) => {

   const [data, setData] = useState ([]);

   useEffect(() =>{
      const gotData= new Promise(resolve =>{
         setTimeout(()=>{

            resolve{films};

         },3000);
      });
      getData.then(res => console.log(res));


   },[]}   
   )
   const onAdd = (quantity)=>{
      console.log('Compraste ${quantity} unidades');
   }
   return (
      <>

           <Tittle greeting={texto} />  
           <itemCount initial={1} stock={5} onAdd={onAdd} />
           <Itemlist data={data}/>
      </>
   );

}

export default ItemListContainer;