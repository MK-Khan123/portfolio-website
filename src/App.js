import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Blogs from "./components/Blogs/Blogs";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
        <Route path='/contact'>
          <ContactMe />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
