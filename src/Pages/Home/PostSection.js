import classes from "./Home.module.css";
import Stories from "../../components/Stories";
import Post from "./Post";

const PostSection = () => {
  return (
    <div className={classes.Posts}>
      <Stories />
      <Post image="ravi.jpg" />
      <Post image="ravi1.jpg" />
      <Post image="ravi2.jpg" />
      <Post image="ravi3.jpg" />
    </div>
  );
};

export default PostSection;
