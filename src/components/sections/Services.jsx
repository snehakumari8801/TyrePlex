import React from "react";

function Services() {
  return (
    <div className="bg-white mt-3  mb-10 p-6">
      <div className="max-w-full flex flex-col lg:flex-row">
        {/* section1 */}
        <div className="flex flex-col lg:w-[40%] mb-6 lg:mb-0">
          <div className="flex flex-col sm:flex-row">
            <h1 className="font-bold text-lg">SHREE HEMKUNT TYRES AND SERVICES</h1>
            <p className="ml-2 text-green-500">Verified</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-yellow-500 font-bold">4.9</p>
            <p>Star</p>
            <p className="text-gray-500">(2278 Reviews)</p>
          </div>
          <div className="text-gray-700 mt-2">
            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
            INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
          </div>
          <div className="mt-2">Open - Monday to Sunday - 10:00AM to 8:00PM</div>
          <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md">
            Get Direction
          </button>
        </div>

        {/* section2 - Images */}
        <div className="flex sm:flex-row gap-7 pt-10 lg:pt-0 lg:ml-10  flex-col">
          <img
            src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
            alt=""
            className="h-[150px] lg:h-[180px] object-cover"
          />
          <img
            src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
            alt=""
            className="h-[150px] lg:h-[180px] object-cover"
          />
        </div>
      </div>

      {/* section 3 - Reviews */}
      <div className="mt-10">
        <p className="font-bold text-lg">2278 Google reviews</p>

        {/* Scrollable reviews */}
        <div className="flex gap-4 overflow-x-auto mt-4 scrollbar-hidden scroll-smooth scrollbar-thin scrollba">
          {/* Review boxes */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 p-3 w-[275px] md:w-[300px] lg:w-[375px] flex-shrink-0 bg-gray-50 rounded-md"
            >
              <h1 className="font-bold">Md Nasir</h1>
              <p className="text-gray-600">
                Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;