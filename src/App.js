import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox/Inbox";
import Explore from "./Pages/Explore/Explore";
import Profile from "./Pages/Profile/Profile";
import Account from "./Pages/Account/Account";
// import Saved from "./Pages/Saved/Saved";
import Settings from "./Pages/Settings/Settings";
// import Tagged from "./Pages/Tagged/Tagged";
// import Igtv from "./Pages/Igtv/Igtv";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/account" exact component={Account} />
      </Switch>
      <Navbar />
    </Router>
  );
};

export default App;
