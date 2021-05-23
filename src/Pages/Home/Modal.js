import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={() => props.onConfirm(false)}
      className={classes.Backdrop}
    ></div>
  );
};

const ModalLink = (props) => {
  return (
    <div
      style={props.style}
      onClick={() => props.onConfirm(false)}
      className={classes.ModalLink}
    >
      <p style={props.style}>{props.name}</p>
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.ModalOverlay}>
      <ModalLink
        style={{ color: "red", border: "none" }}
        link="/"
        name="Report"
      />
      <ModalLink style={{ color: "red" }} link="/" name="Unfollow" />
      <ModalLink link="/" name="Go To Post" />
      <ModalLink link="/" name="Share to" />
      <ModalLink link="/" name="Copy Link" />
      <ModalLink link="/" name="Embeded" />
      <ModalLink onConfirm={props.onConfirm} link="/" name="Cancel" />
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
