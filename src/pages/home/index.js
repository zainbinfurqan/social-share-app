import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { useEffect } from "react";
import { googleAnalyticsActions } from "../../utils/google-analytics/google-analytics-init";
import { webVitalActions } from "../../utils/google-analytics/google-analytics-get-web-vitals";
function Home(props) {
  useEffect(() => {
    webVitalActions.sendDataToAnalytics("home");
    webVitalActions.sendDataToGAForWebVitalsReport("home");
    googleAnalyticsActions.initGoogleAnalytics("UA-191680881-1");
  }, []);

  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Helmet>
        <title>Social-Sharing-App | Home</title>
        <meta name="description" content="Home" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2 style={{ color: "white",margin:'0px', textAlign:'center'  }}>Home</h2>
      <div  style={{
            height: '50px'
      }}>
        <Link className="link-href" to="/login">
          Login
        </Link>
        <Link className="link-href" to="/registration">
          Registration
        </Link>
        <Link className="link-href" to="/about">
          About
        </Link>
      </div>
      <LinkedinShareButton
        url="https://social-share-app.herokuapp.com/home"
        title="CampersTribe - World is yours to explore"
        summary="CampersTribe - World is yours to explore"
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
    </div>
  );
}

export default Home;
