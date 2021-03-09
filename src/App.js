import logo from "./logo.svg";
import "./App.css";
import HelmetMetaData from "./lib-components/helmet";
import { LinkedinShareButton ,LineIcon} from "react-share";

function App() {
  return (
    <div className="App" style={{
      backgroundColor:'black',
      height:'100vh'
    }}>
      <HelmetMetaData
        title={undefined}
        description={undefined}
        image={undefined}
      ></HelmetMetaData>
      <LinkedinShareButton
        url={"https://www.ztfloor.com/"}
        title={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe"
        //  className={classes.socialMediaButton}
      >
        <LineIcon size={32}/>
      </LinkedinShareButton>
    </div>
  );
}

export default App;
