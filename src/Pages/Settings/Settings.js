import classes from "./Settings.module.css";
import Footer from "../../components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";

const SidebarLink = (props) => {
  return (
    <div className={classes.SidebarLink}>
      <Link className={classes.Link} to={props.to}>
        {props.children}
      </Link>
    </div>
  );
};

const Settings = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <div className={classes.Settings}>
        <div className={classes.Edit}>
          <div className={classes.FirstPart}>
            <SidebarLink to={`${url}/edit`}>Edit Profile</SidebarLink>
            <SidebarLink to={`${url}/password/change`}>
              Change Password
            </SidebarLink>
            <SidebarLink to={`${url}/manage_access`}>
              App and Website
            </SidebarLink>
            <SidebarLink to={`${url}/emails/settings`}>
              Email and SMS
            </SidebarLink>
            <SidebarLink to={`${url}/push/web/settings`}>
              Push Notifications
            </SidebarLink>
            <SidebarLink to={`${url}/contact_history`}>
              Manage Contacts
            </SidebarLink>
            <SidebarLink to={`${url}/privacy_and_security`}>
              Privacy and Security
            </SidebarLink>
            <SidebarLink to={`${url}/login_activity`}>
              Login Activity
            </SidebarLink>
            <SidebarLink to={`${url}/login_activity`}>
              Login Activity
            </SidebarLink>
            <SidebarLink to={`${url}/emails_sent`}>
              Emails from Instagram
            </SidebarLink>
          </div>
          <div className={classes.SecondPart}>
            <h1>No Hello</h1>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Settings;
