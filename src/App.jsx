import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Invitacion from "./components/Intivacion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:id" element={<Invitacion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
