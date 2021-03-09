import logo from "./logo.svg";
import "./App.css";
// import HelmetMetaData from "./lib-components/helmet";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
// import SEO from './components/seo'
import { Helmet } from "react-helmet";
import { BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Registration from "./pages/registration";

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route path='/' component={Home} />
        </Switch>
          {/* <LinkedinShareButton
          url="https://social-share-app.herokuapp.com"
          title="CampersTribe - World is yours to explore"
          summary="CampersTribe - World is yours to explore"
        >
          <LinkedinIcon size={32} />
        </LinkedinShareButton> */}
      </Router>
       
      
  );
}

export default App;
