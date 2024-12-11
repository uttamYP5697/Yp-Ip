"use client";
import React, { useState } from 'react';

const BlockInserter = ({ addBlock }) => {
  const contentTypes = [
    { label: "Text", emoji: "✍" },
    { label: "Image", emoji: "📷" },
    { label: "Video", emoji: "▶" },
    { label: "Text", emoji: "✍" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleBlockList = () => {
    setIsOpen(!isOpen); // Toggle state on click
  };

  return (
    <div className="p-4">
      <div className="grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 grid">
        {contentTypes.map((type, index) => (
          <button
            type="button"
            key={index}
            className="border-grey-200 hover:border-grey-300 focus:border-grey-300 bg-white text-primary-400 rounded border-2 p-4 focus:outline-none text-left"
            onClick={() => addBlock(type.label)}
          >
            <div className="flex items-center">
              <span className="block text-xl">{type.emoji}</span>
              <p className="text-body font-bold leading-none">{type.label}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlockInserter;