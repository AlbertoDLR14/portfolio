import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Trabajos from "./Pages/Trabajos";
import DetalleTrabajo from "./components/DetalleTrabajo/DetalleTrabajo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="/trabajos/:trabajoId/" element={<DetalleTrabajo />} />
      </Routes>
    </Router>
  );
}

export default App;
