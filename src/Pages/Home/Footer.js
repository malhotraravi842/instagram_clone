import classes from "./Home.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <a href="/">About</a>
      <a href="/">Help</a>
      <a href="/">Press</a>
      <a href="/">API</a>
      <a href="/">Jobs</a>
      <a href="/">Privacy</a>
      <a href="/">Terms</a>
      <a href="/">Locations</a>
      <a href="/">Top Accounts</a>
      <a href="/">Hashtags</a>
      <a href="/">Language</a>
      <a href="/">English</a>
      <a style={{ clear: "both", marginTop: "20px" }} href="/">
        © 2021 RAVI CHAUDHARY
      </a>
    </div>
  );
};

export default Footer;
