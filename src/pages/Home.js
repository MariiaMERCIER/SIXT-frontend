import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import les components

import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import SelectTime from "../components/SelectTime";

const Home = () => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  // On demande de faire la recherche de l'agence à chaque modification de "city" avec la possibility d'autocpmlête à partir de 3 characters

  useEffect(() => {
    console.log(city);
    const fetchData = async () => {
      const getOffersLocation = await axios.get("http://localhost:5000/", {
        params: {
          location: city,
        },
      });

      if (city.length > 3) {
        setData(getOffersLocation.data);
      }
    };

    fetchData();
  }, [city]);

  return (
    <>
      <header className="container">
        <div>
          <img src={require("../assets/images/sixt-logo.png")} alt="logo" />
          <p>RENT</p>
          <p>SHARE</p>
          <p>RIDE</p>
          <p>SIXT + abonnement auto</p>
        </div>

        <p>
          BACKOFFICE <FontAwesomeIcon icon="fa-solid fa-globe" />
        </p>
      </header>
      <section className="section-black container">
        <div>
          <nav>
            <div className="choice-navigation">
              <p>VOITURES</p>
              <p>UTILITAIRES</p>
            </div>
            <div className="filters">
              <p>Retrait et retour</p>

              <p>Date de dapart</p>

              <p>Date de retour</p>
            </div>

            <div>
              <SearchBar
                city={city}
                setCity={setCity}
                data={data}
                visible={visible}
                setVisible={setVisible}
              />

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                selectsStart
                startDate={startDate}
                minDate={new Date()}
                endDate={endDate}
                withPortal
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                selectsEnd
                startDate={startDate}
                minDate={startDate}
                endDate={endDate}
                withPortal
              />

              <SelectTime />

              <SelectTime />
            </div>
          </nav>
          <Slider />
          <p className="slider">slider</p>
        </div>
      </section>
      <section className="section-black container">
        <div>
          <img
            src={require("../assets/images/sixt-in-the-world.png")}
            alt="map"
          />
          <button>TROUVER L'AGENCE</button>
        </div>
      </section>
      <section className="section-orange container">
        <p>TELECHARGEZ L'APP SIXT</p>
        <div className="downlaod-app">
          <button>APP STORE</button>
          <button>GOOGLE PLAY</button>
        </div>
        <p>SUIVEZ-NOUS</p>
      </section>
      <footer className="container">
        <p>CONTACTS</p>
        <p>FAQ</p>
        <p>INFORMATIONS GENERALES</p>
        <p>AGENCES DE VOYAGE</p>
        <p>SIXT ACTUALITES</p>
        <p>SIXT PARTENAIRES</p>
        <p>MENTIONES LEGALES</p>
        <p>DONNES PERSONNELLES</p>
        <p>CGL</p>
      </footer>
    </>
  );
};

export default Home;
