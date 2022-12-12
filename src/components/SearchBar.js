import { useState } from "react";

const SearchBar = ({ setCity, city, data, visible, setVisible }) => {
  const searchClick = ({ title }) => {
    setCity(title);
    setVisible(false);
  };

  return (
    <>
      <input
        type="search"
        placeholders="Taper votre ville..."
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
          setVisible(true);
        }}
      />

      {data.map((agency) => {
        return (
          visible && (
            <div key={agency.id}>
              <p
                onClick={() => {
                  searchClick(agency);
                }}
              >
                {agency.title}
              </p>
            </div>
          )
        );
      })}
    </>
  );
};

export default SearchBar;
