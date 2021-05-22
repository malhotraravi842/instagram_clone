import { useState } from "react";
import classes from "./PostSection.module.css";
import { GrEmoji } from "react-icons/gr";
import Picker from "emoji-picker-react";

const Comment = () => {
  const [picker, setPicker] = useState(false);
  return (
    <div className={classes.Comment}>
      <GrEmoji className={classes.Emoji} onClick={() => setPicker(!picker)} />
      {picker ? (
        <div className={classes.EmojiPicker}>
          <Picker />
        </div>
      ) : null}
      <form>
        <label htmlFor="header-search">
          <span className={classes.Hidden}>Add a Comment</span>
          <input
            type="text"
            id="header-search"
            placeholder="Add a Comment"
            name="s"
          />
          <button className={classes.Button} type="submit">
            Post
          </button>
        </label>
      </form>
    </div>
  );
};

export default Comment;
