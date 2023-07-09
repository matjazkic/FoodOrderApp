import React, { useState, } from "react";
import classes from "./Cart.module.css";
import Card from "../Card/Card";
import Modal from '../Modal/Modal'



const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  const [isClicked, setIsClicked] = useState(false);
  const [mealsInCart, setMealsInCart] = useState([]);

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount:</span>
        <span> skupek cen</span>
          </div>
          <div className={classes.actions}>
      <button className={classes['button--alt']}>Close</button>
      <button className={classes.button}>Order</button></div>
    </Modal>
  );
};

export default Cart;
