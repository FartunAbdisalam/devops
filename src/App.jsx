import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const App = () => {
  return (
    <BrowserRouter>
      <div id="home">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <Features />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
