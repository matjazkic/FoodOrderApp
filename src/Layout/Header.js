import React from "react"; 
import classes from './Header.module.css'
import mealPicture from '../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

  return (
    <React.Fragment>
      <header className={classes.header}>
        {" "}
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.showCartHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealPicture} alt="slika" />
      </div>
    </React.Fragment>
  );
};

export default Header;
