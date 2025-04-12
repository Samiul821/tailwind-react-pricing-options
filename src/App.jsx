import React from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <DaisyNav></DaisyNav>
      </header>
    </>
  );
};
export default App;
