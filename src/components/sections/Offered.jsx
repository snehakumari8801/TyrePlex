import React from 'react'

function Offered() {
  return (
    <div className="flex flex-col  bg-white  mt-8 p-4 justify-start items-start">
    <p className='font-bold'>Services offered by this dealer</p>

    <div className='flex gap-6 mt-4'>
      <div className='border border-gray-300 px-20 py-10'>
        <img src='https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100'
        alt=''/>
        <p>Wheel Balancing</p>
        <button className='bg-red-500 text-white p-2 mt-3 rounded-md'>Book now</button>
      </div>

      <div className='border border-gray-300 px-20 py-10'>
        <img src='https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100'
        alt=''/>
        <p>Wheel Alignment</p>
        <button className='bg-red-500 text-white p-2 mt-3 rounded-md'>Book now</button>
      </div>
</div>
      </div>
  )
}

export default Offered