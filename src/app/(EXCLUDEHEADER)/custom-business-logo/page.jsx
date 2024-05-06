// import { useState } from "react";
// import "./App.css";
import MainSection from "../../../components/Sections/MainSection.jsx";
import Navbar from "../../../components/Sections/Navbar.jsx";
import ServingClients from "../../../components/Sections/ServingClients.jsx";

function CustomBusinessLogo() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainSection />
      <ServingClients />
    </>
  );
}

export default CustomBusinessLogo;
