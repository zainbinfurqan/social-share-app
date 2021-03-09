import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { getLCP, getFID, getCLS } from "web-vitals";
import { useEffect } from "react";
import ReactGA from "react-ga";

function Home(props) {

    useEffect(() => {
       
        console.log(window)
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
    const body = JSON.stringify({[metric.name]: metric.value});
        // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
        (navigator.sendBeacon && navigator.sendBeacon('https://www.google-analytics.com/analytics.js', body)) ||
            fetch('https://www.google-analytics.com/analytics.js', {body, method: 'POST', keepalive: true});
      }
      function sendToGoogleAnalytics({ name, delta, id }) {
     console.log(name, delta, id)
        window.ga("send", "event", {
          eventCategory: "Web Vitals",
          eventAction: name,
          eventLabel: id,
          eventValue: Math.round(name === "CLS" ? delta * 1000 : delta),
          nonInteraction: true,
          transport: "beacon",
        });
      }
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Helmet>
        <title>Social-Sharing-App | Home</title>
        <meta name="description" content="Home" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2 style={{ color: "white", margin: "0px" }}>Home</h2>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/about">About</Link>
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
