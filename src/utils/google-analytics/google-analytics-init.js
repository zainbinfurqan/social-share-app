import ReactGA from "react-ga";

const googleAnalyticsActions = {};

googleAnalyticsActions.initGoogleAnalytics = async (key) => {
  ReactGA.initialize(key);
  console.log(window.location.pathname)
  ReactGA.pageview(window.location.pathname);
};

export { googleAnalyticsActions };
