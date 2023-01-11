import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import PhotoForm from "./Components/PhotoForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Gallery />
        <Routes>
          <Route path="/" element={<PhotoForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
