import classes from "./ProfileCard.module.css";
const ProfileCard = (props) => {
  return (
    <div
      style={{ marginTop: props.margin }}
      className={classes.ProfileCard + " " + props.className}
    >
      <img
        style={{
          height: props.imageSize,
          width: props.imageSize,
          border: props.border,
        }}
        src={"../assets/" + props.image}
        alt="profile-pic"
      />
      <div
        style={{ paddingTop: props.padding }}
        className={classes.ProfileDetail}
      >
        <a style={{ fontSize: props.titleSize }} href="/">
          {props.username}
        </a>
        {props.quote ? (
          <p style={{ fontSize: props.quoteSize }}>{props.quote}</p>
        ) : null}
      </div>
      {props.button ? (
        <a className={classes.Switch} href="/">
          {props.button}
        </a>
      ) : null}
    </div>
  );
};

export default ProfileCard;
