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
  <h1 className='text-gray-700 dark:text-gray-800 font-semibold' >Price Range</h1>
     <div className='flex justify-between m-2'>
      
      <Range
        step={1}
        min={50}
        max={500}
        values={[prices]}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className=" h-5px w-3/4 bg-blue-600 rounded-md"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="  w-4 h-4 rounded-lg appearance-none cursor-pointer range-lg dark:bg-sky-900"
          />
        )}
      />
      <input
        type="number"
        min="50"
        max="500"
        value={prices[0]}
        onChange={handleInputChange}
        className = "rounded-lg -my-3 text-center  border-blue-600 border"
        
      />
      
      </div>

      
  <div className='flex justify-between '>
  <p className='text-gray-700 dark:text-gray-400 mx-5 font-semibold'>50$</p>
      <p className='text-gray-700 dark:text-gray-400 font-semibold w-1/3'>500$</p>
  </div>
</>
  )
  
}

export default PriceRange