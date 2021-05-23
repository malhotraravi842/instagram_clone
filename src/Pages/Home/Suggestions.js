import classes from "./Suggestions.module.css";

const SuggestionProfile = (props) => {
  return (
    <div className={classes.SuggestionProfile}>
      <img src={"../assets/" + props.image} alt="profile-pic" />
      <div className={classes.ProfileDetail}>
        <a href="/">{props.username}</a>
        <p>{props.quote}</p>
      </div>
      <a className={classes.Follow} href="/">
        Follow
      </a>
    </div>
  );
};

const Suggestions = () => {
  return (
    <div className={classes.Suggestion}>
      <h4>Suggestions For You</h4>
      <a className={classes.SeeAll} href="/">
        See All
      </a>
      <br />
      <br />
      <SuggestionProfile
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi.jpg"
      />
      <SuggestionProfile
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi1.jpg"
      />
      <SuggestionProfile
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi2.jpg"
      />
      <SuggestionProfile
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi3.jpg"
      />
    </div>
  );
};

export default Suggestions;
