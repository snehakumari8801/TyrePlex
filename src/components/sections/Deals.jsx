import React from "react";


function Deals() {
  return (
    <div className="bg-white pb-16 p-3">
      <p className="font-bold flex justify-start pl-3">Deals in</p>
      
      {/* Container for horizontal scrolling */}
      <div className="overflow-x-auto flex gap-4 mt-5 whitespace-nowrap scrollbar-hidden">
        {/* Each item should not shrink */}
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border border-gray-300 w-[200px] shrink-0"
          >
            <img
              src="https://car-logos.net/wp-content/uploads/2023/04/mrf-logo-1946-present-scaled.webp"
              alt=""
              className="w-[100px]"
            />
            <span>MRF</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
