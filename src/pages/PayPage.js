import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function PayPage() {
  const navigate = useNavigate();

  const [creditCard, SetcreditCard] = useState("mastercard");
  return (
    <>
    <div className="h-screen px-5">
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
                    <input type="text" placeholder="Enter first Name" className="  p-2 border rounded-lg  "></input>
                  </div>
                  <div className="flex ">
                  <div className="flex flex-col">
                  <label className="text-gray-500 text-lg w-1/2 mx-2">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="p-2 border text-gray-800 "></input>
                  </div>

                  <div className="flex flex-col">
                  <label className="text-gray-500 text-lg w-1/2 mx-2">CVC/CVV</label>
                  <input type="text" placeholder="****" className="p-2 border "></input>
                  </div>
                  </div>

                  <div className="flex items-center py-2 px-4 ">
                  <input type="checkbox" className="py-2"></input>
                  <label className="text-gray-700 text-md px-2 "> Save Card</label>
                  
                  </div>
                  <button class="text-white text-lg bg-blue-600 rounded-full py-4 px-8 w-fit h-fit mt-auto hover:bg-blue-700 active:bg-blue-800">Confirm and receive</button>
                </div>
              </div>
      
    </div>

<div className="rounded-md  bg-sky-500  p-6 mx-20 -mt-10 shadow-lg flex justify-between ">
<div className="px-32">
  <h1 className="text-white font-bold text-4xl">Get out pro offers</h1>
  <p className="text-gray-300 dark:text-gray-200 font-semibold text-lg py-3">Create a visual identity for your company, and an <br/> overall brand</p>
</div>

<form>   

<div className="relative m-8  ">
 
  <input type="search"  className="block w-full p-4 pl-10 text-sm text-gray-500 border border-sky-300 rounded-lg bg-gray-50   " placeholder="Type your email here." required/>
  <button type="submit" className="text-white absolute right-2 bottom-2.5 ml-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ">Subscribe</button>
</div>
</form>    
</div>
    </>
  );
}
