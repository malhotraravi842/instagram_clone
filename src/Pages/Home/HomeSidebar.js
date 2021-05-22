import classes from "./Home.module.css";
import ProfileCard from "./ProfileCard";
import Suggestions from "./Suggestions";

const HomeSidebar = () => {
  return (
    <div className={classes.HomeSidebar}>
      <ProfileCard
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="RaviChaudhary😎"
        image="ravi1.jpg"
        button="Switch"
        imageSize="70px"
        padding="8px"
      />
      <Suggestions />
    </div>
  );
};

export default HomeSidebar;
