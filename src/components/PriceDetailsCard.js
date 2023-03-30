import React from "react";

export default function PriceDetailsCard() {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-4  flex flex-col">
      <div className="flex flex-col">
        <h3 className="text-gray-800 text-lg font-semibold">Price Details</h3>
        <div className="flex flex-col leading">
          <p className="w-full flex justify-between">
            <span className=" text-gray-400 text-md font-semibold">
              1x Passenger
            </span>
            <span>$350</span>
          </p>
          <p className="w-full  flex justify-between">
            <span className=" text-gray-400 text-md font-semibold">
              Tax and free
            </span>
            <span>$8</span>
          </p>
          <p className="w-full  flex justify-between">
            <span className=" text-gray-400 text-md font-semibold">
              Service free
            </span>
            <span>$2</span>
          </p>
          <p className="w-full flex justify-between bg-blue-300 p-2 rounded-md">
            <span className="text-gray-800 text-md font-semibold">Total</span>
            <span className="text-gray-800 text-md font-semibold">$360</span>
          </p>
        </div>
      </div>

      <div className=" flex flex-col border border-b border-gray-200 py-3">
        <h1 className="text-gray-800 text-lg font-semibold">Passenger</h1>
        <p className="text-md text-gray-400 font-semibold bg-gray-300 ">
          1x adult 2 children
        </p>
      </div>
      <div className="flex flex-col border border-b border-gray-200">
        <h1 className="text-gray-800 text-lg font-semibold ">
          Check-in baggage
        </h1>
        <p className="flex justify-between">
          <span className=" text-gray-400 text-md font-semibold">Depature</span>
          <span className=" text-gray-400 text-md font-semibold">
            3 bags (120g total)
          </span>
        </p>
        <p className="flex justify-between ">
          <span className=" text-gray-400 text-md font-semibold">Return</span>
          <span className=" text-gray-400 text-md font-semibold">
            3 bags (120g total)
          </span>
        </p>
      </div>
      <div className=" flex flex-col border border-b border-gray-200 py-3">
        <h1 className="text-gray-800 text-lg font-semibold">Services</h1>
        <p className="text-md text-gray-400 font-semibold  ">
          No extra services selected
        </p>
      </div>
    </div>
  );
}
