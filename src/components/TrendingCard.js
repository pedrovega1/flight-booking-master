import React from "react";

export default function TrendingCard(props) {
  return (
    <>
      <div className="">
        <a
          href="#"
          className="flex flex-col items-center-0 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            className=" object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={props.destination.image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {props.destination.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
              <i className="fa-solid fa-star"></i>
              {props.destination.rating}
            </p>
            <p className="mb-2 font-bold text-gray-700 dark:text-gray-800">
              ${props.destination.price}/night
            </p>
            <button
              type="button"
              className="w-48 mb-2 inline-block px-4.5 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:to-blue-700 hover:shadow-lg focus:to-blue-300"
            >
              Button
            </button>
          </div>
        </a>
      </div>
    </>
  );
}
