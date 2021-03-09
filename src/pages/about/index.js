import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

function About(props) {
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
