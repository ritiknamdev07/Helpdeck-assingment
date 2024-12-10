import React, { useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

const Settings = () => {
  // State to manage collapsible sections
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">Setting</h1>

      <div className="mb-4 border rounded overflow-hidden">
        <div
          className="bg-[#55D6C2] text-white px-4 py-2 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("general")}
        >
          <span>General</span>
          <FaChevronDown
            className={`transition-transform ${
              openSection === "general" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSection === "general" && (
          <div className="bg-gray-100 px-4 py-2 space-y-2">
            <div className="flex justify-between items-center">
              <span>Language</span>
              <FaCheck className="text-[#55D6C2]" />
            </div>
            <div className="flex justify-between items-center">
              <span>Data Backup</span>
              <FaCheck className="text-[#55D6C2]" />
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 border rounded overflow-hidden">
        <div
          className="bg-[#55D6C2] text-white px-4 py-2 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("connect")}
        >
          <span>Connect To</span>
          <FaChevronDown
            className={`transition-transform ${
              openSection === "connect" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSection === "connect" && (
          <div className="bg-gray-100 px-4 py-2 space-y-2">
            <div className="flex justify-between items-center">
              <span>GoDash</span>
              <FaCheck className="text-[#55D6C2]" />
            </div>
            <div className="flex justify-between items-center">
              <span>SuperController</span>
              <FaCheck className="text-[#55D6C2]" />
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 border rounded overflow-hidden">
        <div
          className="bg-[#55D6C2] text-white px-4 py-2 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("email")}
        >
          <span>Email</span>
          <FaChevronDown
            className={`transition-transform ${
              openSection === "email" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSection === "email" && (
          <div className="bg-gray-100 px-4 py-2">
            <div className="flex justify-between items-center">
              <span>Enable SMTP</span>
              <FaCheck className="text-[#55D6C2]" />
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 border rounded overflow-hidden">
        <div
          className="bg-[#55D6C2] text-white px-4 py-2 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("authorization")}
        >
          <span>Authorization</span>
          <FaChevronDown
            className={`transition-transform ${
              openSection === "authorization" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSection === "authorization" && (
          <div className="bg-gray-100 px-4 py-2 space-y-2">
            <div className="flex justify-between items-center">
              <span>Edit Authorization</span>
              <FaCheck className="text-[#55D6C2]" />
            </div>
            <div className="flex justify-between items-center">
              <span>Authority Level</span>
              <select className="border rounded px-2 py-1">
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 border rounded overflow-hidden">
        <div
          className="bg-[#55D6C2] text-white px-4 py-2 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("notification")}
        >
          <span>Notification</span>
          <FaChevronDown
            className={`transition-transform ${
              openSection === "notification" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSection === "notification" && (
          <div className="bg-gray-100 px-4 py-2">
            <div className="flex justify-between items-center">
              <span>Enable Notification</span>
              <FaCheck className="text-[#55D6C2]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
