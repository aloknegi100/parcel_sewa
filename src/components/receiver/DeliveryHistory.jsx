import React, { useState } from "react";
import SearchIcon from "../../assets/searchIcon.svg";
import ArrowDownIcon from "../../assets/downIcon.png";
import ArrowUpIcon from "../../assets/searchIcon.svg";

const DelieveryHistory = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const deliveryHistory = [
    {
      orderId: "0118",
      date: "20/08/24",
      items: 3,
      status: "Delivered",
      address: "E45 , Rohini sec 23 , New Delhi , 110027",
      trackingNumber: 5364758,
    },
    {
      orderId: "0119",
      date: "21/08/24",
      items: 2,
      status: "Pending",
      address: "C56 , Janakpuri , New Delhi , 110058",
      trackingNumber: 5364759,
    },
  ];

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredDeliveryHistory = deliveryHistory.filter((item) => {
    return (
      item.orderId.toLowerCase().includes(searchQuery) ||
      item.date.toLowerCase().includes(searchQuery) ||
      item.items.toString().includes(searchQuery) ||
      item.status.toLowerCase().includes(searchQuery) ||
      item.address.toLowerCase().includes(searchQuery) ||
      item.trackingNumber.toString().includes(searchQuery)
    );
  });

  return (
    <div className="flex flex-col items-center h-full w-full gap-6 bg-white pb-5 shadow-md pt-5 rounded-[22px]">
      <div className="px-5 w-full">
        <div className="bg-[#FEE0AC] w-full flex justify-center items-center shadow-md h-[34px] p-5 rounded-[12px] font-medium text-[16px]">
          Delivery History
        </div>
      </div>
      <div className="flex-1 border w-full bg-[#FAB535] px-4 shadow-md rounded-[20px] flex flex-col items-center gap-3 pt-4">
        <div className="bg-[#FEE0AC] w-3/4 rounded-[15px] p-2 h-[38px] flex">
          <input
            type="text"
            className="h-full flex-1 bg-transparent outline-none px-2"
            placeholder="Search order id, date, items, status, address, or tracking number"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="h-full bg-transparent">
            <img src={SearchIcon} className="h-full scale-150" />
          </button>
        </div>
        <div className="flex-1 w-full overflow-y-auto">
          <table
            className="min-w-full text-left border-separate"
            style={{ borderSpacing: "0 1px" }}
          >
            <thead className="bg-[#FEE0AC]">
              <tr className="bg-black text-white text-base font-bold">
                <th className="py-2 px-4 rounded-tl-[20px]">Order ID</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Items</th>
                <th className="py-2 px-4 text-right pr-16 rounded-tr-[20px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {filteredDeliveryHistory.map((item, index) => (
                <React.Fragment key={index}>
                  <tr
                    className={`bg-white font-medium text-[#6C6565] mb-6 text-base ${
                      expandedRow === index
                        ? "rounded-t-[20px]"
                        : "rounded-[20px]"
                    }`}
                  >
                    <td
                      className={`py-2 px-4 ${
                        expandedRow !== index ? "rounded-l-[20px]" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleRow(index)}
                        className="h-3 w-3"
                      >
                        <img
                          src={ArrowDownIcon}
                          alt="Toggle"
                          className={`h-full w-full ${
                            expandedRow === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {"  "}#{item.orderId}
                    </td>
                    <td className="py-2 px-4">{item.date}</td>
                    <td className="py-2 px-4">{item.items}</td>
                    <td
                      className={`py-2 px-4 text-right pr-14 ${
                        expandedRow !== index ? "rounded-r-[20px]" : ""
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr className="bg-white font-medium text-[#6C6565] text-base rounded-b-[20px]">
                      <td colSpan="4" className="py-2">
                        <div className="px-4 py-1 rounded-[10px] flex justify-between mx-4 bg-[#64646466] text-[#6C6565] text-[16px] font-bold">
                          <h6>Address</h6>
                          <h6>Tracking Number</h6>
                        </div>
                        <div className="flex justify-between px-4 py-4 mx-6">
                          <p>{item.address}</p>
                          <p>{item.trackingNumber}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DelieveryHistory;
