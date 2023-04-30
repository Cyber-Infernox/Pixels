import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";

// Pages
import Home from "./Pages/Home";
import PhotoForm from "./Pages/PhotoForm";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
