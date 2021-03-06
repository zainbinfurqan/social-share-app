import logo from "./logo.svg";
import "./App.css";
// import HelmetMetaData from "./lib-components/helmet";
// import { LinkedinShareButton, LinkedinIcon } from "react-share";
// import SEO from './components/seo'
// import { Helmet } from "react-helmet";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Login from "./pages/login";
// import Registration from "./pages/registration";
// import { getLCP, getFID, getCLS } from "web-vitals";
import { useEffect } from "react";
import {googleTimeApiMethods} from './utils/google-utils-files/google-time-api'
// import {  googleAnalyticsActions} from './utils/google-analytics/google-analytics-init'
// import { webVitalActions} from './utils/google-analytics/google-analytics-get-web-vitals'
import ReactGA from "react-ga";
ReactGA.initialize("UA-191680881-1");
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  useEffect(() => {
    googleTimeApiMethods.getLocalTimeZone()
    // ReactGA.initialize("UA-191797355-1");
    // ReactGA.pageview(window.location.pathname + window.location.search);
    // ReactGA.initialize("UA-191680881-1");
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // <Router>
    //   <Switch>
    //     <Route path="/home" component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/login" component={Login} />
    //     <Route path="/registration" component={Registration} />
    //     <Route path="/" component={Home} />
    //   </Switch>
    // </Router>
  );
}

export default App;
