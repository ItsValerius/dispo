import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineMailOpen } from "react-icons/hi";
const Header = () => {
  return (
    <div className="hidden bg-[#222222] text-sm sm:block ">
      <div className="mx-auto flex max-w-7xl space-x-5 px-4 py-4 sm:px-6 ">
        <div className="flex">
          <GiSmartphone color="#2ca743" size={"1.25rem"} />
          <p className="px-1 tracking-widest text-[#999999]">
            +49 (0)2433-888 76 00
          </p>
        </div>
        <div className="flex ">
          <HiOutlineMailOpen color="#2ca743" size={"1.25rem"} />
          <p className="px-1 tracking-wider text-[#999999] transition duration-300 ease-in-out hover:text-green-800">
            <a href="mailto:info@rblmedia.de"> info@rblmedia.de </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;