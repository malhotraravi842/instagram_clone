import "./Gallery.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";

const Post = (props) => {
  return (
    <div className="gallery-item" tabindex="0">
      <img src={props.src} className="gallery-image" alt="post-img" />
      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes">
            <span className="visually-hidden">Likes:</span>
            <AiOutlineHeart /> {props.likes}
          </li>
          <li className="gallery-item-comments">
            <span className="visually-hidden">Comments:</span>
            <BsChat className="icon" /> {props.comments}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
