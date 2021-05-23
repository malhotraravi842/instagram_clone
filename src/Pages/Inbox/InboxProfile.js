import classes from "./Inbox.module.css";
import { BsDot } from "react-icons/bs";

const InboxProfile = (props) => {
  let message = props.message;
  let l = message.length;

  if (l > 20) {
    message = message.substr(0, 20) + "...";
  }
  return (
    <div className={classes.InboxProfile}>
      <img src={"../assets/" + props.image} alt="profile-pic" />
      <div>
        <p>{props.username}</p>
        <span>
          {message} <BsDot />
          <span>{props.time}</span>
        </span>
      </div>
    </div>
  );
};

export default InboxProfile;
