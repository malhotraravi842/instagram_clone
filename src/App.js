import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Inbox from "./Pages/Inbox/Inbox";
import Explore from "./Pages/Explore/Explore";
import Likes from "./Pages/Likes/Likes";
import Profile from "./Pages/Profile/Profile";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/likes" exact component={Likes} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
