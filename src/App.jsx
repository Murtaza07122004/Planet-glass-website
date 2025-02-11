import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Herosection2 from "./Herosection2";
import Aboutproject from "./Aboutproject";
import KaamSection from "./KaamSection";
import ContactForm from "./ContactForm";
import CustomGlassInstallations from "./CustomGlassInstallations";
import Footer from "./Footer";
// import Aboutproject from "./Aboutproject"  // Import Project Showcase component
import FeaturesSection from "./FeatureSection"; // Import Project Details component
import GetInTouch from "./GetInTouch";


const App = () => {
  return (
    <Router>
      <NavBar /> 
      {/* Navbar stays the same for all pages */}
      <Routes>
        {/* Main homepage */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <Herosection2 />
              <Aboutproject />
              <KaamSection />
              <GetInTouch/>
             
            </>
          } 
        />
        <Route path="/JoinUs" element={<ContactForm/>}/>
        <Route path="/project/:id" element={<><FeaturesSection/></>} />
        <Route path="/Services" element={<CustomGlassInstallations/>}/>
      </Routes>
          <Footer/>
    </Router>
  );
};

export default App;
