import React from "react";
import { useNavigate } from "react-router-dom";
import PassengerDetails from "./PassengerDetails";

export default function FlightDetailsCard(props) {
  const navigate = useNavigate();
  return (
    <div className=" bg-white rounded-lg border-gray-400 flex flex-col p-4 mb-4">
      <div>
        <div className="flex justify-between border border-gray-300">
          <div className="flex flex-col">
            <h3 className="text-md text-gray-800 font-semibold">
              Dhaka to Dubai{" "}
            </h3>
            <p className="text-sm text-gray-400">Some random text</p>
          </div>
          <button
            onClick={() => navigate("/search")}
            className="text-orange-600 rounded-md bg-orange-100 p-2 active:bg-orange-200"
          >
            Change Flight
          </button>
        </div>

        <div className="flex py-4 border border-gray-200 ">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png"
            alt="logo"
            className="h-10 my-auto mr-2"
          ></img>
          <div className="flex flex-col mr-2">
            <h4 className="text-md text-gray-600 font-semibold">Indigo</h4>
            <p className="text-md text-gray-400 py-1">Some code</p>
          </div>
          <div className="flex flex-col mr-2">
            <h3 className="text-lg text-gray-600 font-semibold">08.45</h3>
            <h4 className="text-md text-gray-400">Thu,27 July 2020</h4>
            <p className="text-md text-gray-400">
              Dhaka zia international airport Bangladesh
            </p>
          </div>
          <div className="flex flex-col mr-2">
            <h3 className="text-lg text-gray-400 font-semibold">
              05 hours 20 mins
            </h3>

            <p className="font-extrabold text-md text-gray-400">
              .............
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-600 text-lg font-semibold">01.05</h3>
            <h4 className="text-md text-gray-400"> Sat,30 July 2020</h4>
            <p className="text-md text-gray-400 ">Airport address</p>
          </div>
        </div>
        <div className="flex pt-4">
          <div className="flex flex-col mr-4 items-center">
            <h5 className="text-md text-gray-700 font-femibold">Baggage</h5>
            <p className=" text-sm text-gray-400">Adult</p>
          </div>

          <div className="flex flex-col mr-4 items-center">
            <h5 className="text-md text-gray-700 font-femibold">Check-in:</h5>
            <p className=" text-sm text-gray-400">20kgs</p>
          </div>

          <div className="flex flex-col mr-4 items-center">
            <h5 className="text-md text-gray-700 font-femibold">Cabin:</h5>
            <p className=" text-sm text-gray-400">7kgs</p>
          </div>

          <div className="flex flex-col mr-4 items-center">
            <h5 className="text-md text-gray-700 font-femibold">Meals:</h5>
            <p className=" text-sm text-gray-400">Meals not available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
