import React from "react";
import TrackingParcel from "../components/receiver/TrackingParcel";
import UpcomingDelieveries from "../components/receiver/UpcomingDelieveries";
import { useTab } from "../TabContext";
import DelieveryHistory from "../components/receiver/DeliveryHistory";

const ReceiverDashboard = () => {
  const { tab, setTab } = useTab();
  let senderTabs = [
    "Upcoming deliveries",
    "Tracking Parcels",
    "Delivery History",
  ];
  return (
    <div className="h-full w-full">
      {tab === senderTabs[0] && <UpcomingDelieveries />}
      {tab === senderTabs[1] && <TrackingParcel />}
      {tab === senderTabs[2] && <DelieveryHistory />}
    </div>
  );
};

export default ReceiverDashboard;
