import React, { useState, useEffect } from "react";
import { Calendar, User, X } from "lucide-react";

const PostPopup = ({ title, subtitle, content, date, onClose }) => {
  const [wordCount, setWordCount] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const text = doc.body.innerText;
    setWordCount(text.trim().split(/\s+/).length);

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [content]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-200 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleOverlayClick}
    >
      {/* Higher z-index backdrop */}
      <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-[9999]" />

      <div
        className={`relative w-full max-w-4xl bg-white rounded-lg shadow-2xl transform transition-all duration-200 z-[10000] ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center text-sm text-gray-500">
              <User size={14} className="mr-1" />
              Ahmed Elfarra
            </div>
            {date && (
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                {date}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-2">Word count: {wordCount}</p>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 max-h-[calc(90vh-10rem)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPopup;
