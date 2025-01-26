import React from "react";
import backgroundImg from "../../assets/background.jpg";

export const LandingPage = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="text-white text-center overflow-x-hidden">
        <h5 className="mb-4 text-[#12296c] font-extrabold text-6xl max-w-[40rem]">Write your thoughts down here as they come to you</h5>
        <a
          href="http://localhost:5173/signup" 
          className="m-8 border-4 border-[#12296c] bg-[#12296c] text-white text-xl p-1 px-8 rounded-full inline-block transition hover:-translate-y-2 hover:bg-[#54a889] hover:text-[#12296c]"
        >
          Start now! its free
        </a>
      </div>
    </div>
  );
};
