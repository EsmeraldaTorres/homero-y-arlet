import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "aos/dist/aos.css";
import Invitacion from "./components/Invitacion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DataPage from "./components/invitacion/DataPage";
import HomePage from "./components/invitacion/HomePage";
import ScrollManager from "./components/invitacion/ScrollManager";

function App() {
  return (
    <>
      <Router>
        <ScrollManager />

        <Routes>
          <Route path="/:guests" element={<Invitacion />} />
          <Route path="/data-page" element={<DataPage />} />
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
