import { useState } from "react";

const SearchBar = ({ setCity, city }) => {
  return (
    <input
      type="search"
      placeholders="Taper votre ville..."
      value={city}
      onChange={(event) => {
        setCity(event.target.value);
      }}
    />
  );
};

export default SearchBar;
