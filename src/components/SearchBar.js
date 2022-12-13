const SearchBar = ({ setCity, city, data, visible, setVisible }) => {
  const searchClick = ({ title }) => {
    setCity(title);
    setVisible(false);
  };

  return (
    <>
      <input
        className="search"
        type="search"
        placeholders="Taper votre ville..."
        value={city}
        onChange={(event) => {
          // event.preventDefault();
          setCity(event.target.value);
          if (city.length > 3) {
            setVisible(true);
          }
        }}
      />

      {visible && (
        <div style={{ backgroundColor: "white", height: 350, color: "black" }}>
          <p>
            <img
              src={require("../assets/images/sixt-logo.png")}
              alt="logo"
              style={{ width: 30, height: "auto" }}
            />
            Agences
          </p>

          {data.map((agency) => {
            return (
              <div key={agency.id}>
                <p
                  onClick={() => {
                    searchClick(agency);
                  }}
                >
                  {agency.title}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchBar;
