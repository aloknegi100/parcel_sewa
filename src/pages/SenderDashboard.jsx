import React from "react";
import { useTab } from "../TabContext";
import BookDelivery from "../components/sender/BookDelivery";
import TrackingParcel from "../components/sender/TrackingParcel";
import DelieveryHistory from "../components/sender/DelieveryHistory";

const SenderDashboard = () => {
  const { tab, setTab } = useTab();
  let senderTabs = ["Book a delivery", "Tracking Parcels", "Delivery History"];

  return (
    <div className="h-full w-full">
      {tab === senderTabs[0] && <BookDelivery />}
      {tab === senderTabs[1] && <TrackingParcel />}
      {tab === senderTabs[2] && <DelieveryHistory />}
    </div>
  );
};

export default SenderDashboard;
