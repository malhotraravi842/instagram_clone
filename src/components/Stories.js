import classes from "./Stories.module.css";
import Story from "./Story";

const Stories = (props) => {
  return (
    <div style={props.style} className={classes.Stories}>
      <Story image="ravi.jpg" username="ravi" />
      <Story image="ravi1.jpg" username="ravichaudhary076" />
      <Story image="ravi2.jpg" username="malhotraravi842" />
      <Story image="ravi3.jpg" username="ravichaudhary076" />
      <Story image="ravi4.jpg" username="malhotraravi842" />
      <Story image="ravi.jpg" username="ravichaudhary076" />
      <Story image="ravi1.jpg" username="malhotraravi842" />
      <Story image="ravi2.jpg" username="ravichaudhary076" />
      <Story image="ravi3.jpg" username="malhotraravi842" />
      <Story image="ravi4.jpg" username="ravichaudhary076" />
      <Story image="ravi.jpg" username="malhotraravi842" />
      <Story image="ravi1.jpg" username="ravichaudhary076" />
      <Story image="ravi2.jpg" username="malhotraravi842" />
      <Story image="ravi3.jpg" username="ravichaudhary076" />
    </div>
  );
};

export default Stories;
