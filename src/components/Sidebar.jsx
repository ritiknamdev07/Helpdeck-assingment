import { GrDocumentPerformance } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaTicketAlt, FaCog, FaHistory } from "react-icons/fa"; // Import icons
import { BsTicketPerforated } from "react-icons/bs";
import { LuTicketPlus } from "react-icons/lu";
const Sidebar = () => {
  return (
    <div className="bg-[#6A676736] w-[250px] h-screen p-4 flex flex-col gap-6">
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded text-gray-700 text-base hover:bg-[#55D6C2] hover:text-white ${
              isActive ? "bg-[#55D6C2] text-white" : ""
            }`
          }
        >
          <FaTachometerAlt size={18} /> Dashboard
        </NavLink>

        <NavLink
          to="/new-ticket"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded text-gray-700 text-base hover:bg-[#55D6C2] hover:text-white ${
              isActive ? "bg-[#55D6C2] text-white" : ""
            }`
          }
        >
          <LuTicketPlus size={18} /> New Ticket
        </NavLink>

        <NavLink
          to="/my-ticket"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded text-gray-700 text-base hover:bg-[#55D6C2] hover:text-white ${
              isActive ? "bg-[#55D6C2] text-white" : ""
            }`
          }
        >
          <BsTicketPerforated size={18} /> My Ticket
        </NavLink>

        <NavLink
          to="/database"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded text-gray-700 text-base hover:bg-[#55D6C2] hover:text-white ${
              isActive ? "bg-[#55D6C2] text-white" : ""
            }`
          }
        >
          <FaTicketAlt size={18} /> Database
        </NavLink>

        <NavLink
          to="/user-logs"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded text-gray-700 text-base hover:bg-[#55D6C2] hover:text-white ${
              isActive ? "bg-[#55D6C2] text-white" : ""
            }`
          }
        >
          <FaHistory size={18} /> User Log History
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded text-gray-700 text-base hover:bg-[#55D6C2] hover:text-white ${
              isActive ? "bg-[#55D6C2] text-white" : ""
            }`
          }
        >
          <FaCog size={18} /> Settings
        </NavLink>
        <NavLink
          to="/performance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded text-gray-700 text-base hover:bg-[#55D6C2] hover:text-white ${
              isActive ? "bg-[#55D6C2] text-white" : ""
            }`
          }
        >
          <GrDocumentPerformance size={18} /> Performance
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
