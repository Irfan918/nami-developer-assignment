import React from "react";

const SideNav: React.FC = () => {
  return (
    <div className="h-full p-2">
      <ul className="mb-4">
        <li className="flex gap-2 ml-6 p-2 border-b-4 border-orange-600 bg-gray-200">
          <img src="assets/home.png" className="w-6 h-6" alt="Home" />
          <p className="font-serif text-xl font-semibold">Home</p>
        </li>
      </ul>
      <ul className="flex flex-col items-start gap-6">
        <li className="flex items-center gap-2 mb-2">
          <img src="assets/drop.png" alt="" className="w-6 h-6" />
          <img src="assets/console.png" className="w-6 h-6" alt="Console" />
          <p className="font-serif text-xl font-semibold">Console</p>
        </li>
        <li className="flex items-center gap-2 mb-2 ml-10">
          <img
            src="assets/attendence.png"
            className="w-6 h-6"
            alt="Attendance"
          />
          <p className="font-serif text-xl font-semibold">Attendance</p>
        </li>
        <li className="flex items-center gap-2 mb-2 ml-10">
          <img src="assets/overview.png" className="w-6 h-6" alt="Overview" />
          <p className="font-serif text-xl font-semibold">Overview</p>
        </li>
        <li className="flex items-center gap-2 mb-2 ml-10">
          <img src="assets/staff.png" className="w-6 h-6" alt="Staff" />
          <p className="font-serif text-xl font-semibold">Staff</p>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
