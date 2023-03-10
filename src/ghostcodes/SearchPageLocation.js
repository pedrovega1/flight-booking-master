// import React from "react";
// import { useState } from "react";
// import { PaperAirplaneIcon } from "@heroicons/react/outline";
// import PassengerDropdown from "../components/PassengerDropdown";
// import LocationDropdown from "./LocationDropdown";
// import { SwitchHorizontalIcon } from "@heroicons/react/outline";
// import ReactDatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// export default function SearchForm(props) {
//   const [searchMode, setSearchMode] = useState("hotel");
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const [departure, setDeparture] = useState(null);
//   const [arrival, setArrival] = useState(null);

//   const handleSearchClick = () => {
//     console.log(departure);
//     console.log(arrival);
//   };

//   const handleDeparuteChange = (loc) => {
//     setDeparture(loc);
//   };

//   const handleArrivalChange = (loc) => {
//     setArrival(loc);
//   };

//   return (
//     <>
//       <div className="rounded-md bg-white p-8 -mt-6 shadow-lg flex gap-4 w-fit mx-auto">
//         <div className="flex flex-col">
//           <div className="border-b-2 border-gray-100 flex justify-between">
//             <div className="flex w-1/2 flex-start text-gray-500 cursor-pointer">
//               <a
//                 className={
//                   searchMode === "hotel"
//                     ? "text-gray-700 font-bold m-2"
//                     : " m-2"
//                 }
//                 onClick={() => {
//                   setSearchMode("hotel");
//                 }}
//               >
//                 Hotel
//               </a>
//               <a
//                 className={
//                   searchMode === "flight"
//                     ? "text-gray-700 font-bold flex m-2"
//                     : "flex m-2"
//                 }
//                 onClick={() => {
//                   setSearchMode("flight");
//                 }}
//               >
//                 <PaperAirplaneIcon className="w-4 h-4" />
//                 Flight
//               </a>
//               <a
//                 className={
//                   searchMode === "car" ? "text-gray-700 font-bold m-2" : " m-2"
//                 }
//                 onClick={() => {
//                   setSearchMode("car");
//                 }}
//               >
//                 Car rental
//               </a>
//             </div>
//             <div className="flex w-1/2 flex-end">
//               <PassengerDropdown />
//             </div>
//           </div>
//           <div className="flex">
//             <div className="grid grid-cols-2 gap-2 relative w-fit h-full mr-1">
//               <div className="flex ">
//                 <label className="text-sm text-gray-600 font-semibold">
//                   Leaving From
//                 </label>
//                 <LocationDropdown
//                   handleLocationChange={handleDeparuteChange}
//                   location="departure"
//                 />
//               </div>
//               <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 rounded-full border p-1 border-gray-400 z-10 bg-white hover:bg-gray-100">
//                 <SwitchHorizontalIcon className="h-4 text-gray-700" />
//               </button>
//               <div className="flex flex-col">
//                 <label className="text-sm text-gray-600 font-semibold">
//                   Going To
//                 </label>
//                 <LocationDropdown
//                   handleLocationChange={handleArrivalChange}
//                   location="arrival"
//                 />
//               </div>
//             </div>
//             <div className="flex relative ml-1">
//               <div className="flex flex-col">
//                 <label className="text-sm text-gray-600 font-semibold">
//                   Check in
//                 </label>
//                 <ReactDatePicker
//                   className="border border-gray-300 rounded-md py-2 px-4 w-64 mr-1 bg-gray-100"
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                 />
//               </div>

//               <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 rounded-full border p-1 border-gray-400 z-10 bg-white hover:bg-gray-100">
//                 <SwitchHorizontalIcon className="h-4 text-gray-700" />
//               </button>
//               <div className="flex flex-col">
//                 <label className="text-sm text-gray-600 font-semibold">
//                   Check out
//                 </label>
//                 <ReactDatePicker
//                   className="border border-gray-300 rounded-md py-2 px-4 w-64 mr-1 bg-gray-100"
//                   selected={endDate}
//                   onChange={(date) => setEndDate(date)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <button
//             onClick={handleSearchClick}
//             className="text-white bg-blue-600 rounded-md py-4 px-8 w-fit h-fit mt-auto hover:bg-blue-700 active:bg-blue-800"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }