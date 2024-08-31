import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex-1 rounded-[20px] bg-[#FEE0AC] px-4 py-2 h-full">
      <div className="h-full w-full">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
};

const BookDelivery = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [packagingType, setPackagingType] = useState("");
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setSelectedMinute(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePackagingType = (e) => setPackagingType(e.target.value);

  const handleSubmit = () => {
    console.log("Handle Submit here", inputValue);
    setInputValue({
      name: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div className="bg-white w-full h-full p-8 pt-2 flex flex-col gap-3 rounded-[22px]">
      <div className="flex flex-1 justify-between gap-16 h-full">
        <div className="flex-1 rounded-[20px] bg-[#FEE0AC] p-4 pt-2 flex flex-col">
          <h6 className="text-[#1E1E1E] text-[16px] font-medium">
            Book a delivery
          </h6>
          <div className="flex flex-col gap-4 flex-grow">
            <input
              type="text"
              name="name"
              value={inputValue.name}
              className="rounded-[20px] text-[14px] flex-grow px-3 bg-[#FDC968C2]"
              onChange={handleInputChange}
              placeholder="Recipient Name"
            />
            <input
              type="text"
              name="address"
              value={inputValue.address}
              className="rounded-[20px] text-[14px] flex-grow px-3 bg-[#FDC968C2]"
              onChange={handleInputChange}
              placeholder="Address"
            />
            <input
              type="text"
              name="phone"
              value={inputValue.phone}
              className="rounded-[20px] text-[14px] flex-grow px-3 bg-[#FDC968C2]"
              onChange={handleInputChange}
              placeholder="Phone no."
            />
            <button
              type="button"
              className="bg-[#000000E5] text-[16px] font-medium text-white rounded-[20px] flex-grow"
              onClick={handleSubmit}
            >
              Book Now
            </button>
          </div>
        </div>
        <CalendarComponent />
      </div>
      <div className="flex-1 flex rounded-[20px] gap-16 bg-[#FEE0AC] p-4">
        <div className="flex-1">
          <h6 className="text-[#1E1E1E] text-[20px] font-medium">
            Set packaging type
          </h6>
          <div className="flex flex-col gap-1">
            <label className="text-[#000000BF] text-[16px] font-medium">
              <input
                type="radio"
                value="Bubble Wrap"
                checked={packagingType === "Bubble Wrap"}
                onChange={handlePackagingType}
              />
              Bubble Wrap
            </label>
            <label className="text-[#000000BF] text-[16px] font-medium">
              <input
                type="radio"
                value="CardBoard Boxes"
                checked={packagingType === "CardBoard Boxes"}
                onChange={handlePackagingType}
              />
              CardBoard Boxes
            </label>
            <label className="text-[#000000BF] text-[16px] font-medium">
              <input
                type="radio"
                value="Shrink Wrap"
                checked={packagingType === "Shrink Wrap"}
                onChange={handlePackagingType}
              />
              Shrink Wrap
            </label>
            <label className="text-[#000000BF] text-[16px] font-medium">
              <input
                type="radio"
                value="Poly Mailers"
                checked={packagingType === "Poly Mailers"}
                onChange={handlePackagingType}
              />
              Poly Mailers
            </label>
            <label className="text-[#000000BF] text-[16px] font-medium">
              <input
                type="radio"
                value="Bubble Mailers"
                checked={packagingType === "Bubble Mailers"}
                onChange={handlePackagingType}
              />
              Bubble Mailers
            </label>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h6 className="text-[#1E1E1E] text-[20px] font-medium">
            Set preferred time slot
          </h6>
          <div className="flex flex-col justify-between flex-1">
            <div className="flex gap-4">
              <label>
                Hour:
                <select value={selectedHour} onChange={handleHourChange}>
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = String(i + 1).padStart(2, "0");
                    return (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    );
                  })}
                </select>
              </label>

              <label>
                Minute:
                <select value={selectedMinute} onChange={handleMinuteChange}>
                  {Array.from({ length: 60 }, (_, i) => {
                    const minute = String(i).padStart(2, "0");
                    return (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    );
                  })}
                </select>
              </label>

              <label>
                Period:
                <select value={selectedPeriod} onChange={handlePeriodChange}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </label>
            </div>
            <div className="flex items-center w-full justify-between">
              <p>
                Selected Time: {selectedHour}:{selectedMinute} {selectedPeriod}
              </p>
              <button className="rounded-[5px] bg-[#FCC051] w-[88px] h-[30px]">
                Change
              </button>
            </div>
          </div>
          <h6 className="text-[#1E1E1E] text-[20px] font-medium">
            AI Suggestion
          </h6>
          <p className="text-[#00000099]">
            Last time you booked a parcel for 3pm. Would you like to go with it?
          </p>
          <div className="flex justify-center gap-5">
            <button className="bg-[#FCC051] font-medium text-[16px] w-[67px] rounded-[5px] p-1">
              Yes
            </button>
            <button className="bg-transparent border-[5px] border-[#FAB535] font-medium text-[16px] w-[67px] rounded-[5px] p-1">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDelivery;
