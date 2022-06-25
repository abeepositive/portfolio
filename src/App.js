import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ContactMe from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div className="h-screen">
        <div data-aos="fade-down" data-aos-duration="800">
          <Card />
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About />
        </div>
      </div>
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
