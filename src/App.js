import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Services from "./components/main/Services";
import Portfolio from "./components/main/Portfolio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
