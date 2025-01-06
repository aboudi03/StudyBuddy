import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/body.tsx";
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <Footer />
    </div>
  );
};

export default App;