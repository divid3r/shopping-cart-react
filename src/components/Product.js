import React from 'react';

export function Product(props) {
   const {product, onAdd} = props;

   return (
      <div>
         <img src={product.image} alt={product.name} className="small" />
         <h3>{product.name}</h3>
         <div>${product.price}</div>
         <div>
            <button onClick={() => onAdd(product)}>Add To Crat</button>
         </div>
      </div>
   )
}