// import App from "./Home";
import Profile from "./Profile";
import Home from "./Home";
// import Dashboard from "../dashboardComponent/dashboard";
// import Settings from "../Profile/Setting";
// import React, { useState } from "react";
// import LeadsByStageChart from "./Chart-2";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Link to="/"></Link>
      <Link to="/profile"></Link>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};
/* function App() {
  return <LeadsByStageChart />;
} */

export default App;
