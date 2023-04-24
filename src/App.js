import React, { useEffect, useState } from "react";

import Splash from "./Components/Splash/Splash";
import Container from "./Components/UI/Container";
import BackToTop from "./Components/UI/BackToTop";
import Hero from "./Components/Hero/Hero";
import SectionAbout from "./Components/Sections/SectionAbout";
import SectionExperiences from "./Components/Sections/SectionExperiences";
import SectionProjects from "./Components/Sections/SectionProjects";
import SectionContact from "./Components/Sections/SectionContact";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {splash && <Splash />}

      {!splash && (
        <React.Fragment>
          <Hero />
          <Container>
            <SectionAbout />
            <SectionExperiences />
            <SectionProjects />
            <SectionContact />
            <Footer />
            <BackToTop />
            {!splash && <BackToTop />}
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
