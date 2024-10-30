import React from "react";

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-500 transition-colors"
  >
    {icon}
  </a>
);

export default SocialIcon;
