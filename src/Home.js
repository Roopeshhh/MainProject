import React from "react";
import Sidebar from "./components/sidebar";
// import TopBar from "./components/topbar";
import Dashboard from "./dashboardComponent/dashboard";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import Header from "./components/Navbar";
import "./App.css";

// import Settings from "./Profile/Setting";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Header />

      <div className="main-content d-flex">
        <Sidebar />

        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
