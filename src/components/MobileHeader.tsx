const MobileHeader: React.FC = () => {
  return (
    <div>
      <div className=" sm:hidden flex justify-start items-center gap-4">
        <img src="assets/search.png" className="w-8 h-8 relative" alt="" />
        <img src="assets/bell.png" className="w-8 h-8 relative" alt="" />
        <img src="assets/user.png" className="w-8 h-8 relative" alt="" />
      </div>
    </div>
  );
};

export default MobileHeader;
