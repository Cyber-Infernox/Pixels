import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import PhotoForm from "./Pages/PhotoForm";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<PhotoForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
