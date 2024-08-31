import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { TabProvider } from "../TabContext";

const Dashboard = () => {
  const [tab, setTab] = useState("");
  return (
    <div className="dashboard-container flex py-8 px-24 gap-16 h-full">
      <TabProvider>
        <Sidebar tab={tab} setTab={setTab} />
        <div className="dashboard-content w-full h-full">
          <Outlet />
        </div>
      </TabProvider>
    </div>
  );
};

export default Dashboard;
