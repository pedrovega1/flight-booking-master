import React, { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import PriceRange from "../components/PriceRange";

export default function SearchPage(props) {
  const params = new URL(document.location).searchParams;
  const departure = params.get("dep");
  const arrival = params.get("arr");
  const [departureAirports, setDepartureAirports] = useState([]);
  const [arrivalAirports, setArrivalAirports] = useState([]);
  const [maxprice, setMaxPrice] = useState(250);
  const [bottomCounter, setBottomCounter] = useState(0);
  const changePrice = (price) => {
    setMaxPrice(price);
  };

  const [flights, setFlights] = useState([
    {
      airline_iata: "BA",

      dep_iata: "MIA",

      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",

      arr_time: "2021-07-14 22:52",

      duration: 359,

      price: 150,
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",

      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",

      arr_time: "2021-07-14 22:52",

      duration: 359,

      price: 250,
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",

      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",

      arr_time: "2021-07-14 22:52",

      duration: 359,

      price: 100,
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",

      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",

      arr_time: "2021-07-14 22:52",

      duration: 359,

      price: 300,
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",

      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",

      arr_time: "2021-07-14 22:52",

      duration: 359,

      price: 50,
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",

      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",

      arr_time: "2021-07-14 22:52",

      duration: 359,

      price: 250,
    },
  ]);

  //   useEffect(() => {
  //     async function getAirports() {
  //       let depResponse = await fetch(
  //         `https://airlabs.co/api/v9/airports?city_code=${departure}&api_key=cfe551c5-5a57-4e50-9e49-8cc60db7cc6a`
  //       );
  //       depResponse = await depResponse.json();
  //       setDepartureAirports(depResponse.response);
  //       let arrResponse = await fetch(
  //         `https://airlabs.co/api/v9/airports?city_code=${arrival}&api_key=cfe551c5-5a57-4e50-9e49-8cc60db7cc6a`
  //       );
  //       arrResponse = await arrResponse.json();
  //       setArrivalAirports(arrResponse.response);

  //       let flightPromises = [];
  //       for (const depAirport of depResponse.response) {
  //         if (!depAirport.iata_code) {
  //           continue;
  //         }
  //         for (const arrAirport of arrResponse.response) {
  //           if (!arrAirport.iata_code) {
  //             continue;
  //           }
  //           let response =  fetch(
  //             `https://airlabs.co/api/v9/schedules?dep_iata=${depAirport.iata_code}&arr_iata=${arrAirport.iata_code}&api_key=cfe551c5-5a57-4e50-9e49-8cc60db7cc6a`
  //           ).then(response=>response.json());
  //         flightPromises.push(response);

  //         }

  //       }
  // let flightResponses= await Promise.all(flightPromises);
  // console.log(flightResponses);
  //  flightResponses = flightResponses.map((r)=>{
  //   return r.response;

  // })
  // flightResponses = flightResponses.flat();
  // setFlights(flightResponses);
  // console.log(flights);
  //     }

  //     getAirports();
  //   },[] );
  const handleScroll = (e) => {
    const bottom =
      e.target.scrolHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      if (
        flights.filter((f) => {
          return f.price >= 50 && f.price <= maxprice;
        }).length >=
        5 * (bottomCounter + 1)
      ) {
        setBottomCounter(bottomCounter + 1);
      } else {
        return;
      }

      // Каждый раз достигая дна счетчик bottomCounter увеличивается на 1
    }
  };
  const Flightfilter = () => {
    return flights.filter(
      (flight) => flight.price >= 50 && flight.price <= maxprice
    );
  };
  return (
    <>
      <div
        style={{ maxHeight: "100vh", overflowY: "scroll" }}
        onScroll={handleScroll}
        className="flex  bg-gray-100 w-full searchpage px-24 "
      >
        <div className=" w-1/5 flex flex-col p-2">
          <div>
            <h1 className="text-gray-700 uppercase font-semibold">
              Popular filter
            </h1>
            <div className="flex flex-col w-full ">
              <div className="flex">
                <input
                  type="checkbox"
                  onChange={() => {
                    console.log("input");
                  }}
                />
                <label className="flex justify-between w-full m-1">
                  <span className="text-gray-700 ">Non stop</span>
                  <span className="text-gray-400 mx-8">$2.632</span>
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  onChange={() => {
                    console.log("input");
                  }}
                />
                <label className="flex justify-between w-full m-1">
                  <span className="text-gray-700 ">IndiGo(10)</span>
                  <span className="text-gray-400 mx-8">$2.245</span>
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  onChange={() => {
                    console.log("input");
                  }}
                />
                <label className="flex justify-between w-full m-1">
                  <span className="text-gray-700 ">Vistara(5)</span>
                  <span className="text-gray-400 mx-8">$2.846</span>
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  onChange={() => {
                    console.log("input");
                  }}
                />
                <label className="flex justify-between w-full m-1">
                  <span className="text-gray-700 ">Late Departures(5)</span>
                  <span className="text-gray-400 mx-8">$2.845</span>
                </label>
              </div>
              <div className="flex ">
                <input
                  type="checkbox"
                  onChange={() => {
                    console.log("input");
                  }}
                />
                <label className="flex justify-between w-full m-1">
                  <span className="text-gray-700 ">Go First(3)</span>
                  <span className="text-gray-400 mx-8">$2.567</span>
                </label>
              </div>
            </div>
            <button className=" text-blue-700 font-semibold ">See More</button>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200"></hr>
          <div className="">
            <PriceRange changePrice={changePrice} />
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200"></hr>
          <h1 className="text-gray-700 dark:text-gray-800 font-semibold">
            Stops
          </h1>
          <div>
            <div className="flex ">
              <input
                type="checkbox"
                onChange={() => {
                  console.log("input");
                }}
              />
              <label className="flex justify-between w-full m-1">
                <span className="text-gray-700 ">Non Stop</span>
                <span className="text-gray-400 mx-8">$2.527</span>
              </label>
            </div>
            <div className="flex ">
              <input
                type="checkbox"
                onChange={() => {
                  console.log("input");
                }}
              />
              <label className="flex justify-between w-full m-1">
                <span className="text-gray-700 ">1 Stop</span>
                <span className="text-gray-400 mx-8">$2.867</span>
              </label>
            </div>
            <div className="flex ">
              <input
                type="checkbox"
                onChange={() => {
                  console.log("input");
                }}
              />
              <label className="flex justify-between w-full m-1">
                <span className="text-gray-700 ">2+ Stop</span>
                <span className="text-gray-400 mx-8">$2.367</span>
              </label>
            </div>
            <button className=" text-blue-700 font-semibold ">See More</button>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200"></hr>
          <h1 className="text-gray-700 dark:text-gray-800 font-semibold">
            Airlines
          </h1>
          <div>
            <div className="flex ">
              <input
                type="checkbox"
                onChange={() => {
                  console.log("input");
                }}
              />
              <label className="flex justify-between w-full m-1">
                <span className="text-gray-700 ">Air India(1)</span>
                <span className="text-gray-400 mx-8">$2.381</span>
              </label>
            </div>
            <div className="flex ">
              <input
                type="checkbox"
                onChange={() => {
                  console.log("input");
                }}
              />
              <label className="flex justify-between w-full m-1">
                <span className="text-gray-700 ">Go First(13)</span>
                <span className="text-gray-400 mx-8">$2.646</span>
              </label>
            </div>
            <div className="flex ">
              <input
                type="checkbox"
                onChange={() => {
                  console.log("input");
                }}
              />
              <label className="flex justify-between w-full m-1">
                <span className="text-gray-700 ">IndiGo(24)</span>
                <span className="text-gray-400 mx-8">$2.247</span>
              </label>
            </div>
            <button className=" text-blue-700 font-semibold ">See More</button>
          </div>
        </div>

        <div className="flex flex-col w-3/4">
          {Flightfilter()
            .slice(
              0,
              Flightfilter().length >= 5 * (bottomCounter + 1)
                ? 5 * (bottomCounter + 1)
                : // :flights.filter((f) =>{
                  //   return f.price >= 50 && f.price <=maxprice;
                  // }).length
                  Flightfilter().length
            )
            // индекс от какого элемента вырезать массив, 5*bottomCounter +1,
            // Изначально хотим загружать 5 элементов массива, а потом каждый раз достигая дна, загружается еще 5 элементов массива
            .map((flight, index) => {
              return <FlightCard flight={flight} key={index} />;
            })}
        </div>
      </div>
      <div className="rounded-md  bg-sky-500  p-6 mx-20 -mt-10 shadow-lg flex justify-between ">
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
