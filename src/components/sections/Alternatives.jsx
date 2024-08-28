import React from 'react'

function Alternatives() {
  return (
    <div className='bg-white mr-20 ml-20 mt-10'>
        <h1>AMAZER 4G LIFE Alternatives You Can Buy</h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-12 ">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <div className="flex flex-col border px-5 bg-white relative w-[260px] h-[220px] overflow-hidden">
                <div className='flex flex-col justify-start'>
                <h1 className='flex justify-start'>apollo</h1>
                <p className='flex justify-start'>AMAZER 4G LIFE</p>
                <p className='flex justify-start'>145/RG</p>
                </div>
                <img
                  src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                  alt=""
                  className="translate-x-32 h-44  overflow-hidden absolute"
                />
                <div className="flex justify-start">
                  <p>4</p>
                  <p>320 rating</p>
                </div>
                <p className='flex justify-start'>Rs.3,132</p>
                <p className='flex justify-start'>Offer availabe</p>
                <p className='flex justify-start'>Tube Tyre</p>
                <button className='border border-red-500 w-28 text-red-500'>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Alternatives