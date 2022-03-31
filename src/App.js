import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Box className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
