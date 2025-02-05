import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Helmet } from "react-helmet-async";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const StatisticsPage = () => {
  // Chart Data
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "User Growth",
        data: [50, 80, 150, 200, 300, 400],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales",
        data: [400, 300, 200, 500],
        backgroundColor: ["#34d399", "#60a5fa", "#f472b6", "#fbbf24"],
      },
    ],
  };

  return (
   <>
   <nav className="hidden md:flex px-5 py-4 bg-gray-200">

</nav>
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <Helmet>
              <title>
                Statistics
              </title>
            </Helmet>
            
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Statistics Dashboard</h1>
      

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-gray-600 font-medium">Total Users</h2>
          <p className="text-2xl font-bold text-blue-500">12,345</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-gray-600 font-medium">Total Donations</h2>
          <p className="text-2xl font-bold text-green-500">$45,678</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-gray-600 font-medium">Adoption Requests</h2>
          <p className="text-2xl font-bold text-pink-500">987</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">User Growth (Line Chart)</h3>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Data (Bar Chart)</h3>
          <Bar data={barData} />
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-gray-600">Date</th>
              <th className="border-b py-2 px-4 text-gray-600">Activity</th>
              <th className="border-b py-2 px-4 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2 px-4">2025-01-25</td>
              <td className="border-b py-2 px-4">Added a new pet</td>
              <td className="border-b py-2 px-4 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="border-b py-2 px-4">2025-01-24</td>
              <td className="border-b py-2 px-4">Created donation campaign</td>
              <td className="border-b py-2 px-4 text-yellow-600">Pending</td>
            </tr>
            <tr>
              <td className="border-b py-2 px-4">2025-01-23</td>
              <td className="border-b py-2 px-4">Submitted adoption request</td>
              <td className="border-b py-2 px-4 text-red-600">Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </>
  );
};

export default StatisticsPage;
