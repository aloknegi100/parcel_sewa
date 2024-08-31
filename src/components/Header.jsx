import React, { useState } from "react";
import NavIcon from "../assets/navIcon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  let pageList = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];
  const [pageSelected, setPageSelected] = useState(pageList[0]);

  return (
    <div className="h-[77px] box-border bg-[#FEE0AC] flex justify-between px-7 items-center">
      <div className="flex items-center justify-between w-[200px]">
        {pageList.map((obj) => (
          <Link to={obj.url}>
            <span
              className={`cursor-pointer ${
                pageSelected === obj.label
                  ? "text-[#000000] font-semibold"
                  : "text-[rgba(0, 0, 0, 0.58)] font-normal"
              }`}
              onClick={() => setPageSelected(obj.label)}
            >
              {obj.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="font-medium text-xl text-[rgba(0, 0, 0, 1)] flex items-center">
        <img src={NavIcon} />
        Parcel Sewa
      </div>
      <div className="bg-black w-[150] h-[42px] text-xl text-white flex items-center rounded-lg px-3">
        Admin Panel
      </div>
    </div>
  );
};

export default Header;
