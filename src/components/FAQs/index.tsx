import React, { useState } from "react";

const FAQ = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-gray-900">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isOpen ? "transform rotate-180" : ""
          } w-5 h-5 text-gray-400`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.6a6.4 6.4 0 110-12.8 6.4 6.4 0 010 12.8z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10.707 9.293a1 1 0 00-1.414-1.414L7.586 9.586a1 1 0 000 1.414l1.707 1.707a1 1 0 101.414-1.414L9.414 11l1.293-1.293a1 1 0 000-1.414z"
            clipRule="evenodd"
            transform="rotate(90,10,10)"
          />
        </svg>
      </button>
      {isOpen && (
        <div className={`px-4 pb-4 ${
            isOpen ? "transition-all duration-500 ease-in-out" : "overflow-hidden transition-all duration-500 ease-in-out"
          }`}>
          <p className="text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
