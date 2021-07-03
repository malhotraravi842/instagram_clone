import { useState, useRef, useEffect } from "react";
import { CgProfile, CgSync } from "react-icons/cg";
import { BiBookmark } from "react-icons/bi";
import { BsGearWide } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import classes from "./NavStyle.module.css";

function useOutsideAlerter(ref, setIsClicked) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsClicked]);
}

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

export const Notification = () => {
  const [isClicked, setIsClicked] = useState(false);
  let style;
  if (isClicked) {
    style = { display: "block" };
  } else {
    style = { display: "none" };
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsClicked);

  return (
    <div
      ref={wrapperRef}
      onClick={() => setIsClicked(!isClicked)}
      className={classes.Notification}
    >
      <AiOutlineHeart className={classes.HeartIcon} />
      <div style={style} className={classes.NotificationContent}>
        <p>Hello Ravi Chaudhary</p>
      </div>
    </div>
  );
};

export const Account = () => {
  const [isClicked, setIsClicked] = useState(false);
  let style;
  if (isClicked) {
    style = { display: "block" };
  } else {
    style = { display: "none" };
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsClicked);

  return (
    <div
      ref={wrapperRef}
      onClick={() => setIsClicked(!isClicked)}
      className={classes.Account}
    >
      <img src="../assets/ravi.jpg" alt="profile" />
      <div style={style} className={classes.AccountContent}>
        <div>
          <Link className={classes.Li} to="/profile">
            <CgProfile />
            &nbsp;&nbsp;Profile
          </Link>
        </div>
        <div>
          <Link className={classes.Li} to="/profile/saved">
            <BiBookmark />
            &nbsp;&nbsp;Saved
          </Link>
        </div>
        <div>
          <Link className={classes.Li} to="/settings">
            <BsGearWide />
            &nbsp;&nbsp;Settings
          </Link>
        </div>
        <div>
          <Link className={classes.Li} to="/accounts">
            <CgSync />
            &nbsp;&nbsp;Switch Account
          </Link>
        </div>
        <hr />
        <div>
          <Link className={classes.Li} to="/accounts">
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};
