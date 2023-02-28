import React, { useEffect, useState } from 'react';
import FlightCard from '../components/FlightCard';

export default function SearchPage(props) {
  const params = new URL(document.location).searchParams;
  const departure = params.get('dep');
  const arrival = params.get('arr');
  const [departureAirports, setDepartureAirports] = useState([]);
  const [arrivalAirports, setArrivalAirports] = useState([]);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    async function getAirports() {
      let depResponse = await fetch(
        `https://airlabs.co/api/v9/airports?city_code=${departure}&api_key=cfe551c5-5a57-4e50-9e49-8cc60db7cc6a`
      );
      depResponse = await depResponse.json();
      setDepartureAirports(depResponse.response);
      let arrResponse = await fetch(
        `https://airlabs.co/api/v9/airports?city_code=${arrival}&api_key=cfe551c5-5a57-4e50-9e49-8cc60db7cc6a`
      );
      arrResponse = await arrResponse.json();
      setArrivalAirports(arrResponse.response);

      let flightPromises = [];
      for (const depAirport of depResponse.response) {
        if (!depAirport.iata_code) {
          continue;
        }
        for (const arrAirport of arrResponse.response) {
          if (!arrAirport.iata_code) {
            continue;
          }
          let response =  fetch(
            `https://airlabs.co/api/v9/schedules?dep_iata=${depAirport.iata_code}&arr_iata=${arrAirport.iata_code}&api_key=cfe551c5-5a57-4e50-9e49-8cc60db7cc6a`
          ).then(response=>response.json());
        flightPromises.push(response);
         
        }

      }
let flightResponses= await Promise.all(flightPromises);
console.log(flightResponses);
 flightResponses = flightResponses.map((r)=>{
  return r.response;

})
flightResponses = flightResponses.flat();
setFlights(flightResponses);
console.log(flights);
    }

    getAirports();
  },[] );

  return (
    <div className='flex flex-col w-2/3'>
      {flights.map((flight) => {
        return <FlightCard flight={flight} key={flight.flight_number} />;
      })}
    </div>
  );
}