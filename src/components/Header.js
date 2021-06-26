import React from 'react';

export default function Header(props) {
   const {countCartItems} = props;

   return (
      <header className="row block center">
         <div className="header__top col-2 row center">
            <a href="#/">
               <h1>Small Shopping Crat</h1>
            </a>
            <div>
               <a href="#/cart" className="cart-link">
                  Cart { '' }
                     {countCartItems ? (<button className="badge">{countCartItems}</button>) : ('')
                  }
               </a>
               <a href="#/signin">Sign In</a>
            </div>
         </div>
      </header>
   )
}