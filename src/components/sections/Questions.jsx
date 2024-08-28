import React from 'react'

function Questions() {
  return (
    <div className='bg-white pb-6'>
      <div className='bg-yellow-200 p-9 flex flex-col justify-start items-start gap-2'>
        <h1 className='font-bold'>Have a question about Tyres?</h1>
        <p>Get an answer in 24 hours from our experts.</p>
        <input type='text' placeholder="Ask or Search your question " 
          className='max-w-[390px] h-10 p-3 rounded-2xl'
        />
      </div>
      <div className='flex justify-around border-b border-gray-300 p-4'>
        <h1>Tyre<span>Plex</span></h1>
        <div>
          <p>Who we are</p>
          <p>Are you a tyre Dealer?</p>
        </div>

        <div>
          <p>Who we are</p>
          <p>Are you a tyre Dealer?</p>
        </div>

        <div>
          <p>Who we are</p>
          <p>Are you a tyre Dealer?</p>
        </div>
     
      </div>
      <div className='p-4'>
      ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  )
}

export default Questions