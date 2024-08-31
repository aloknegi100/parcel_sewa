import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const handleSubmit = () => {
    if (type === "sender") navigate("/dashboard/sender");
    else if (type === "receiver") navigate("/dashboard/receiver");
  };

  return (
    <div className="w-full h-[100%] flex items-center">
      <div className="w-[856px] h-[550px] m-auto bg-[#FFFFFF] p-10 px-16 rounded-[22px]">
        <h6 className="text-[40px] font-extralight text-center">
          Enter your user ID and password to log in
        </h6>
        <p className="text-[#B97904] text-[25px] font-thin text-center pt-6">
          CREATE A USER ID FOR AN EXISTING ACCOUNT
        </p>
        <div className="flex flex-col justify-around items-center  m-auto h-56 w-[50%]">
          <div className="flex flex-col w-full">
            <label className="text-[18px]" htmlFor="username">
              User ID
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
              className="bg-[#FEE0AC] h-[58px] mt-1 rounded-[20px] p-4"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[18px]" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#FEE0AC] mt-1 h-[58px] rounded-[20px] p-4"
            />
          </div>
        </div>
        <div className="text-[15px] font-light flex justify-center mt-2">
          <input type="checkbox" className="mr-2" /> Remember my user ID
        </div>
        <div className="text-[15px] font-light flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#FAB535] w-[131px] h-[54px] rounded-[10px] text-[18px] font-medium"
            onClick={handleSubmit}
          >
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
