import React, { Suspense } from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const pricingPromise = fetch('pricingData.json').then(res => res.json());

const App = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback= {<span class="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
};
export default App;
