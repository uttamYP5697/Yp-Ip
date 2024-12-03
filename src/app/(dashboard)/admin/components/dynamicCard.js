"use client"
import React, { useState } from "react";

const DynamicCardForm = () => {
  // State for holding the list of cards
  const [cards, setCards] = useState([{
    title: "",
    summary: "",
    mediaType: "image", // default to 'image', you can switch to 'video'
  }]);

  // Function to handle adding a new card
  const handleAddCard = () => {
    setCards([
      ...cards,
      {
        title: "",
        summary: "",
        mediaType: "image", // default to 'image', you can switch to 'video'
      },
    ]);
  };

  // Function to handle changes within the card fields
  const handleInputChange = (index, field, value) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = value;
    setCards(updatedCards);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Add New Block Button */}
      

      {/* Render all dynamic cards */}
      <div className="space-y-4">
        
      {cards.map((card, index) => (
  <React.Fragment key={index}>
    {/* Vertical Line Before Card */}
    {index > 0 && (
      <div className="relative  items-center my-6">
        <div className=" inset-0  items-center justify-center">
          <div className="w-px h-full bg-gray-300">|</div>
        </div>
        <button
          onClick={() => handleAddCardAtIndex(index - 1)}
          className="relative z-10 px-4 py-2 bg-white border rounded-full shadow-md text-purple-600 font-medium flex items-center space-x-2"
        >
          <span className="text-xl">+</span>
          <span>Insert block</span>
        </button>
        <div className={`${index === cards.length - 1 ? "" : "hidden"} inset-0  items-center justify-center`}>
          <div className="w-px h-full bg-gray-300">|</div>
        </div>
      </div>
    )}

    {/* Card */}
    <div className="bg-white p-6 border rounded-lg shadow-md">
      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Title *123</label>
        <input
          type="text"
          value={card.title}
          onChange={(e) =>
            handleInputChange(index, "title", e.target.value)
          }
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Enter title"
        />
      </div>

      {/* Summary Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Summary *</label>
        <textarea
          value={card.summary}
          onChange={(e) =>
            handleInputChange(index, "summary", e.target.value)
          }
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Enter summary"
        />
      </div>

      {/* Hero Media Options */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Hero media *</label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() =>
              handleInputChange(index, "mediaType", "image")
            }
            className={`p-3 border rounded-md ${
              card.mediaType === "image" ? "bg-blue-200" : ""
            }`}
          >
            Image
          </button>
          <button
            type="button"
            onClick={() =>
              handleInputChange(index, "mediaType", "video")
            }
            className={`p-3 border rounded-md ${
              card.mediaType === "video" ? "bg-blue-200" : ""
            }`}
          >
            Video
          </button>
        </div>
      </div>

      {/* Placeholder for Media */}
      <div className="bg-gray-100 h-40 flex items-center justify-center mb-4">
        {card.mediaType === "image" ? (
          <span>Image Placeholder</span>
        ) : (
          <span>Video Placeholder</span>
        )}
      </div>
    </div>
  </React.Fragment>
))}

      </div>
      <div className="relative">
        <div>|</div>
      <button
        onClick={handleAddCard}
        className="w-full py-3 bg-blue-600 text-white rounded-md mb-4"
      >
        Add New Block
      </button>
      </div>
    </div>
  );
};

export default DynamicCardForm;
