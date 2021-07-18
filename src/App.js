import { AboutUs } from "./components/AboutUs";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ul className="navigation">
        <li><Link to="/"><img src="/BALogoNew.png" alt="Brittney Arave Website"/></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About</Link></li>
      </ul>
      <Switch>
        <Route path="/about-us">
          <AboutUs/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}


