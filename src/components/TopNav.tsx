import React from "react";

const TopNav: React.FC = () => {
  return (
    <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-300 hidden sm:block ">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <h1 className="text-black font-bold font-sans text-3xl">ABCHotel</h1>
        </div>
        <div className="flex gap-8 items-center">
          <img src="assets/bell.png" alt="" className="w-8 h-8" />
          <img src="assets/user.png" alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
