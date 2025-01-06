import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;