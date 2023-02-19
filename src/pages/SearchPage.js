import React from "react";
import PassengerDropdown from "../components/PassengerDropdown";
import RoundDripDropdown from "../components/RoundDripDropdown";
import { useState } from "react";
import LocationDropdown from "../components/LocationSelect";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import ReactDatePicker from "react-datepicker";



export default function SearchPage(props) {

  const [searchMode, setSearchMode] = useState("hotel");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);

  const handleSearchClick = () => {
    console.log(departure);
    console.log(arrival);
  };

  const handleDeparuteChange = (loc) => {
    setDeparture(loc);
  };

  const handleArrivalChange = (loc) => {
    setArrival(loc);
  };

  return (
    <>
    <div className="rounded-md  bg-white mx-10 p-6 -mt-6 shadow-lg">
      <div className="border-b-2 border-gray-100 flex justify-between">
        <div className=" flex w-1/2 flex-start text-gray-500 cursor-pointer ml-2 ">
          <div className="flex space-x-4  ">
          <a
            className={searchMode === "hotel" ? "  border-b-4 border-indigo-500 text-gray-700 font-bold " : ""}
            onClick={() => {
             setSearchMode('hotel')
              console.log("hotel");
            
            }}
            
          >
            <i className="fa-sharp fa-solid fa-bed">
            
            </i>
            Hotel
           
          </a>
          <a
            className={
                searchMode === "flight" ? " border-b-4 border-indigo-500 text-gray-700 font-bold" : ""
            }
            
            onClick={() => {
          setSearchMode('flight')
              console.log("flight");
            }}
          >
            <i className="fa-solid fa-plane"></i>
            Flight
          </a>
          <a
            className={searchMode === "car" ? " border-b-4 border-indigo-500 text-gray-700 font-bold" : ""}
            onClick={() => {
             setSearchMode('car')
              console.log("car");
            }}
          >
            <i className="fa-sharp fa-solid fa-car-side"></i>
            Car Rental
          </a>
   </div>
        </div>
        <div className="flex flex-end w-1/s">
        <RoundDripDropdown/>
        <PassengerDropdown/>
        </div>
      </div>

      <div className="flex">
      <div className="grid grid-cols-2 gap-2 relative w-fit h-full mr-1">
      <div className="flex flex-col">
      <label className="text-sm text-gray-600 font-semibold">
                  Leaving From
                </label>
                <LocationDropdown
                  handleLocationChange={handleDeparuteChange}
                  location="departure"
                />
      </div>
      </div>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 rounded-full border p-1 border-gray-400 z-10 bg-white hover:bg-gray-100">
            <SwitchHorizontalIcon className="h-4 text-gray-700" />
            </button>
            <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-semibold">
                  Check out
                </label>
                <LocationDropdown
                handleLocationChange={handleArrivalChange}
                location="arrival"
              />
            </div>
      </div>
     <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 rounded-full border p-1 border-gray-400 z-10 bg-white hover:bg-gray-100">
       <SwitchHorizontalIcon className="h-4 text-gray-700" />
     </button >
            <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-semibold">
                  Check out
                </label>
                <ReactDatePicker
                  className="border border-gray-300 rounded-md py-2 px-4 w-64 mr-1 bg-gray-100"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
            </div>
            <div className="flex">
          <button
            onClick={handleSearchClick}
            className="text-white bg-blue-600 rounded-md py-4 px-8 w-fit h-fit mt-auto hover:bg-blue-700 active:bg-blue-800"
          >
            Search
          </button>
          </div>
    </div>
  </>
  );
}