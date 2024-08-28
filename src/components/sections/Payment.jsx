import React from "react";

function Payment() {
  return (
    <div className='mt-10'>
      <div className="bg-white  *:p-6 flex flex-col justify-start items-start">
        <h1 className="font-semibold text-xl">Payments mode</h1>
        <ul className="flex mt-4 gap-20">
          <li>
            <div>Deposit to Account</div>
            <div>Net Banking</div>
            <div>Credit Card/Debit</div>
            <span>Card UPI</span>
          </li>

          <li>
            <div>Wallets</div>
            <div>PayTM/PhonePe/Amazon</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Payment;
