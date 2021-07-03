import classes from "./Profile.module.css";
import { BsGearWide } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { RiBroadcastFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdGridOn } from "react-icons/md";
import Stories from "../../components/Stories";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
// import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  NavLink,
} from "react-router-dom";
import Saved from "../Saved/Saved";
import Tagged from "../Tagged/Tagged";
import Igtv from "../Igtv/Igtv";

const About = () => {
  return (
    <div className={classes.About}>
      <div className={classes.First}>
        <img src="../assets/ravi.jpg" alt="profile-pic" />
      </div>
      <div className={classes.Second}>
        <div>
          <span>malhotraravi842</span>
          <button type="button">Edit Profile</button>
          <BsGearWide />
        </div>
        <div>
          <span>147 Posts</span>
          <span>268 Followers</span>
          <span>194 Following</span>
        </div>
        <div>
          <p>Ravi Chaudhary😎</p>
          <p>BAdaSs..😈</p>
          <p>Engineer..</p>
          <p>Moodie..😏</p>
          <p>Ⓜusic🎶 L❤ver.</p>
          <p>Little biT saSsy..</p>
          <p>#MSD is ❤</p>
          <p>DiE hArd fAn oF @robertdowneyjr</p>
          <p>www.ravichaudhary.me</p>
        </div>
      </div>
    </div>
  );
};

const ProfileComp = () => {
  let { topicId } = useParams();
  if (topicId === "channel") {
    return (
      <div>
        <Igtv />
      </div>
    );
  } else if (topicId === "saved") {
    return (
      <div>
        <Saved />
      </div>
    );
  } else if (topicId === "tagged") {
    return (
      <div>
        <Tagged />
      </div>
    );
  }
  return (
    <div>
      <Gallery />
    </div>
  );
};

const Profile = () => {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div className={classes.Profile}>
        <About />
        <Stories style={{ border: "none" }} />
        <hr />
        <div className={classes.ProfileNav}>
          <NavLink className={classes.NavLink} to={`${url}/posts`}>
            <MdGridOn /> POSTS
          </NavLink>
          <NavLink className={classes.NavLink} to={`${url}/channel`}>
            <RiBroadcastFill /> IGTV
          </NavLink>
          <NavLink className={classes.NavLink} to={`${url}/saved`}>
            <BiBookmark /> SAVED
          </NavLink>
          <NavLink className={classes.NavLink} to={`${url}/tagged`}>
            <CgProfile /> TAGGED
          </NavLink>
        </div>
        <Switch>
          <Route path={`${path}/:topicId`}>
            <ProfileComp />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Profile;
