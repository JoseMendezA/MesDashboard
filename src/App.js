import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function App() {
  const [machines, setMachines] = React.useState([
    { id: 1, name: "Machine A", status: "Running" },
    { id: 2, name: "Machine B", status: "Idle" },
    { id: 3, name: "Machine C", status: "Maintenance" },
  ]);

  const [orders, setOrders] = React.useState([
    { id: 101, product: "Widget", progress: 75 },
    { id: 102, product: "Gadget", progress: 50 },
    { id: 103, product: "Thingamajig", progress: 20 },
  ]);

  const performanceData = [
    { time: "08:00", production: 30 },
    { time: "09:00", production: 50 },
    { time: "10:00", production: 45 },
    { time: "11:00", production: 60 },
    { time: "12:00", production: 70 },
  ];

  const maintenanceAlerts = [
    { machine: "Machine C", issue: "Scheduled Maintenance" },
    { machine: "Machine B", issue: "Low Lubricant" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">MES Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Machine Status</h2>
        <ul>
          {machines.map((machine) => (
            <li key={machine.id} className="mb-1">
              {machine.name}:{" "}
              <span className="font-medium">{machine.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Progress</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-1">
              Order #{order.id} ({order.product}):{" "}
              <span className="font-medium">{order.progress}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Performance Chart</h2>
        <LineChart
          width={500}
          height={300}
          data={performanceData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="production" stroke="#8884d8" />
        </LineChart>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Maintenance Alerts</h2>
        <ul>
          {maintenanceAlerts.map((alert, index) => (
            <li key={index} className="mb-1">
              {alert.machine}:{" "}
              <span className="text-red-500">{alert.issue}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
