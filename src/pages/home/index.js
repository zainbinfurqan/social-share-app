import React from "react";
import { Helmet } from "react-helmet";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

function Home(props) {
  return (
    <div style={{height:'100vh',backgroundColor:'black'}}>
      <Helmet>
        <title>Social-Sharing-App | Home</title>
        <meta name="description" content="Home" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h2 style={{ color: "white" , margin: "0px"}}>Home</h2>
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
