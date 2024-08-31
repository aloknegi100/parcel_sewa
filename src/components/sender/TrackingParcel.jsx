import React from "react";
import SearchIcon from "../../assets/searchIcon.svg";
import MapIcon from "../../assets/mapIcon.svg";
import LineIcon from "../../assets/line.png";

const TrackingParcel = () => {
  return (
    <div className="flex flex-col items-center h-full w-full gap-6 bg-white p-5 rounded-[22px]">
      <div className="bg-[#FEE0AC] w-full flex justify-center items-center shadow-md h-[34px] rounded-[12px] font-medium text-[16px]">
        Tracking Parcels
      </div>
      <div className="bg-[#FEE0AC] w-3/4 rounded-[15px] p-2 h-[38px] flex">
        <input
          type="text"
          className="h-full flex-1 bg-transparent outline-none px-2"
          placeholder="Enter your tracking id"
        />
        <button className="h-full bg-transparent">
          <img src={SearchIcon} className="h-full scale-150" />
        </button>
      </div>
      <div className="flex-1 w-full rounded-[16px] bg-[#FEE0AC] p-4 flex flex-col gap-4">
        <h6 className="text-[#1E1E1E] text-[18px] font-medium">
          Order Id #132
        </h6>
        <div className="flex w-full h-36">
          <div className=" w-3/4 h-full flex">
            <img src={LineIcon} className="h-full" />
            <div className="flex flex-col pt-4 gap-6 ml-4">
              <h6 className="text-[16px] font-medium text-[#5B5B5B]">
                Location 1
              </h6>
              <h6 className="text-[16px] font-medium text-[#5B5B5B]">
                Current
              </h6>
              <h6 className="text-[16px] font-medium text-[#5B5B5B]">
                Location 2
              </h6>
            </div>
          </div>
          <div className=" flex-1">
            <img src={MapIcon} className="h-full" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <h6 className="font-medium text-[14px] text-[#1E1E1E]">
              Estimated Time:
            </h6>
            <span className="text-[#1E1E1EB2] font-medium text-[14px]">
              Tommorow
            </span>
          </div>
          <div className="flex">
            <h6 className="font-medium text-[14px] text-[#1E1E1E]">Status:</h6>
            <span className="text-[#1E1E1EB2] font-medium text-[14px]">
              Transit
            </span>
          </div>
          <div className="flex">
            <h6 className="font-medium text-[14px] text-[#1E1E1E]">
              Arrival Time:
            </h6>
            <span className="text-[#1E1E1EB2] font-medium text-[14px]">
              6:30 pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingParcel;
