import React, { useState } from "react";
import classes from "./Cart.module.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item.id)}
          onRemove={cartItemRemoveHandler(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount:</span>
        <span> {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close{" "}
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
