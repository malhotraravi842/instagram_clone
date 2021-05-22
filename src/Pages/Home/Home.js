import React from "react";
import classes from "./Home.module.css";
import PostSection from "./PostSection";
import HomeSidebar from "./HomeSidebar";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.FirstPart}>
        <PostSection />
      </div>
      <div className={classes.SecondPart}>
        <HomeSidebar />
      </div>
    </div>
  );
};

export default Home;
