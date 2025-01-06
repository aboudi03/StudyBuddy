import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import SignUp from "./components/SignUpPages/SignUp";
import SignIn from "./components/SignIn";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar included here */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
