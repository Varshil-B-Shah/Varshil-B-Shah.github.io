import React from "react";
import Navbar from "./components/Navbar";
import Illustration from "./components/Illustration";
import Communities from "./components/Communities";
import PixelGrade from "./components/PixelGrade";
import Marketing from "./components/Marketing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Illustration />
      <Communities />
      <PixelGrade />
      <Marketing />
      <Footer />
    </div>
  );
}

export default App;
