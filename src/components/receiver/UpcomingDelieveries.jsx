import React, { useState, useCallback, useEffect } from "react";

const UpcomingDeliveries = () => {
  const [isChangeTimeModalOpen, setIsChangeTimeModalOpen] = useState(false);
  const [isEditLocationModalOpen, setIsEditLocationModalOpen] = useState(false);
  const [dropLocation, setDropLocation] = useState("");

  const toggleChangeTimeModal = () => {
    setIsChangeTimeModalOpen(!isChangeTimeModalOpen);
  };

  const toggleEditLocationModal = () => {
    setIsEditLocationModalOpen(!isEditLocationModalOpen);
  };

  // Close modals when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".modal")) {
      setIsChangeTimeModalOpen(false);
      setIsEditLocationModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative flex flex-col items-center h-full w-full gap-6 px-5 bg-white pb-5 shadow-md pt-5 rounded-[22px]">
      <div className="w-full">
        <div className="bg-[#FEE0AC] w-full flex justify-center items-center shadow-md h-[34px] p-5 rounded-[12px] font-medium text-[16px]">
          Upcoming deliveries
        </div>
      </div>
      <div className="mt-6 bg-[#FEE0AC] px-8 py-2 gap-1 w-full rounded-2xl shadow-md flex flex-col text-[#1E1E1E]">
        <h6 className="font-medium text-[20px]">Order Id #132</h6>
        <div className="flex">
          <h6 className="text-[14px] font-semibold">Estimated Arrival :</h6>
          <span className="text-[14px] font-normal">Tomorrow</span>
        </div>
        <div className="flex">
          <h6 className="text-[14px] font-semibold">Status :</h6>
          <span className="text-[14px] font-normal">In Transit</span>
        </div>
        <div className="flex">
          <h6 className="text-[14px] font-semibold">Arrival Time :</h6>
          <span className="text-[14px] font-normal">18:00 - 20:00</span>
        </div>
        <div className="flex">
          <h6 className="text-[14px] font-semibold">Address :</h6>
          <span className="text-[14px] font-normal">
            {" "}
            D89 , Paschim Vihar , New Delhi 110063
          </span>
        </div>
        <div className="flex justify-between px-1 mt-1">
          <button
            className="bg-[#FBBA41] h-[28px] w-[119px] rounded-[11px] text-[#2A4C54] font-bold text-[14px]"
            onClick={toggleChangeTimeModal}
          >
            Change Time
          </button>
          <button
            className="bg-[#FBBA41] h-[28px] w-[119px] rounded-[11px] text-[#2A4C54] font-bold text-[14px]"
            onClick={toggleEditLocationModal}
          >
            Edit Location
          </button>
          <button className="bg-[#FBBA41] h-[28px] w-[119px] rounded-[11px] text-[#2A4C54] font-bold text-[14px]">
            Track
          </button>
        </div>
      </div>

      {/* Change Time Modal */}
      {isChangeTimeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#FBB940FA] p-6 rounded-lg shadow-lg w-[90%] max-w-md modal">
            <h3 className="text-lg font-semibold mb-4">Select Time Slot</h3>
            <div className="flex flex-col gap-2 mb-4">
              <button className="bg-white text-[#1E1E1E] p-2 rounded-lg shadow hover:bg-[#FEE0AC]">
                10:00 A.M - 12:00 P.M
              </button>
              <button className="bg-white text-[#1E1E1E] p-2 rounded-lg shadow hover:bg-[#FEE0AC]">
                12:00 P.M - 2:00 P.M
              </button>
              <button className="bg-white text-[#1E1E1E] p-2 rounded-lg shadow hover:bg-[#FEE0AC]">
                2:00 P.M - 4:00 P.M
              </button>
              <button className="bg-white text-[#1E1E1E] p-2 rounded-lg shadow hover:bg-[#FEE0AC]">
                4:00 P.M - 6:00 P.M
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 text-[#1E1E1E] p-2 rounded-lg"
                onClick={toggleChangeTimeModal}
              >
                Cancel
              </button>
              <button className="bg-[#FBBA41] text-[#2A4C54] p-2 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Location Modal */}
      {isEditLocationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#FBB940FA] p-6 rounded-lg shadow-lg w-[90%] max-w-md modal">
            <h3 className="text-lg font-semibold mb-4">Edit Location</h3>
            <input
              type="text"
              placeholder="Enter drop location"
              className="w-full p-2 mb-4 border rounded-lg"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 text-[#1E1E1E] p-2 rounded-lg"
                onClick={toggleEditLocationModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#FBBA41] text-[#2A4C54] p-2 rounded-lg"
                onClick={toggleEditLocationModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingDeliveries;
