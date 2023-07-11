import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Components/Store/cart-context";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartButtonClicked, setCartButtonClicked] = useState(false);

  const showCartHandler = () => {
    setCartButtonClicked(true);
  };

  const hideCartHandler = () => {
    setCartButtonClicked(false);
  };

  return (
    <CartProvider >
      
        <Header showCartHandler={showCartHandler} />
        <Meals />
        {cartButtonClicked && <Cart hideCartHandler={hideCartHandler} />}
     
    </CartProvider>
  );
}

export default App;
