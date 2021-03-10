import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { useEffect } from "react";
import { googleAnalyticsActions } from "../../utils/google-analytics/google-analytics-init";
import { webVitalActions } from "../../utils/google-analytics/google-analytics-get-web-vitals";

function About(props) {
  useEffect(() => {
    console.log("useEffect login");
    webVitalActions.sendDataToAnalytics("login");
    webVitalActions.sendDataToGAForWebVitalsReport("login");
    googleAnalyticsActions.initGoogleAnalytics("UA-191680881-1");
  }, []);

  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Helmet>
        <title>Social-Sharing-App | About</title>
        <meta name="description" content="About" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2 style={{ color: "white",margin:'0px', textAlign:'center' }}>About</h2>
      <div  style={{
            height: '50px'
      }}>
        <Link className="link-href" to="/login">
          Login
        </Link>
        <Link className="link-href" to="/registration">
          Registration
        </Link>
        <Link className="link-href" to="/home">
          Home
        </Link>
      </div>
      <LinkedinShareButton
        url="https://social-share-app.herokuapp.com/about"
        title="CampersTribe - World is yours to explore"
        summary="CampersTribe - World is yours to explore"
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
    </div>
  );
}

export default About;
