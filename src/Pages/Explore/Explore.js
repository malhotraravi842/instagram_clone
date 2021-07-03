import classes from "./Explore.module.css";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

const Explore = () => {
  return (
    <div className={classes.Explore}>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Explore;
