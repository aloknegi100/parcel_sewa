import React from "react";

const About = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="bg-[#FAB535] rounded-[22px] w-[90%] h-[80%] p-2 px-16 shadow-lg text-[18px]">
        <h1 className="text-[40px] font-normal text-center">About Us</h1>
        <p>
          Welcome to Parcel Sewa, where <b>convenience</b> and <b>innovation</b>{" "}
          meet in parcel delivery. We understand the need for <b>flexibility</b>
          , which is why we offer customizable delivery time slots and real-time
          tracking for your peace of mind.
        </p>
        <h1 className="text-[40px] font-normal text-center">Our Mission</h1>
        <p>
          We aim to make parcel delivery more flexible and reliable, allowing
          you to choose when your parcel arrives and track it as it approaches
          your doorstep. What Sets Us Apart
        </p>
        <ul className="list-disc pl-5">
          <li>
            <b>Customizable Time Slots:</b> Choose delivery times that work best
            for you.
          </li>
          <li>
            <b>Real-Time Tracking:</b> Get updates when your parcel is within 1
            km of delivery.
          </li>
        </ul>
        <h1 className="text-[40px] font-normal text-center">Why Choose Us?</h1>
        <ul className="list-disc pl-5">
          <li>
            <b>Flexibility:</b> Schedule deliveries around your life.
          </li>
          <li>
            <b>Reliability:</b> Timely, accurate deliveries every time.
          </li>
          <li>
            <b>Innovation:</b> Advanced tracking and scheduling options.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
