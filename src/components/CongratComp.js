import React from "react";
import { useNavigate } from "react-router-dom";

export default function CongratComp() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-gray-700 font-bold text-xl md:text-2xl mb-2">
            Congratulations!
          </h1>
          <p className="text-lg text-gray-700 font-semibold">
            Your trip has been booked!
          </p>
          
          <div className="mt-4">
            <div className="flex items-center">
              <h3 className="text-lg text-gray-700 font-semibold">AKL</h3>
              <p className="mx-2 font-extrabold text-md text-gray-400">...</p>
              <i className="fa-sharp fa-solid fa-plane"></i>
              <p className="mx-2 font-extrabold text-md text-gray-400">...</p>
              <h3 className="text-lg text-gray-700 font-semibold">SGN</h3>
            </div>
            <div className="mt-2 bg-gray-300 rounded-lg p-2 flex justify-between">
              <div>
                <label className="text-gray-500 text-md font-semibold">Dates</label>
                <p className="text-gray-600 text-md">May 15 - 22, 2021</p>
              </div>
              <div>
                <label className="text-gray-500 text-md font-semibold">Travelers</label>
                <p className="text-gray-600 text-md">1 Passenger</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-gray-300 rounded-lg p-4">
            <h3 className="text-gray-700 font-bold text-lg">Reserve details</h3>
            <div className="mt-2">
              <p className="flex justify-between">
                <span className="text-gray-400 text-md font-semibold">Promo code</span>
                <span className="text-gray-800 text-md font-semibold">FD_158232</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-400 text-md font-semibold">Date</span>
                <span className="text-gray-800 text-md font-semibold">30 Apr, 2021</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-400 text-md font-semibold">Total</span>
                <span className="text-gray-800 text-md font-semibold">$883</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-800 text-md font-semibold">Payment method</span>
                <span className="text-gray-800 text-md font-semibold">Credit card</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="text-white text-lg bg-blue-600 rounded-full py-4 px-8 mt-6 hover:bg-blue-700 active:bg-blue-800 self-start md:self-auto"
          >
            Go to your home
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_12117(1).jpg"
            alt="Travel"
            className="rounded-lg mt-4"
          />
        </div>
      </div>
    </div>
  );
}
