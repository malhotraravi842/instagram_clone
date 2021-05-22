import classes from "./Suggestions.module.css";
import ProfileCard from "./ProfileCard";

const Suggestions = () => {
  return (
    <div className={classes.Suggestion}>
      <h4>Suggestions For You</h4>
      <a className={classes.SeeAll} href="/">
        See All
      </a>
      <br />
      <br />
      <ProfileCard
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi.jpg"
        button="Follow"
        imageSize="40px"
        margin="7px"
        titleSize="0.9em"
        quoteSize="0.7em"
        padding="0px"
        border="none"
      />
      <ProfileCard
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi1.jpg"
        button="Follow"
        imageSize="40px"
        margin="7px"
        titleSize="0.9em"
        quoteSize="0.7em"
        padding="0px"
        border="none"
      />
      <ProfileCard
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi2.jpg"
        button="Follow"
        imageSize="40px"
        margin="7px"
        titleSize="0.9em"
        quoteSize="0.7em"
        padding="0px"
        border="none"
      />
      <ProfileCard
        className={classes.SuggestionProfile}
        username="malhotraravi842"
        quote="Followed by abcd.............."
        image="ravi3.jpg"
        button="Follow"
        imageSize="40px"
        margin="7px"
        titleSize="0.9em"
        quoteSize="0.7em"
        padding="0px"
        border="none"
      />
    </div>
  );
};

export default Suggestions;
