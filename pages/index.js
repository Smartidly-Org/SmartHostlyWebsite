import { Footer, Navbar } from "../components";
import { useState, useEffect } from "react";

import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Home = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Change the threshold value as needed to control when the Navbar becomes sticky
    const threshold = 100;
    setIsNavbarSticky(scrollY > threshold);
  };

  // Add the scroll event listener to handle scrolling and change Navbar's sticky state
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="bg-primary-black overflow-hidden">
  <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <Navbar />
    </div>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    {/* <World /> */}
    <div className="relative">
{/*       <Insights />
 */}      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);
};

export default Home;
