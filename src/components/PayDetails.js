import React from "react";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export default function PayDetails() {
  const navigate = useNavigate();

  const [creditCard, SetcreditCard] = useState("mastercard");
  return (
    <div className="flex">
      <div className="px-5 w-3/4 ">
        <div>
          <p className="text-lg text-gray-800 font-semibold">
            Confirm your book
          </p>

          <div className="">
            <div>
              <p className="text-lg text-gray-800 font-semibold">Your Tour</p>
            </div>

            <div className="flex justify-between w-1/2">
              <div className="flex flex-col ">
                <span>Date</span>
                <p>June 27 - 30,2020</p>
              </div>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>

            <div className="flex justify-between w-1/2">
              <div className="flex flex-col ">
                <span>Traveller</span>
                <p>1 Passenger</p>
              </div>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-lg text-gray-800 font-semibold">Credit Cards</p>
          </div>
          <div className="flex ">
            <div
              style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png")`,
                height: "120px",
                width: "200px",
              }}
              className={
                creditCard === "mastercard"
                  ? "relative right-0 top-0 border border-blue-500 border-4"
                  : "relative right-0 top-0 "
              }
              onClick={() => {
                SetcreditCard("mastercard");
              }}
            >
              {/* :- иначе(else) */}
              {creditCard === "mastercard" && (
                <CheckIcon className=" absolute right-0 top-0 h-5 w-5" />
              )}
              {/* <input
                type="radio"
                name="creditcard"
                className="absolute right-0 top-0"
                onClick={() => {
                  SetcreditCard("mastercard");
                }}
              /> */}
            </div>

            <div
              style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png")`,
                height: "120px",
                width: "200px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={
                creditCard === "VISA"
                  ? "relative right-0 top-0 border border-blue-500 border-4"
                  : "relative right-0 top-0 "
              }
              onClick={() => {
                SetcreditCard("VISA");
              }}
            >
              {/* :- иначе(else) */}

              {creditCard === "VISA" && (
                <CheckIcon className=" absolute right-0 top-0 h-5 w-5" />
              )}
            </div>
          </div>
        </div>

        <div className="bg-white  flex py-5">
          <div className="space-y-16">
            <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
              <img
                className="relative object-cover w-full h-full rounded-xl"
                src="https://i.imgur.com/kGkSg1v.png"
              />

              <div className="w-full px-8 absolute top-8">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light">Name</p>
                    <p className="font-medium tracking-widest">Vladik</p>
                  </div>
                  <img
                    className="w-14 h-14"
                    src="https://i.imgur.com/bbPHJVe.png"
                  />
                </div>
                <div className="pt-1">
                  <p className="font-light">Card Number</p>
                  <p className="font-medium tracking-more-wider">
                    **** **** **** ****
                  </p>
                </div>
                <div className="pt-6 pr-6">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-light text-xs">Valid</p>
                      <p className="font-medium tracking-wider text-sm">
                        11/15
                      </p>
                    </div>
                    <div className="">
                      <p className="font-light text-xs">Expiry</p>
                      <p className="font-medium tracking-wider text-sm">
                        03/25
                      </p>
                    </div>

                    <div className="">
                      <p className="font-light text-xs">CVV</p>
                      <p className="font-bold tracking-more-wider text-sm">
                        ···
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card number */}
        <div>
          <div>
            <h3 className=" text-lg text-gray-800 font-semibold">
              Card Number
            </h3>

            <div>
              <div className="flex  ">
                <input
                  type="text"
                  placeholder="Enter first Name"
                  className="  p-2 border rounded-lg  "
                ></input>
              </div>
              <div className="flex ">
                <div className="flex flex-col">
                  <label className="text-gray-500 text-lg w-1/2 mx-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="p-2 border text-gray-800 "
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-500 text-lg w-1/2 mx-2">
                    CVC/CVV
                  </label>
                  <input
                    type="text"
                    placeholder="****"
                    className="p-2 border "
                  ></input>
                </div>
              </div>

              <div className="flex items-center py-2 px-4 ">
                <input type="checkbox" className="py-2"></input>
                <label className="text-gray-700 text-md px-2 ">
                  {" "}
                  Save Card
                </label>
              </div>
              <button
                onClick={() => navigate("/end")}
                className="text-white text-lg bg-blue-600 rounded-full py-4 px-8 w-fit h-fit mt-auto hover:bg-blue-700 active:bg-blue-800"
              >
                Confirm and receive
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/5">
        <div>
          <div className="flex">
            <h3 className="text-lg text-gray-700 font-semibold">AKL</h3>
            <p className="font-extrabold text-md text-gray-400">.....</p>
            <i className="fa-sharp fa-solid fa-plane"></i>
            <p className="font-extrabold text-md text-gray-400">.....</p>
            <h3 className="text-lg text-gray-700 font-semibold">SGN</h3>
          </div>
          <div className="flex">
            <p className=" text-gray-700 dark:text-gray-700">
              <i className="fa-solid fa-star"> </i>
              4.8(122 reviews)
            </p>
          </div>
          <img
            src="https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_12117(1).jpg"
            className="rounded-lg mt-4"
          />
          <div className="bg-gray-300 rounded-md mt-2">
            <p className="text-gray-700 font-bold">1 Baggage+ Melas</p>
          </div>

          <div className="flex justify-between mt-2">
            <div>
              <label className="text-gray-500 text-md font-semibold">
                Check in
              </label>
              <p className="font-normal text-gray-600 text-md">May 15,2021</p>
            </div>
            <div>
              <label className="text-gray-500 text-md font-semibold">
                Check out
              </label>
              <p className="font-normal text-gray-600 text-md">May 22,2021</p>
            </div>
          </div>

          <div>
            <label className="text-gray-500 text-md font-semibold">
              Travelers
            </label>
            <p className="font-normal text-gray-700 text-md">1 Passenger</p>
          </div>

          <div className="mt-5 mb-5">
            <h3 className="font-bold text-lg text-gray-700">Fare summary</h3>

            <div>
              <p className="flex justify-between">
                <span className=" text-gray-400 text-md font-semibold">
                  1x Passenger
                </span>
                <span className=" text-gray-800 text-md font-semibold">
                  $140
                </span>
              </p>
              <p className="flex justify-between">
                <span className=" text-gray-400 text-md font-semibold">
                  Tax and fee
                </span>
                <span className=" text-gray-800 text-md font-semibold">$8</span>
              </p>
              <p className="flex justify-between">
                <span className=" text-gray-400 text-md font-semibold">
                  Service free
                </span>
                <span className=" text-gray-800 text-md font-semibold">$2</span>
              </p>

              <p className="flex justify-between">
                <span className=" text-gray-800 text-md font-semibold">
                  Total
                </span>
                <span className=" text-gray-800 text-md font-semibold">
                  $150
                </span>
              </p>
              <p className="">
                <span className="text-gray-400 text-md ">
                  Report this flight
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
