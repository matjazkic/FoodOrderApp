import React from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Components/Cart/Cart";



function App() {
  return (
    <React.Fragment>
      <Header />
      <Meals />
      <Cart />
    </React.Fragment>
  );
}

export default App;
