import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { useEffect } from "react";
// import { getLCP, getFID, getCLS } from "web-vitals";
import { googleAnalyticsActions } from "../../utils/google-analytics/google-analytics-init";
import ReactGA from "react-ga";
import { webVitalActions } from "../../utils/google-analytics/google-analytics-get-web-vitals";
ReactGA.initialize('UA-191680881-1');
ReactGA.pageview(window.location.pathname + window.location.search);
function Login(props) {
  useEffect(() => {
    // webVitalActions.sendDataToAnalytics("login");
    // webVitalActions.googleAnalyticsGetWebVitals("login");
    // webVitalActions.sendDataToGAForWebVitalsReport("login");
    // googleAnalyticsActions.initGoogleAnalytics("UA-191680881-1");
    // googleAnalyticsActions.initGoogleAnalytics("UA-191797355-1");
    // ReactGA.initialize("UA-191680881-1");
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Helmet>
        <title>Social-Sharing-App | Login</title>
        <meta name="description" content="Login" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2 style={{ color: "white", margin: "0px", textAlign: "center" }}>
        Login
      </h2>
      <div
        style={{
          display: "flex",
          height: "50px",
        }}
      >
        <div
          style={{
            alignSelf: "center",
          }}
        >
          <Link className="link-href" to="/registration">
            Registration
          </Link>
        </div>
        <div
          style={{
            alignSelf: "center",
          }}
        >
          <Link className="link-href" to="/about">
            About
          </Link>
        </div>
        <div
          style={{
            alignSelf: "center",
          }}
        >
          <Link className="link-href" to="/home">
            Home
          </Link>
        </div>
      </div>
      <LinkedinShareButton
        url="https://social-share-app.herokuapp.com/login"
        title="CampersTribe - World is yours to explore"
        summary="CampersTribe - World is yours to explore"
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
    </div>
  );
}

export default Login;
