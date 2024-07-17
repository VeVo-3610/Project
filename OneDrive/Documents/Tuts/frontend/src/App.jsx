import React from "react";
import Navbar from "./components/Navar/Navbar.jsx";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About.jsx";
import WhyChoose from "./components/WhyChoose/WhyChoose.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Banner from "./components/Banner/Banner.jsx";

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      <About HandlePopup={HandlePopup} />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
