import classes from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  return (
    <div className={classes.ProfileCard}>
      <img src={"../assets/" + props.image} alt="profile-pic" />
      <div className={classes.ProfileDetail}>
        <a href="/">{props.username}</a>
        <p>{props.quote}</p>
      </div>
      <a className={classes.Switch} href="/">
        Switch
      </a>
    </div>
  );
};

export default ProfileCard;
