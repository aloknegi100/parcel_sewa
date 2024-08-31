import React from "react";
import manImage from "../assets/ParcelManImg.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative pl-8 h-[100%]">
      <div className="pt-10">
        <p className="text-[65px]">Your Time</p>
        <p className="text-[65px]">Your Parcel</p>
        <p className="text-[65px]">Delivered on Your Terms</p>
      </div>
      <div className="w-[40%] pt-8 px-2">
        <h6 className="font-semibold text-[35px] text-center">Log In</h6>
        <div className="flex justify-between mt-10 ">
          <Link to={"/login?type=sender"}>
            <div className="flex items-center justify-center rounded-[20px] border-[5px] w-[243px] h-[77px] text-[28px] font-medium border-[#FAB535] cursor-pointer">
              Sender
            </div>
          </Link>
          <Link to={"/login?type=receiver"}>
            <div className="flex text-[#000000BF] items-center justify-center rounded-[20px] w-[243px] h-[77px] text-[28px] font-medium bg-[#FAB535] cursor-pointer">
              Receiver
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img className="w-[590px]" src={manImage} alt="Man with parcel" />
      </div>
    </div>
  );
};

export default Home;
