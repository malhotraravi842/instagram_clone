import classes from "./SearchBar.module.css";

const SearchBar = () => (
  <form action="/" method="get" className={classes.SearchBar}>
    <label htmlFor="header-search">
      <span className={classes.Hidden}>Search</span>
      <input type="text" id="header-search" placeholder="Search" name="s" />
      <button className={classes.Hidden} type="submit">
        Submit
      </button>
    </label>
  </form>
);

export default SearchBar;
