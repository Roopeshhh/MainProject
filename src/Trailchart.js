/* import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LeadsByStageChart = () => {
  const data = {
    labels: ["Conversation", "Follow Up", "InPipeline"],
    datasets: [
      {
        label: "Leads",
        data: [300, 200, 500], // Example data
        backgroundColor: "#f35b5b", // Red color
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    plugins: {
      legend: {
        display: true, // Hide the legend
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Hide gridlines
        },
      },
      y: {
        grid: {
          display: true, // Hide gridlines
        },
      },
    },
  };

  return (
    <div
      className="card shadow-sm p-3"
      style={{ borderRadius: "8px", width: "100%" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="card-title m-0">
          {" "}
          <i class="bi bi-three-dots-vertical"></i>
          <i
            class="bi bi-three-dots-vertical"
            style={{ marginLeft: "-10px" }}></i>
          Leads By Stage
        </h5>
        <div>
          <select className="form-select form-select-sm d-inline-block w-auto me-2">
            <option>Marketing Pipeline</option>
            <option>Sales Pipeline</option>
          </select>
          <select className="form-select form-select-sm d-inline-block w-auto">
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default LeadsByStageChart;
 */

import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LeadsByStageChart = () => {
  const data = {
    labels: ["Conversation", "Follow Up", "InPipeline"],
    datasets: [
      {
        label: "Leads",
        data: [300, 200, 500], // Example data
        backgroundColor: "#f35b5b", // Red color
        borderRadius: 5,
        barThickness: 25, // Adjusted for wider chart
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    maintainAspectRatio: false, // Allow fixed height customization
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Hide gridlines
        },
        ticks: {
          font: {
            size: 12, // Adjusted for better readability
          },
        },
      },
      y: {
        grid: {
          display: false, // Hide gridlines
        },
        ticks: {
          font: {
            size: 12, // Adjusted for better readability
          },
        },
      },
    },
  };

  return (
    <div
      className="card shadow-sm p-3"
      style={{
        borderRadius: "8px",
        height: "300px",
        width: "1500px", // Thrice the standard width
        margin: "0 auto", // Center the card horizontally
      }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="card-title m-0" style={{ fontSize: "16px" }}>
          Leads By Stage
        </h6>
        <div>
          <select
            className="form-select form-select-sm d-inline-block w-auto me-1"
            style={{ fontSize: "12px", padding: "4px 28px" }}>
            <option>Marketing Pipeline</option>
            <option>Sales Pipeline</option>
          </select>
          <select
            className="form-select form-select-sm d-inline-block w-auto"
            style={{ fontSize: "12px", padding: "4px 28px" }}>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>
      <div style={{ height: "240px" }}>
        {" "}
        {/* Remaining space for the chart */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default LeadsByStageChart;
