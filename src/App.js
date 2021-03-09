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
      <Helmet>
        <meta name="description" content="Tutorial for React Helmet" />
        <meta name="theme-color" content="#0000" />
        <meta property="og:site_name" content="CampersTribe" />
        <meta
          property="url"
          content="https://social-share-app.herokuapp.com/"
        />
        <meta name="description" content="Nested component"></meta>
        <title>React Helmet Tutorial</title>
        <link rel="canonical" href="https://social-share-app.herokuapp.com/" />
      </Helmet>
      <div
        className="App"
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <LinkedinShareButton
          url={"https://social-share-app.herokuapp.com/"}
          title={"CampersTribe - World is yours to explore"}
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
