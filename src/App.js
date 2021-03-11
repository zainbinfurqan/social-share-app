import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Registration from "./pages/registration";
import ReactGA from "react-ga";
ReactGA.initialize("UA-191680881-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
