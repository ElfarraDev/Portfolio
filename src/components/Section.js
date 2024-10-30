import React from "react";

const Section = ({
  title,
  children,
  noPadding = false,
  smallTitle = false,
}) => (
  <div className={`mt-12 first:mt-0 ${noPadding ? "" : "ml-6"}`}>
    {title && (
      <h2
        className={`font-bold mb-6 text-gray-800 ${
          smallTitle ? "text-xl" : "text-2xl"
        }`}
      >
        {title}
      </h2>
    )}
    <div className="border-l-2 border-gray-200 pl-6">{children}</div>
  </div>
);

export default Section;
