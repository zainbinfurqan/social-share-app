import logo from "./logo.svg";
import "./App.css";
// import HelmetMetaData from "./lib-components/helmet";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
// import SEO from './components/seo'
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      {/* <HelmetMetaData
        title={undefined}
        description={undefined}
        image={undefined}
      ></HelmetMetaData> */}
      
      <div
        className="App"
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Helmet>
          <title>Turbo Todo</title>
          <meta name="description" content="Todos!" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <LinkedinShareButton
          url={"https://social-share-app.herokuapp.com"}
          title="CampersTribe - World is yours to explore"
          hashtag="#camperstribe"

          //  className={classes.socialMediaButton}
        >
          <LinkedinIcon size={32} />
        </LinkedinShareButton>
      </div>
    </>
  );
}

export default App;
