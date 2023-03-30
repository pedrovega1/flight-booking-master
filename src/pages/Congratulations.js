import React from "react";
import CongratComp from "../components/CongratComp";

export default function Congratulations() {
  return (
    <>
      <div className="flex px-48">
        <CongratComp />
      </div>
      <div className="rounded-md  bg-sky-500   p-6 mx-20 -mt-30 shadow-lg flex justify-between  ">
        <div className="px-32">
          <h1 className="text-white font-bold text-4xl">Get out pro offers</h1>
          <p className="text-gray-300 dark:text-gray-200 font-semibold text-lg py-3">
            Create a visual identity for your company, and an <br /> overall
            brand
          </p>
        </div>

        <form>
          <div className="relative m-8  ">
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-500 border border-sky-300 rounded-lg bg-gray-50   "
              placeholder="Type your email here."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2 bottom-2.5 ml-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
