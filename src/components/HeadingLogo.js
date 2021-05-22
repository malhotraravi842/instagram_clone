import classes from "./NavStyle.module.css";

const HeadingLogo = () => {
  return (
    <img
      className={classes.NavLogo}
      src="../assets/InstagramLogo.png"
      alt="Logo"
    />
  );
};

export default HeadingLogo;
