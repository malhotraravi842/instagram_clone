import classes from "./Inbox.module.css";
import { AiOutlineDown } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import Messages from "./Messages";

const Inbox = () => {
  return (
    <div className={classes.Inbox}>
      <div className={classes.FirstPart}>
        <div className={classes.Account}>
          malhotraravi842 <AiOutlineDown />
          <FaRegEdit className={classes.Edit} />
        </div>
        <Messages />
      </div>
      <div className={classes.SecondPart}></div>
    </div>
  );
};

export default Inbox;
