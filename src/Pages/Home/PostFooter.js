import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import classes from "./PostSection.module.css";
import Comment from "./Comment";

const PostFooter = () => {
  return (
    <div className={classes.PostFooter}>
      <div className={classes.Icons}>
        <AiOutlineHeart className={classes.Icon} />
        <FaRegComment className={classes.Icon} />
        <AiOutlineShareAlt className={classes.Icon} />
        <BiBookmark className={classes.Bookmark + " " + classes.Icon} />
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis
      totam aliquam dolorum iste at beatae explicabo optio incidunt commodi,
      dolore esse voluptatem repellendus dolor ipsum suscipit ullam fugit?
      Voluptas.
      <p></p>
      <Comment />
    </div>
  );
};

export default PostFooter;
