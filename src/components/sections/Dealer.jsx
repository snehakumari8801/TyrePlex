import React from "react";
import Navbar from "../Navbar";
import Alternatives from "./Alternatives";
import Details from "./Details";
import Questions from "./Questions";

function Dealer() {
  return (
    <div>
      <Navbar />
      <Details/>
      <Alternatives/>
     
      <div className='sm:mr-20 sm:ml-20 mt-5 mr-5 ml-5'>
      <Questions/>
      </div>
    </div>
  );
}

export default Dealer;
