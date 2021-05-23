import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import classes from "./PostSection.module.css";
import Comment from "./Comment";

const Description = () => {
  return (
    <div className={classes.Description}>
      <div className={classes.Likes}>2000 likes</div>
      <a href="/">malhotraravi842</a>
      <p>Too #calm To give a #damn 😎😈</p>
    </div>
  );
};

const PostFooter = () => {
  return (
    <div className={classes.PostFooter}>
      <div className={classes.Icons}>
        <AiOutlineHeart className={classes.Icon} />
        <BsChat className={classes.Icon} />
        <FiSend className={classes.Icon} />
        <BiBookmark className={classes.Bookmark + " " + classes.Icon} />
      </div>
      <Description />
      <Comment />
    </div>
  );
};

export default PostFooter;
