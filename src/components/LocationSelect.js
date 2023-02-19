import React from "react";
import AsyncSelect from "react-select/async";
import { useState } from "react";

export default function LocationDropdown(props) {
  const location = props.location;
  const [loc, setLocation] = useState(null);
  let locationOptions = [];
  const filterLocations = (inputValue:String) => {
    return locationOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const API_KEY = "cfe551c5-5a57-4e50-9e49-8cc60db7cc6a";

  const loadOptions = async (
    inputValue: string,
    callback: (options: locationOptions[]) => void
  ) => {
    let response = await fetch(
      `https://airlabs.co/api/v9/suggest?q=${inputValue}&api_key=987649b0-1084-42f6-919b-575a4b92d176`
    );
    let data = await response.json();
    let options = data.response.cities.map((city) => {
      return { value: city.city_code, label: city.name };
    });
    return options;
  };

  const stylesOptions = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "rgb(243 244 246)",
    }),
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      placeholder={location == "departure" ? "Where are you from?" : "Going to"}
      styles={stylesOptions}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      onChange={(choice) => props.handleLocationChange(choice)}
    />
  );
}