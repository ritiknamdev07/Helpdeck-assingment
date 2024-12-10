import React from "react";
import { FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-[#55D6C2] flex h-[90px]  px-4 py-2 items-center justify-between ">
      <div className="text-white text-3xl font-bold">
        <Link to="/">Helpdesk</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-white">
          <button className="bg-black text-white px-2 py-1 rounded-md">
            BM
          </button>
          <button className="bg-white text-black px-2 py-1 rounded-md">
            BI
          </button>
        </div>

        <div className="relative text-black">
          <FaBell size={20} />
        </div>
        <Link to="user-profile">
          <FaUser className="text-black" size={20} />
        </Link>
        <Link to="sign-in">
          <FaSignOutAlt className="text-black" size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
