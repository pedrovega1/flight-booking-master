import React from 'react'
import { useState } from 'react'
import { Range } from 'react-range';
function PriceRange() {
    const [prices,SetPrices] = useState([250]);
    const handleChange = (prices) => {
      SetPrices(prices);
    };
    const handleInputChange = (event) => {
      const newValue = event.target.value;
      SetPrices([parseInt(newValue)]);
    };
  return (
<>
    {/* <div>
        <h1 className='text-gray-700 font-semibold'>Price Range</h1>
        <div className='flex flex-row'>
<input id="default-range"
 onChange={handleChange} 
 min ="50"
 max="500"
 type="range" 
 value={prices} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-blue-800"/>
</div>

    </div>

    <div className='flex justify-between px-2'>
      <p className='text-gray-700 dark:text-gray-400 font-semibold'>50$</p>
      <p className='text-gray-700 dark:text-gray-400 font-semibold'>500$</p>
    </div> */}
     <div className='flex justify-between'>
      <Range
        step={1}
        min={50}
        max={500}
        values={[prices]}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '5px',
              width: '75%',
              backgroundColor: 'blue',
              borderRadius: "20px"
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              backgroundColor: '#0077FF',
              borderRadius: "50px"

            }}
          />
        )}
      />
      <input
        type="number"
        min="50"
        max="500"
        value={prices[0]}
        onChange={handleInputChange}
        className = "rounded-lg -my-2"
        
      />
      
      </div>
  <div className='flex justify-between w-2/3'>
  <p className='text-gray-700 dark:text-gray-400 mx-5 font-semibold'>50$</p>
      <p className='text-gray-700 dark:text-gray-400 font-semibold'>500$</p>
  </div>
</>
  )
  
}

export default PriceRange