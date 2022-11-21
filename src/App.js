import "./Styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HowToPlay from "./Pages/HowToPlay";
import Tournament from "./Pages/Tournament";
import LeaderBoard from "./Pages/LeaderBoard";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import TermsOfUse from "./Pages/TermsOfUse";
import PrivacyPolicies from "./Pages/PrivacyPolicies";
import Contributors from "./Pages/Contributors";
import Faq from "./Pages/Faq";
import Layout from "./Container/Layout";
import Waiting from "./Pages/Waiting";
import VictoryPage from "./Pages/VictoryPage";
import Arena from "./Pages/Arena";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/waiting" element={<Waiting />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/leader-board" element={<LeaderBoard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policies" element={<PrivacyPolicies />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/faq-help" element={<Faq />} />
            <Route path="/victory" element={<VictoryPage />} />
          </Route>
          <Route path="/arena" element={<Arena />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
