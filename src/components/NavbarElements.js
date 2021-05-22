import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import classes from "./NavStyle.module.css";

export const Nav = (props) => {
  return <nav className={classes.Nav}>{props.children}</nav>;
};

export const NavLink = (props) => {
  return (
    <Link className={classes.NavLink} to={props.to}>
      {props.children}
    </Link>
  );
};

export const Bars = (props) => {
  return <FaBars className={classes.FaBars}>{props.children}</FaBars>;
};
