const MobileFooter: React.FC = () => {
  return (
    <div className=" flex flex-col w-full mt-5 h-24 justify-center items-center">
      <div
        className="p-3 bg-indigo-500 rounded-3xl justify-center items-center gap-2 inline-flex "
        style={{ marginBottom: "-26px", zIndex: 0 }}
      >
        <img src="assets/add.png" className=" w-8 h-8 relative" alt="add" />
      </div>
      <div className=" self-stretch px-4 py-3 bg-white rounded-tl-xl shadow justify-center items-center inline-flex">
        <div className=" inline-flex grow shrink basis-0 flex-col justify-start items-center gap-1 ">
          <img
            src="assets/footerHome.png"
            className=" w-6 h-6 relative"
            alt="home"
          />
          <div className=" text-indigo-500 text-xs font-medium font-serif">
            Home
          </div>
        </div>
        <div className=" inline-flex flex-col grow shrink basis-0 justify-center items-center gap-1">
          <img
            src="assets/footerConsole.png"
            className="w-6 h-6 relative"
            alt="console"
          />
          <div className="text-xs font-medium font-serif">Console</div>
        </div>
      </div>
    </div>
  );
};
export default MobileFooter;
