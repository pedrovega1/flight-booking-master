import React from "react";
import { useNavigate } from "react-router-dom";

export default function CongratComp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-1/2">
        <div className="">
          <div>
            <h1 className="text-gray-700 font-bold">Congratulations!</h1>

            <p className="text-lg text-gray-700 font-bold">
              Your trip has been booked!
            </p>
          </div>
          <div className="w-2/3">
            <div className="flex">
              <h3 className="text-lg text-gray-700 font-semibold">AKL</h3>
              <p className="font-extrabold text-md text-gray-400">.....</p>
              <i className="fa-sharp fa-solid fa-plane"></i>
              <p className="font-extrabold text-md text-gray-400">.....</p>
              <h3 className="text-lg text-gray-700 font-semibold">SGN</h3>
            </div>

            <div className="flex flex-justify bg-gray-300 rounded-lg">
              <div>
                <label class="text-gray-500 text-md font-semibold">Dates</label>
                <p class="font-normal text-gray-600 text-md">May 15 -22,2021</p>
              </div>

              <div>
                <label class="text-gray-500 text-md font-semibold">
                  Travelers
                </label>
                <p class="font-normal text-gray-600 text-md">1 Passenger</p>
              </div>
            </div>
          </div>
          <div class="mt-5 mb-5 w-2/3 bg-gray-300 rounded-lg ">
            <h3 class="font-bold text-lg text-gray-700">Reserve details</h3>
            <div className="">
              <p class="flex justify-between">
                <span class=" text-gray-400 text-md font-semibold">
                  Promo code
                </span>
                <span class=" text-gray-800 text-md font-semibold">
                  FD_158232
                </span>
              </p>
              <p class="flex justify-between">
                <span class=" text-gray-400 text-md font-semibold">Date</span>
                <span class=" text-gray-800 text-md font-semibold">
                  30 Apr, 2021
                </span>
              </p>
              <p class="flex justify-between">
                <span class=" text-gray-400 text-md font-semibold">Total</span>
                <span class=" text-gray-800 text-md font-semibold">$883</span>
              </p>
              <p class="flex justify-between">
                <span class=" text-gray-800 text-md font-semibold">
                  Payment method
                </span>
                <span class=" text-gray-800 text-md font-semibold">
                  Credit card
                </span>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-white text-lg bg-blue-600 rounded-full py-4 px-8 w-fit h-fit mt-auto hover:bg-blue-700 active:bg-blue-800"
        >
          Go to your home
        </button>
      </div>
      <div className="w-1/2">
      <img src="https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_12117(1).jpg" class="rounded-lg mt-4"/>
      </div>
    </>
  );
}
