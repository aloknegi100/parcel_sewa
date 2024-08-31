import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTab } from "../TabContext";

const Sidebar = () => {
  const { tab, setTab } = useTab();
  const location = useLocation();
  const path = location.pathname;

  // Extract the last segment of the path
  const type = path.split("/").pop();

  const sidebarItems = {
    sender: ["Book a delivery", "Tracking Parcels", "Delivery History"],
    receiver: ["Upcoming deliveries", "Tracking Parcels", "Delivery History"],
  };

  const items = sidebarItems[type] || [];
  useEffect(() => {
    setTab(items[0]);
  }, []);

  return (
    <div className="w-64  h-full flex flex-col items-center">
      <h2 className="text-xl flex text-[24px] items-center justify-center font-bold mb-6 p-2 rounded-[22px] bg-[#FAB535] text-center w-[268px] h-[66px]">
        {`${type.charAt(0).toUpperCase() + type.slice(1)} Dashboard`}
      </h2>

      <ul
        className="bg-white rounded-[20px] w-full overflow-hidden shadow-xl"
        style={{ height: "calc(100% - 90px)" }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`h-[72px] border-b-2 border-[#1E1E1E] text-black cursor-pointer ${
              tab === item ? "bg-[#FCC051]" : "bg-[#FEE0AC]"
            }  hover:bg-[#FCC051] flex justify-center items-center`}
            onClick={() => {
              setTab(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
