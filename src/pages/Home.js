import axios from "axios";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// import les components

import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import SelectTime from "../components/SelectTime";

const Home = () => {
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [dateTake, setDateTake] = useState(new Date());
  const [dateReturn, setDateReturn] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const getConfig = await axios.post("http://localhost:4000/", {
        params: {
          location: city,
        },
      });
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
              <SearchBar city={city} setCity={setCity} />
              <button
                style={{ background: "#191919", border: "non" }}
                onclick={() => {
                  <Calendar value={dateTake} onChange={setDateTake} />;
                }}
              >
                <input value={dateTake} />
              </button>

              <SelectTime />
              <input value={dateReturn} placeholder="return" />
              <Calendar value={dateReturn} onChange={setDateReturn} />

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
