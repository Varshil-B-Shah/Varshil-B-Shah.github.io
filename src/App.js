import React from "react";
import Navbar from "./components/Navbar";
import Illustration from "./components/Illustration";
import Communities from "./components/Communities";
import PixelGrade from "./components/PixelGrade";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Illustration />
      <Communities />
      <PixelGrade />
    </div>
  );
}

export default App;
