import classes from "./Inbox.module.css";
import { FiSend } from "react-icons/fi";
const NewMessage = () => {
  return (
    <div className={classes.NewMessage}>
      <div>
        <FiSend className={classes.Share} />
        <p>Your Messages</p>
        <h4>Send private photos and messages to a friend or group.</h4>
        <button className={classes.Send} type="button">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
