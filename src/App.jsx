import React, { Suspense } from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";

const pricingPromise = fetch('pricingData.json').then(res => res.json());

const App = () => {
  return (
    <>
      <header>
        <NavBar></NavBar> 
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback= {<span class="loading loading-spinner loading-lg flex mx-auto"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>
    </>
  );
};
export default App;
