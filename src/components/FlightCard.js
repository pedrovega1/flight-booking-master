import React from 'react'

export default function FlightCard  (props)  {
  return (
<div>
    <div>
<h3>dsadasdasdsadsad</h3>
<div>
    <img/>
    <div>
      <h5>dep_iata</h5>
      <p>dep_time</p>
        {/* <h5>{props.flight.dep_iata}</h5> */}
        {/* <p>{props.flight.dep_time}</p> */}
    </div>
    <img/>
    <div>
    <h5>arr_iata</h5>
      <p>arr_time</p>
        {/* <h5>{props.flight.arr_iata}</h5>
        <p>{props.flight.arr_time}</p> */}
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
