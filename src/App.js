// import logo from "./logo.svg";
import "./App.css";
// import HelmetMetaData from "./lib-components/helmet";
// import { LinkedinShareButton, LinkedinIcon } from "react-share";
// import SEO from './components/seo'
// import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Registration from "./pages/registration";
// import { getLCP, getFID, getCLS } from "web-vitals";
import { useEffect } from "react";
import ReactGA from "react-ga";
// import {  googleAnalyticsActions} from './utils/google-analytics/google-analytics-init'
// import { webVitalActions} from './utils/google-analytics/google-analytics-get-web-vitals'

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-191797355-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
