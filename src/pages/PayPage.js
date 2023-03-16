import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function PayPage() {
  const navigate = useNavigate();

  const [creditCard, SetcreditCard] = useState("mastercard");
  return (
    <div className="h-screen">
      <div>
        <p className="text-lg text-gray-800 font-semibold">Confirm your book</p>
      </div>
      <div>
        <div>
          <p className="text-lg text-gray-800 font-semibold">Your Tour</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <span>Date</span>
            <p>June 27 - 30,2020</p>
          </div>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col ">
            <span>Traveller</span>
            <p>1 Passenger</p>
          </div>
          <i className="fa-solid fa-pen-to-square"></i>
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
          >
            {/* :- иначе(else) */}
            <input
              type="radio"
              name="creditcard"
              className="absolute right-0 top-0"
              onClick={() => {
                SetcreditCard("mastercard");
              }}
            />
          </div>

          <div
            style={{
              backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png")`,
              height: "120px",
              width: "200px",
            }}
            className={
              creditCard === "VISA"
                ? "relative right-0 top-0 border border-blue-500 border-4"
                : "relative right-0 top-0 "
            }
          >
            {/* :- иначе(else) */}
            <input
              type="radio"
              name="creditcard"
              className="absolute right-0 top-0"
              onClick={() => {
                SetcreditCard("VISA");
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white  flex py-5">
    <div className="space-y-16">
        <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        
            <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>
            
            <div className="w-full px-8 absolute top-8">
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light">
                            Name
                        </p>
                        <p className="font-medium tracking-widest">
                            Vladik
                        </p>
                    </div>
                    <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                </div>
                <div className="pt-1">
                    <p className="font-light">
                        Card Number
                    </p>
                    <p className="font-medium tracking-more-wider">
                       ****  ****  ****  ****
                    </p>
                </div>
                <div className="pt-6 pr-6">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light text-xs">
                                Valid
                            </p>
                            <p className="font-medium tracking-wider text-sm">
                                11/15
                            </p>
                        </div>
                        <div className="">
                            <p className="font-light text-xs">
                                Expiry
                            </p>
                            <p className="font-medium tracking-wider text-sm">
                                03/25
                            </p>
                        </div>

                        <div className="">
                            <p className="font-light text-xs">
                                CVV
                            </p>
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
                  <h3 className=" text-lg text-gray-800 font-semibold">Card Number</h3>
                </div>
                <div>
                  <div className="flex  ">
                    <input type="text" placeholder="Enter first Name" class="  p-2 border rounded-lg  "></input>
                  </div>
                  
                </div>
              </div>
      
    </div>
  );
}
