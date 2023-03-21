import React from "react";

export default function FlightCard(props) {
  const flightTime = (date) => {
    let dateTime = Date.parse(date.replace(" ", "T").concat(":00"));
    dateTime = new Date(dateTime);
    // console.log(typeof(dateTime))
    dateTime = dateTime.toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
    });
    return dateTime;
  };
  return (
    <>
      <div className="pl-4 bg-white w-fit rounded-lg m-5 ">
        <div>
          <h3 className="text-gray-700 uppercase my-3 font-bold">
            {props.flight.dep_iata}
            <i className="fa-solid fa-arrow-right mx-10"></i>
            {props.flight.arr_iata} ,{flightTime(props.flight.dep_time)}
          </h3>
          <div className="flex my-2  ">
            <img
              className=" object-contain h-12 w-24"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Paris_A%C3%A9roport_logo.svg/1200px-Paris_A%C3%A9roport_logo.svg.png"
            />
            <div>
              <h5 className="text-gray-700 uppercase font-semibold mx-8 ">
                {props.flight.dep_iata}
              </h5>
              <p className="text-gray-500 dark:text-gray-400 mx-8 my-2">
                {props.flight.dep_time}
              </p>
            </div>
            <img
              className="object-contain h-12 w-24"
              src="https://play-lh.googleusercontent.com/A4voePYvO9jNBq7R_cKi3bjfzaJdl_vBAhsEPP_sCwWJ5Aj8S7fABesrk7fn_3oENQ=w600-h300-pc0xffffff-pd"
            />
            <div>
              <h5 className="text-gray-700 uppercase font-semibold mx-8 ">
                {props.flight.arr_iata}
              </h5>
              <p className="text-gray-500 dark:text-gray-400 mx-8 my-2">
                {props.flight.arr_time}
              </p>
            </div>
            <div className=" mx-3 px-2.5">
              <h5 className=" text-xl text-gray-800 -mt-2  my-1 px-5  ">
                {props.flight.price}
              </h5>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded-full shadow-md hover:to-blue-700 hover:shadow-lg focus:to-blue-300"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
