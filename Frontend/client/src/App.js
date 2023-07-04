import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAuthContext } from "./Hooks/useAuthContext";

// CSS
import "./App.css";

// Components
import Navbar from "./Components/Navbar/Navbar";

// Pages
import Home from "./Pages/Home/Home";
import PhotoForm from "./Pages/PhotoForm";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/post" element={<PhotoForm />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
