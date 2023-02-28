import React from 'react'

export default function FlightCard  (props)  {
  const flightTime = date =>{
    let dateTime= Date.parse(date.replace(' ', 'T').concat(':00'))
    dateTime = new Date(dateTime);
  console.log(typeof(dateTime))
    dateTime= dateTime.toLocaleDateString('en-us', {  month:"long", day:"numeric"})
    return dateTime;
  }
  return (
<div>
    <div>
<h3>{props.flight.dep_iata} => {props.flight.arr_iata} 
{
  flightTime(props.flight.dep_time)
}
</h3>
<div className='flex '>
    <img/>
    <div>
 
      <h5 className='text-gray-700 uppercase font-semibold '>{props.flight.dep_iata}</h5>
      <p className='text-gray-500 dark:text-gray-400'>{props.flight.dep_time}</p>
    </div>
    <img/>
    <div>
  
      <h5>{props.flight.arr_iata}</h5>
        <p>{props.flight.arr_time}</p> 
    </div>
    <div>
        <h5>$350</h5>
        <button
      type="button"
      className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:to-blue-700 hover:shadow-lg focus:to-blue-300'
      >
        Button
    </button>
    </div>
</div>
    </div>
    
</div>
  )
}
