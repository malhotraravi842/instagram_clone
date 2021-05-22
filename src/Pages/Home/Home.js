import React from "react";
import classes from "./Home.module.css";
import Posts from "./Posts";
import HomeSidebar from "./HomeSidebar";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.FirstPart}>
        <Posts />
      </div>
      <div className={classes.SecondPart}>
        <HomeSidebar />
      </div>
    </div>
  );
};

export default Home;
