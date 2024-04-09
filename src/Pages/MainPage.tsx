import React from "react";
import SideNav from "../components/SideNav";
import Button from "../components/Button";
import TaskCard from "../components/TaskCard";
import MobileFooter from "../components/MobileFooter";
import MobileHeader from "../components/MobileHeader";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row  w-full mt-5 lg:gap-10">
      <div className=" hidden xl:block w-1/4">
        <SideNav />
      </div>
      <div className=" xl:w-3/4 flex flex-col m-2">
        <div className="flex flex-row justify-between items-start gap-6 mb-5">
          <h2 className="font-serif text-2xl font-semibold">
            Tasks of the day
          </h2>
          <MobileHeader />
        </div>
        <div className=" w-80 h-9 px-6 sm:hidden py-2 bg-neutral-200 rounded-xl shadow flex justify-between items-center">
          <div className=" text-xs text-red-600 font-serif font-semibold">
            Negative notification type decription
          </div>
          <img src="assets/cancel.png" className=" w-5 h-5 relative" alt="" />
        </div>
        <div className="flex flex-wrap gap-3 mt-3 ">
          <Button>Not Going</Button>
          <Button>Ongoing</Button>
          <Button>Scheduled</Button>
          <Button>Completed</Button>
          <Button>Delayed</Button>
          <Button>Ontime</Button>
        </div>
        <div>
          <TaskCard />
        </div>
      </div>
      <div className=" block xl:hidden w-full">
        <MobileFooter />
      </div>
    </div>
  );
};

export default MainPage;
