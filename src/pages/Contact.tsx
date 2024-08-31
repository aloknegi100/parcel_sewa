import React from "react";
import Search from "../assets/search.png";
import Dollar from "../assets/dollar.png";
import Email from "../assets/email.png";
import File from "../assets/file.png";
import Box from "../assets/box.png";
import Car from "../assets/car.png";

const Contact = () => {
  return (
    <div className="py-6 px-10">
      <div className="bg-[#FFFFFF] h-[190px] px-10 py-4 rounded-[22px] shadow-xl">
        <h1 className="font-light text-[40px]">HOW CAN WE HELP YOU ?</h1>
        <div className="flex h-[60px] ">
          <input
            type="text"
            placeholder="I’m looking for"
            className="w-[678px] px-5 text-[26px] bg-[#FEE0AC] outline-none"
          />
          <button
            className="w-[170px] bg-[#FAB535] text-[30px] font-medium"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
      <h1 className="text-[#1E1E1E] font-light text-[40px] mt-5 text-center">
        Quick Links
      </h1>
      <div className="flex justify-around">
        <h6 className="text-[40px] font-light">I’m receiving </h6>
        <h6 className="text-[40px] font-light">I’m sending </h6>
      </div>
      <div className="text-[#1E1E1E] flex justify-around">
        <div className="flex flex-col gap-5 mt-5">
          <h6 className="font-normal text-[26px] flex">
            <img src={Search} className="scale-75" />
            Track a package
          </h6>
          <h6 className="font-normal text-[26px] flex ">
            <img src={Dollar} className="scale-75" />
            View invoice and payments
          </h6>
          <h6 className="font-normal text-[26px] flex">
            <img src={Email} className="scale-75" />
            File a complaint
          </h6>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <h6 className="font-normal text-[26px] flex">
            <img src={File} className="scale-75" /> View rates and transit times
          </h6>
          <h6 className="font-normal text-[26px] flex">
            <img src={Box} className="scale-75" /> Create a shipment
          </h6>
          <h6 className="font-normal text-[26px] flex">
            <img src={Car} className="scale-75" />
            Schedule a pickup
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
