import React from "react";

export default function PassengerDetails() {
  return (
    <>
    <div className="bg-white rounded-lg border border-gray-400 flex flex-col p-4 w-1/2">
      <h3 className=" text-lg text-gray-800 font-semibold">
        Passenger Details
      </h3>
      <div className=" flex flex-col ">
        <div className="flex">
          <div className="flex flex-col">
            <label className="text-gray-400 text-sm w-1/2 mx-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first Name"
              className="p-2 border "
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-sm  w-1/2 mx-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last Name"
              className="p-2 border "
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col mx-2">
            <label className="text-gray-400 text-sm ">Gender</label>
            <select className="p-2 border border-gray-200 rounded-md">
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
            </select>
          </div>
          <div className=" flex flex-col mx-2">
            <label className="text-gray-400 text-sm">Birthday</label>
            <div className="flex">
            <select className="p-2 border border-gray-200 rounded-md">
              <option selected disabled>
                Date
              </option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
            <select className="p-2 border border-gray-200 rounded-md">
              <option selected disabled>
                Month
              </option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select className="p-2 border border-gray-200 rounded-md">
              <option selected disabled>
                Year
              </option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
            </select>

            </div>
          </div>
        </div>
      </div>
    </div>

<div className="bg-white rounded-lg border border-gray-400 flex flex-col p-4 my-5 w-1/2">
<h3 className=" text-lg text-gray-800 font-semibold">
  Passenger Details (Adult)
</h3>
<div className=" flex flex-col ">
  <div className="flex">
    <div className="flex flex-col">
      <label className="text-gray-400 text-sm w-1/2 mx-2">
        First Name
      </label>
      <input
        type="text"
        placeholder="Enter first Name"
        className="p-2 border "
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-400 text-sm  w-1/2 mx-2">
        Last Name
      </label>
      <input
        type="text"
        placeholder="Enter last Name"
        className="p-2 border "
      />
    </div>
  </div>
  <div className="flex">
    <div className="flex flex-col mx-2">
      <label className="text-gray-400 text-sm ">Gender</label>
      <select className="p-2 border border-gray-200 rounded-md">
        <option>Male</option>
        <option>Female</option>
        <option>Non-binary</option>
      </select>
    </div>

      </div>
    </div>
  </div>


  <div className="bg-white rounded-lg border border-gray-400 flex flex-col p-4 my-5 w-1/2">
    <div className="flex justify-between ">
<h3 className=" text-lg text-gray-800 font-semibold">
  Contact Details.
</h3>
<button className="text-gray-500 border border-gray-400 rounded-full font-semibold w-1/12 text-sm px-1 py-1">Edit</button>
</div>


<div className=" flex flex-col ">
  <div className="flex">
    <div className="flex flex-col">
      <label className="text-gray-400 text-sm w-1/2 mx-2">
        First Name
      </label>
      <input
        type="text"
        placeholder="Enter first Name"
        className="p-2 border "
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-400 text-sm  w-1/2 mx-2">
        Last Name
      </label>
      <input
        type="text"
        placeholder="Enter last Name"
        className="p-2 border "
      />
    </div>
  
  </div>
  <div className="flex">
  <div className="flex flex-col">
      <label className="text-gray-400 text-sm   mx-2">
        Enter an adress name
      </label>
      <input
        type="text"
        placeholder="City,Country"
        className="p-2 border "
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-400 text-sm  w-1/2 mx-2">
        City
      </label>
      <input
        type="text"
        placeholder="City"
        className="p-2 border  "
      />
    </div>
  </div>
 
  <div className="flex">
    <div className="flex  ">
      <div className="flex flex-col ">
      <label className="text-gray-400 text-sm ">Country</label>
      <select className="p-2 border border-gray-200 text-gray-400 text-sm rounded-md">
        <option>KZ</option>
        <option>USA</option>
        <option>Ireland</option>
      </select>
      </div>

      <div className="flex flex-col ">
      <label className="text-gray-400 text-sm  w-1/2 mx-2">
        City
      </label>
      <input
        type="text"
        placeholder="City"
        className="p-2 border  "
      />
    </div>
    </div>

      </div>

      <div className="flex ">
    <div className="flex  ">
      <div className="flex flex-col ">
      <label className="text-gray-400 text-sm ">Country code</label>
      <select className="p-2 border border-gray-200 text-gray-400 text-sm rounded-md">
        <option>+997</option>
        <option>+1</option>
        <option>+353</option>
      </select>
      </div>

      <div className="flex flex-col">
      <label className="text-gray-400 text-sm   mx-2">
        Enter a phone number
      </label>
      <select className=" p-2 border border-gray-200 text-gray-400 text-md rounded-md">
        <option selected disabled>Phone number</option>
        <option></option>
        <option></option>
      </select>
    </div>
    </div>

      </div>
    </div>
  </div>
  <div className="px-4">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xm rounded-full shadow-md hover:to-blue-700 hover:shadow-lg focus:to-blue-300">Continue</button>
  </div>
</>
  );
}
