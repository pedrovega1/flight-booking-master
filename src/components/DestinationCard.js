import React from "react";
import { Link } from "react-router-dom";

export default function DestinationCard(props) {
  const { destination } = props.destination;
  return (
    <Link to="#">
      <div className="flex ">
        <div className="block p-6 rounded-lg border border-gray-50 hover:shadow-lg bg-white max-w-sm w-full">
          <img
            src={props.destination.image}
            className="w-16 h-14 rounded mb-2"
          />
          <h5 className=" text-gray-900 text-xl leading-tight font-medium mb-2">
            {props.destination.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {props.destination.destNumber} Destinations
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:to-blue-700 hover:shadow-lg focus:to-blue-300"
          >
            Button
          </button>
        </div>
      </div>
    </Link>
  );
}
