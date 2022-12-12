import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import de mes pages

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Configuration from "./pages/Configuration";
import PersonalInfo from "./pages/Personalnfo";
// import Backoffice from "./pages/Backoffice";

// import descomposants

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import les icons

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
library.add(faGlobe);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offerlist" element={<Offers />} />
        <Route path="/offerconfig" element={<Configuration />} />
        <Route path="/personnaldetails" element={<PersonalInfo />} />
        {/* <Route path="/backoffice" element={<Backoffice />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
