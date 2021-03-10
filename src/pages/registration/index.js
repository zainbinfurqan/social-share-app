import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { googleAnalyticsActions } from "../../utils/google-analytics/google-analytics-init";
import { webVitalActions } from "../../utils/google-analytics/google-analytics-get-web-vitals";
function Registration(props) {
  useEffect(() => {
    console.log("useEffect login");
    webVitalActions.sendDataToAnalytics("login");
    webVitalActions.sendDataToGAForWebVitalsReport("login");
    googleAnalyticsActions.initGoogleAnalytics("UA-191680881-1");
  }, []);

  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Helmet>
        <title>Social-Sharing-App | Registration</title>
        <meta name="description" content="Registration" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2 style={{ color: "white", margin:'0px', textAlign:'center'  }}>Registration</h2>
      <div  style={{
            height: '50px'
      }}>
        <Link className="link-href" to="/login">
          Login
        </Link>
        <Link className="link-href" to="/home">
          Home
        </Link>
        <Link className="link-href" to="/about">
          About
        </Link>
      </div>
      <LinkedinShareButton
        url="https://social-share-app.herokuapp.com/registration"
        title="CampersTribe - World is yours to explore"
        summary="CampersTribe - World is yours to explore"
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
    </div>
  );
}

export default Registration;
