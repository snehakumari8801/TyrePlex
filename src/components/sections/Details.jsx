import React from 'react'

function Details() {
  return (
    <div className="w-11/12 flex flex-col sm:flex-row justify-around p-10 bg-white mr-0 ml-0 sm:mr-20 sm:ml-20 mt-5">
    <div className='w-[100%] sm:w-[30%]  p-10'>
      <img
        src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
        alt=""
        
      />
    </div>
    <div className="w-full sm:w-[50%]  pb-14 ml-0 sm:ml-96 ">
      <div className=''>
        <h1 className='font-bold text-2xl flex justify-start'>Apollo AMAZER 4G LIFE 145/80 R13</h1>
        <span className='bg-green-600 p-1 w-4 flex justify-start'> 4 </span>
        <span className='flex justify-start'> 321Reviews</span>
        <div className='font-bold text-xl flex'>Rs.3,534</div>
        <span className='bg-yellow-200 flex justify-start p-2 w-[300px]'>5 Year Manufacturer’s Warranty</span>
        <div className="bg-black border mt-2" />
        <p className='font-bold text-xl flex justify-start'>Select Tyre Type</p>
      </div>
      <div className="flex gap-4 justify-start mt-3">
        <button className="border border-blue-500 p-2">83T TL</button>
        <button className="border border-blue-500 p-2">83T TL</button>
      </div>
      <div className='flex flex-col sm:flex-row justify-start mt-3 sm:scale-0 scale-2'>
        <span>Type: Tubeless | 190 km/h | 387 kgs</span>
        <div className="bg-black border mt-2" />
        <span>Pincode </span>
        <span>201014, Ghaziabad</span>
      </div>
      <div className='bg-gray-200 p-2 flex justify-start mt-2'>
        <p className='font-bold text-xl '>20 Dealers Found</p>
      </div>
      <div className="flex flex-col border p-4 border-gray-300">
        <div className="flex justify-evenly border p-4 flex-col sm:flex-row">
          <p className='font-bold'>SHREE HEMKUNT TYRES AND SERVICES</p>
          <p className='text-green-500'> Verified</p>
          <p>In your locality</p>
        </div>
        <div className="flex mt-2">
          <p>4.9</p>
          <p> 2278 Ratings</p>
        </div>
        <div className='flex mt-3'>

          <p className='font-bold '>Deals in </p>
          <button>Car Type</button>
          <button>Bike Type</button>
          <button>Scooter Type</button>
        </div>
        <div className='bg-gray-300 p-2 mt-4'>
          Excellent service from start to finish. 100% satisfaction with the
          job, professionalism and overall service.We were delighted with
          your courteous , prompt and profes
        </div>
        <div className="bg-black border border-gray-200 mt-6" />
        <div className='flex flex-col sm:flex-row justify-between p-4'>
       <button> +9195*****666</button>
       <button className='text-red-600 p-2 border border-red-500'>View Contact</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details









