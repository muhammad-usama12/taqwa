import React, { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import PrayerTable from "./Components/PrayerTable";
import Background from "./Background";
import Compass from "./Components/Compass/Compass";
import HadithBox from "./Components/HadithBox/box";
import Names from "./Components/Names/names";

function App() {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    if (window.scrollY > 0 && showFooter) {
      setShowFooter(false);
    } else if (window.scrollY === 0 && !showFooter) {
      setShowFooter(true);
    }
  }

  return (
    <div className="components">
      <Names />
      <img src="" alt="Allah Image" />
      <div className="prayer-comp"></div>
      <div className="compass-comp">
        <Compass />
        <Background />
      </div>
      <PrayerTable />
      <HadithBox />

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
