import React from "react";
import Deals from "./sections/Deals";
import Services from "./sections/Services";
import Offered from "./sections/Offered";
import Dealer from "./sections/Dealer";
import Questions from "./sections/Questions";
import Payment from "./sections/Payment";
import Navlink from "./sections/Navlink";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-50">
      <Navbar />
    
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <Services />
        <Deals />
        <Offered />
      
        <h1
          className="flex justify-start font-semibold p-3 text-xl mt-6
        "
        >
          Tyres sold by this Dealer
        </h1>
        <div className="flex flex-row justify-end gap-8 ">
          <div className="border border-black">
            <input
              type="text"
              placeholder="Filter By"
              className="border-none outline-none"
            />
            <select id="cars" className="border-none outline-none">
              <option value="volvo">APPLO</option>
              <option value="saab">BEDROCK</option>
              <option value="opel">BIRLA</option>
              <option value="audi">BRIDGE STONE</option>
              <option value="volvo">CEAT</option>
              <option value="saab">DUNLOP</option>
              <option value="opel">GOODLOCK</option>
              <option value="audi">HANDKOOK</option>
            </select>
          </div>

          <div className="border border-black">
            <input
              type="text"
              placeholder="Most Popular"
              className="border-none outline-none"
            />
            <select id="cars" className="border-none outline-none">
              <option value="volvo">APPLO</option>
              <option value="saab">BEDROCK</option>
              <option value="opel">BIRLA</option>
              <option value="audi">BRIDGE STONE</option>
              <option value="volvo">CEAT</option>
              <option value="saab">DUNLOP</option>
              <option value="opel">GOODLOCK</option>
              <option value="audi">HANDKOOK</option>
            </select>
          </div>

          <a>
            <p>Advancer</p>
          </a>
        </div>

<Link to={'/dealer'}>
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-4 sm:grid-rows-3 gap-4 mt-12">
          {[...Array(12)].map((_, index) => (
            <div key={index}>
              <div className="border px-5 bg-white  relative w-[260px] h-[220px] overflow-hidden">
                <h1>apollo</h1>
                <p>AMAZER 4G LIFE</p>
                <p>145/RG</p>
                <img
                  src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                  alt=""
                  className="translate-x-32 h-44  overflow-hidden absolute"
                />
                <div className="flex">
                  <p>4</p>
                  <p>320 ratig</p>
                </div>
                <p>Rs.3,132</p>
                <p>Offer availabe</p>
                <p>Tube Tyre</p>
              </div>
            </div>
          ))}
        </div>
</Link>

        <div className="mt-10 flex justify-start text-gray-500">
          <span>Home / Tyre Dealers / Tyre Dealers Ghaziyabad /SHREE HEM</span>
        </div>
        <Payment />
        <Questions />
      </div>
    </div>
  );
}

export default Home;
