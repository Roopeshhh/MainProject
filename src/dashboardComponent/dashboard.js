import React from "react";
import DealsTable from "./dealsTable";
import DealsChart from "./dealsChart";
import HorizontalBarChart from "./dashbar-1";
// import DealsChart2 from "./dashbar-2";
import "./dashboard.css";
import LeadsByStageChart from "../Trailchart";
import LeadsByStageCharts from "../Trailchart-2";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h5 className="fw-bold fs-5">Deals Dashboard</h5>
      <div className="dashboard-content-1">
        {/* Recently Created Deals */}
        <div className="section">
          <h6 className="fw-bolder fs-6">
            <i class="bi bi-three-dots-vertical"></i>
            <i
              class="bi bi-three-dots-vertical"
              style={{ marginLeft: "-10px" }}></i>{" "}
            Recently Created Deals{" "}
            <span style={{ marginLeft: "470px" }} className="span-button">
              <select>
                <option>Last 30 days</option>
                <option>Last 30 days</option>
              </select>
            </span>
          </h6>

          <DealsTable />
        </div>

        {/* Deals By Stage */}
        <div className="section">
          <h6 className="fw-bolder fs-6">
            <i class="bi bi-three-dots-vertical"></i>
            <i
              class="bi bi-three-dots-vertical"
              style={{ marginLeft: "-10px" }}></i>
            Deals By Stage
            <span className="dropdown-sales-pipeline">
              <select>
                <option disabled selected>
                  Sales PipeLine
                </option>
                <option>Marketing PipeLine</option>
                <option>Sales PipeLine</option>
                <option>Email</option>
                <option>Charts</option>
                <option>Operational</option>
              </select>
            </span>
            <span className="dropdown-lastdays">
              <select>
                <option disabled selected>
                  Last 30 Days
                </option>
                <option>Last 30 Days</option>
                <option>Last 15 Days</option>
                <option>Last 7 Days</option>
              </select>
            </span>
          </h6>
          <DealsChart />
        </div>
      </div>
      {/*       <div className="section">
        <h6 className="fw-bolder fs-6">
          <i class="bi bi-three-dots-vertical"></i>
          <i
            class="bi bi-three-dots-vertical"
            style={{ marginLeft: "-10px" }}></i>
          Leads By Stage
        </h6>
        <DealsChart2 />
      </div> */}
      <div className="d-flex" style={{ width: "100%", gap: "20px" }}>
        <LeadsByStageChart />
        <LeadsByStageCharts />
      </div>

      <div className="section">
        <h6 className="fw-bolder fs-6">Deals By Year</h6>
        <HorizontalBarChart />
      </div>
    </div>
  );
};

export default Dashboard;
