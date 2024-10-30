import React, { useState } from "react";
import { User, Calendar, BookmarkIcon, ExternalLink } from "lucide-react";
import PostPopup from "./PostPopup";

const ContentItem = ({
  title,
  subtitle,
  description,
  content,
  linkText,
  isBook = false,
  noteFile,
  date,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleClick = async () => {
    if (isBook && noteFile) {
      try {
        const module = await import(`../data/booknotes/${noteFile}.js`);
        setPopupContent(module.default);
        setShowPopup(true);
      } catch (error) {
        console.error("Failed to load book notes", error);
      }
    } else if (content) {
      setPopupContent({ title, subtitle, content, date });
      setShowPopup(true);
    }
  };

  return (
    <>
      <div className="mb-8 last:mb-0">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          {isBook ? (
            <User size={14} className="mr-1" />
          ) : (
            <Calendar size={14} className="mr-1" />
          )}
          {subtitle}
        </div>
        <p className="text-gray-700 mt-2 text-sm">{description}</p>
        {(content || noteFile) && (
          <button
            onClick={handleClick}
            className="inline-flex items-center text-sm text-blue-500 mt-3 hover:text-blue-600 transition-colors"
          >
            <BookmarkIcon size={16} className="mr-1" />
            {linkText}
            <ExternalLink size={14} className="ml-1" />
          </button>
        )}
      </div>
      {showPopup && popupContent && (
        <PostPopup
          title={popupContent.title}
          subtitle={popupContent.subtitle || popupContent.author}
          content={popupContent.content}
          date={popupContent.date || date}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default ContentItem;
