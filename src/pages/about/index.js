import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { getLCP, getFID, getCLS } from "web-vitals";
import { useEffect } from "react";
import ReactGA from "react-ga";

function About(props) {

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
        // Assumes the global `ga()` function exists, see:
        // https://developers.google.com/analytics/devguides/collection/analyticsjs
     console.log(name, delta, id)
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
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Helmet>
        <title>Social-Sharing-App | About</title>
        <meta name="description" content="About" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2 style={{ color: "white", margin: "0px" }}>About</h2>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/home">Home</Link>
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
