import React, { useState } from "react";
import classes from "./Cart.module.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount:</span>
        <span> 35,88</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
