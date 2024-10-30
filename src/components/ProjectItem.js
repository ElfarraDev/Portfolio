import React from "react";
import { Calendar, Github } from "lucide-react";

const ProjectItem = ({ title, description, date, githubUrl }) => (
  <li className="mb-6 last:mb-0">
    <h3 className="text-lg font-semibold text-gray-800 flex items-center">
      {title}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-gray-500 hover:text-blue-500"
      >
        <Github size={18} />
      </a>
    </h3>
    <p className="text-gray-700 mt-1 text-sm">{description}</p>
    <div className="flex items-center text-sm text-gray-500 mt-2">
      <Calendar size={14} className="mr-1" />
      {date}
    </div>
  </li>
);

export default ProjectItem;
