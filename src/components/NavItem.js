import React from "react";

const NavItem = ({ icon, text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 transition-colors ${
      isActive
        ? "text-blue-600 font-medium"
        : "text-gray-600 hover:text-blue-500"
    }`}
  >
    {icon}
    <span className="text-sm">{text}</span>
  </button>
);

export default NavItem;
