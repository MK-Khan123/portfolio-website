import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />

        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Box>
  );
}

export default App;
