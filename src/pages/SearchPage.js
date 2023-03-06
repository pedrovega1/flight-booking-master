import React, { useEffect, useState } from 'react';
import FlightCard from '../components/FlightCard';
import PriceRange from '../components/PriceRange';

export default function SearchPage(props) {
  const params = new URL(document.location).searchParams;
  const departure = params.get('dep');
  const arrival = params.get('arr');
  const [departureAirports, setDepartureAirports] = useState([]);
  const [arrivalAirports, setArrivalAirports] = useState([]);
  const [flights, setFlights] = useState(
    [{
      airline_iata: "BA",

      dep_iata: "MIA",
    
      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",
  
      arr_time: "2021-07-14 22:52",
 
      duration: 359,
      
   
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",
    
      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",
  
      arr_time: "2021-07-14 22:52",
 
      duration: 359,
      
   
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",
    
      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",
  
      arr_time: "2021-07-14 22:52",
 
      duration: 359,
      
   
    },
    {
      airline_iata: "BA",

      dep_iata: "MIA",
    
      dep_time: "2021-07-14 19:53",

      arr_iata: "SFO",
  
      arr_time: "2021-07-14 22:52",
 
      duration: 359,
    },
  ]




  );

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
 

  return (
    <div className='flex  bg-gray-100 w-full '>
      
      <div className=' w-1/3 flex flex-col' >
      <div>
        <h1 className='text-gray-700 uppercase font-semibold'>Popular filter</h1>
        <div className='flex flex-col w-full '>
          <div className='flex'>
          <input type="checkbox" checked onChange={()=>{console.log("input")}}/> 
          <label className='flex justify-between w-full m-1'>
         <span className='text-gray-700 '>Non stop</span>
         <span className='text-gray-400 mx-8'>$2.632</span>
          </label>
     
          </div>
          <div className='flex'>
          <input type="checkbox" checked onChange={()=>{console.log("input")}}/> 
          <label className='flex justify-between w-full m-1'>
         <span className='text-gray-700 '>IndiGo(10)</span>
         <span className='text-gray-400 mx-8'>$2.245</span>
          </label>
          
          </div>
          <div className='flex'>
          <input type="checkbox" checked onChange={()=>{console.log("input")}}/> 
          <label className='flex justify-between w-full m-1'>
         <span className='text-gray-700 '>Vistara(5)</span>
         <span className='text-gray-400 mx-8'>$2.846</span>
          </label>
       
          </div>
          <div className='flex'>
          <input type="checkbox" checked onChange={()=>{console.log("input")}}/> 
          <label className='flex justify-between w-full m-1'>
         <span className='text-gray-700 '>Late Departures(5)</span>
         <span className='text-gray-400 mx-8'>$2.845</span>
          </label>
    
          </div>
          <div className='flex '>
          <input type="checkbox" checked onChange={()=>{console.log("input")}}/> 
          <label className='flex justify-between w-full m-1'>
         <span className='text-gray-700 '>Go First(3)</span>
         <span className='text-gray-400 mx-8'>$2.567</span>
          </label>
          
          </div>
        </div>
        <button className=' text-blue-700 font-semibold '>See More</button>
      </div>
      <div className=''>
      <PriceRange/>
    </div>
      </div>

   
    


      <div className='flex flex-col w-3/4'>
      {flights.map((flight) => {
        return <FlightCard flight={flight} key={flight.flight_number} />;
      })}
      </div>
    
    </div>
  );
}