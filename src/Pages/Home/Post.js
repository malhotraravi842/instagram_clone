import classes from "./PostSection.module.css";
import ProfileCard from "./ProfileCard";
import PostFooter from "./PostFooter";

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <div>
        <ProfileCard
          className={classes.SuggestionProfile}
          username="malhotraravi842"
          image="ravi2.jpg"
          imageSize="35px"
          margin="7px"
          titleSize="0.8em"
          padding="5px"
          border="none"
        />
      </div>
      <img src={"../assets/" + props.image} alt="Post" />
      <PostFooter />
    </div>
  );
};

export default Post;
