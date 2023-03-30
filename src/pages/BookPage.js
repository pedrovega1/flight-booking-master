import React from "react";
import PassengerDetails from "../components/PassengerDetails";
import FlightDetailsCard from "../components/FlightDetailsCard";
import PriceDetailsCard from "../components/PriceDetailsCard";

export default function BookPage(props) {
  return (
    <div className="bg-gray-100  flex ">
      <div>
        <FlightDetailsCard />
        <PassengerDetails />
      </div>
      <div className="w-1/3">
        <PriceDetailsCard />
      </div>
    </div>
  );
}
