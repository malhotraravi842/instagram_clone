import classes from "./Home.module.css";
import ProfileCard from "./ProfileCard";
import Suggestions from "./Suggestions";
import Footer from "./Footer";

const HomeSidebar = () => {
  return (
    <div className={classes.HomeSidebar}>
      <ProfileCard
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="RaviChaudhary😎"
        image="ravi1.jpg"
      />
      <Suggestions />
      <Footer />
    </div>
  );
};

export default HomeSidebar;
