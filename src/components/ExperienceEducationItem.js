import React from "react";
import { Calendar, MapPin } from "lucide-react";

const ExperienceEducationItem = ({
  title,
  organization,
  location,
  date,
  description,
  icon,
}) => (
  <div className="mb-6 last:mb-0">
    <div className="flex items-start space-x-4">
      <div className="mt-1 text-gray-400">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-md text-gray-600">{organization}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Calendar size={14} className="mr-1" />
          <span className="mr-3">{date}</span>
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        {description && (
          <p className="text-sm text-gray-700 mt-2">{description}</p>
        )}
      </div>
    </div>
  </div>
);

export default ExperienceEducationItem;
