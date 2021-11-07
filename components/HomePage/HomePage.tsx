import React from "react";
import type {NextPage} from "next";
import TopHeader from "./TopHeader";
import ReachOurPatients from "./ReachOurPatients/ReachOurPatients";
import {OurValues} from "./OurValues";
import WhatWeCouldDo from "./WhatWeCouldDo";
import AboutUs from "./AboutUs";
import WriteToUs from "./WriteToUs";
import FaqSection from "./FaqSection/FaqSection";
import Footer from "./Footer";


const Home: NextPage = () => {
  return (
    <div>
      <TopHeader/>
      <ReachOurPatients/>
      <OurValues/>
      <WhatWeCouldDo/>
      <AboutUs/>
      <WriteToUs/>
      <FaqSection/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;