import React from "react";
import { useNavigate } from "react-router-dom";
import PassengerDetails from "./PassengerDetails";

export default function FlightDetailsCard(props) {
  const navigate = useNavigate();

  return (
    <div className="flight-card bg-white rounded-lg border border-gray-300 p-4 mb-4">
      <div className="flight-info">
        <div className="flex justify-between">
          <div className="flight-route">
            <h3 className="flight-title text-md font-semibold">
              Dhaka to Dubai
            </h3>
            <p className="flight-subtitle text-sm text-gray-400">
              Some random text
            </p>
          </div>
          <button
            onClick={() => navigate("/search")}
            className="change-flight-button text-orange-600 rounded-md bg-orange-100 p-2 active:bg-orange-200"
          >
            Change Flight
          </button>
        </div>

        <div className="flight-schedule">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png"
            alt="logo"
            className="airline-logo h-10 my-auto mr-2"
          />
          <div className="airline-info">
            <h4 className="airline-name text-md font-semibold">Indigo</h4>
            <p className="airline-code text-md text-gray-400 py-1">Some code</p>
          </div>
          <div className="departure-info">
            <h3 className="departure-time text-lg font-semibold">08.45</h3>
            <h4 className="departure-date text-md text-gray-400">Thu, 27 July 2020</h4>
            <p className="departure-location text-md text-gray-400">
              Dhaka Zia International Airport, Bangladesh
            </p>
          </div>
          <div className="flight-duration">
            <h3 className="duration text-lg text-gray-400 font-semibold">
              05 hours 20 mins
            </h3>
            <p className="layovers font-extrabold text-md text-gray-400">
              .............
            </p>
          </div>
          <div className="arrival-info">
            <h3 className="arrival-time text-gray-600 text-lg font-semibold">
              01.05
            </h3>
            <h4 className="arrival-date text-md text-gray-400">Sat, 30 July 2020</h4>
            <p className="arrival-location text-md text-gray-400">Airport address</p>
          </div>
        </div>
        <div className="additional-info">
          <div className="baggage-info">
            <h5 className="info-title text-md font-semibold">Baggage</h5>
            <p className="info-text text-sm text-gray-400">Adult</p>
          </div>
          <div className="checkin-info">
            <h5 className="info-title text-md font-semibold">Check-in:</h5>
            <p className="info-text text-sm text-gray-400">20kgs</p>
          </div>
          <div className="cabin-info">
            <h5 className="info-title text-md font-semibold">Cabin:</h5>
            <p className="info-text text-sm text-gray-400">7kgs</p>
          </div>
          <div className="meals-info">
            <h5 className="info-title text-md font-semibold">Meals:</h5>
            <p className="info-text text-sm text-gray-400">Meals not available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
