import logo from "./logo.svg";
import "./App.css";
// import HelmetMetaData from "./lib-components/helmet";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
// import SEO from './components/seo'
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Registration from "./pages/registration";
import { getLCP, getFID, getCLS } from "web-vitals";
import { useEffect } from "react";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    getCLS(sendToGoogleAnalytics);
    getFID(sendToGoogleAnalytics);
    getLCP(sendToGoogleAnalytics);
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getLCP(sendToAnalytics);
    ReactGA.initialize("UA-191680881-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  function sendToAnalytics(metric) {
    console.log(navigator.sendBeacon);
    const body = JSON.stringify({ [metric.name]: metric.value });
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    (navigator.sendBeacon && navigator.sendBeacon("https://www.google-analytics.com/analytics.js", body)) ||
      fetch("https://www.google-analytics.com/analytics.js", { body, method: "POST", keepalive: true });
  }

  function sendToGoogleAnalytics({ name, delta, id }) {
    // Assumes the global `ga()` function exists, see:
    // https://developers.google.com/analytics/devguides/collection/analyticsjs
    console.log(name, delta, id);
    window.ga("send", "event", {
      eventCategory: "Web Vitals",
      eventAction: name,
      // The `id` value will be unique to the current page load. When sending
      // multiple values from the same page (e.g. for CLS), Google Analytics can
      // compute a total by grouping on this ID (note: requires `eventLabel` to
      // be a dimension in your report).
      eventLabel: id,
      // Google Analytics metrics must be integers, so the value is rounded.
      // For CLS the value is first multiplied by 1000 for greater precision
      // (note: increase the multiplier for greater precision if needed).
      eventValue: Math.round(name === "CLS" ? delta * 1000 : delta),
      // Use a non-interaction event to avoid affecting bounce rate.
      nonInteraction: true,
      // Use `sendBeacon()` if the browser supports it.
      transport: "beacon",
    });
  }

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
