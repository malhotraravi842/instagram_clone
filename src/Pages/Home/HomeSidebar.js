import classes from "./Home.module.css";
import ProfileCard from "./ProfileCard";

const HomeSidebar = () => {
  return (
    <div className={classes.HomeSidebar}>
      <ProfileCard />
    </div>
  );
};

export default HomeSidebar;
