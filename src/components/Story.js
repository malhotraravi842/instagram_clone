import classes from "./Stories.module.css";

const Story = (props) => {
  let username = props.username;
  let l = username.length;
  if (l > 10) {
    username = username.substr(0, 10) + "...";
  }
  return (
    <div className={classes.Story}>
      <img src={"./assets/" + props.image} alt={props.username} />
      <p>{username}</p>
    </div>
  );
};

export default Story;
