import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Projectpage from "./pages/Projectpage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="project" element={<Projectpage />} />
        <Route path="contact" element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default App;
