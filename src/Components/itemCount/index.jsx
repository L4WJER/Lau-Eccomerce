import './itemCount.css';

import React, { useState } from 'react';
export const itemCount = ({initial,stock,onAdd}) =>{
  const [count , setcount ] = useState (initial);

  const decrease = () => {
    setCount (count -1);
  }

  const increase = ()=>{
    setCount(Count + 1);
  }

  return (
    <div className='counter'>
      <button disabled={count <= 1} onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <div>
         <button disabled={count => stock} onClick={increase}>agregar al carrito</button>
      </div>
   


    </div>
  );
}
export default itemCount;