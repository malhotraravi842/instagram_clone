import { useState } from "react";
import classes from "./PostSection.module.css";
import PostFooter from "./PostFooter";
import { BsThreeDots } from "react-icons/bs";
import Modal from "./Modal";

const PostHeader = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={classes.PostHeader}>
      <img src={"../assets/" + props.image} alt="profile-pic" />
      <div>
        <a href="/">{props.username}</a>
        <button onClick={() => setModal(!modal)} type="button">
          <BsThreeDots />
        </button>
      </div>
      {modal ? <Modal onConfirm={setModal} /> : null}
    </div>
  );
};

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <PostHeader image="ravi.jpg" username="malhotraravi842" />
      <img src={"../assets/" + props.image} alt="Post" />
      <PostFooter />
    </div>
  );
};

export default Post;
