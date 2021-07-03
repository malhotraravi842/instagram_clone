import { AiFillHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { IoIosCompass } from "react-icons/io";
import { Nav, NavLink, Bars, Notification, Account } from "./NavbarElements";
import classes from "./NavStyle.module.css";
import HeadingLogo from "./HeadingLogo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Nav>
      <Bars />
      <div className={classes.NavMenu}>
        <NavLink to="/">
          <HeadingLogo />
        </NavLink>
        <div className={classes.Search}>
          <SearchBar />
        </div>
        <div className={classes.NavLinksMenu}>
          <NavLink to="/">
            <AiFillHome />
          </NavLink>
          <NavLink to="/inbox">
            <RiMessengerLine />
          </NavLink>
          <NavLink to="/explore">
            <IoIosCompass />
          </NavLink>
          <Notification />
          <Account />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
