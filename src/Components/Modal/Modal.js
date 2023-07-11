import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM  from "react-dom";



export const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide} />;
};

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>{" "}
    </div>
  );
};


const Modal = (props) => { 
  const portalElement = document.getElementById("overlays");
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <BackDrop onHide={props.onClick} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );
}

export default Modal;
