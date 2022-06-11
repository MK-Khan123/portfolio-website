import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySvg } from './images/up-arrow.svg';
import Home from "./components/Home/Home/Home";
import Preloader from "./components/Shared/Preloader/Preloader";
import './App.css';

const Projects = lazy(() => import("./components/Projects/Projects"));

function App() {
  return (
    <Box className="App">
      <Suspense fallback={<Preloader />}>
        <ScrollToTop style={{ borderRadius: '20px', backgroundColor: 'cyan' }} smooth top={200} component={<MySvg />} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
