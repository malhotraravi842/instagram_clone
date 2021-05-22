import classes from "./ProfileCard.module.css";
const ProfileCard = () => {
  return (
    <div className={classes.ProfileCard}>
      <img src="../assets/ravi.jpg" alt="profile-pic" />
      <div className={classes.ProfileDetail}>
        <a className={classes.Username} href="/">
          malhotraravi842
        </a>
        <p className={classes.Name}>Ravi Chaudhary😎</p>
      </div>
      <a className={classes.Switch} href="/">
        Switch
      </a>
    </div>
  );
};

export default ProfileCard;
