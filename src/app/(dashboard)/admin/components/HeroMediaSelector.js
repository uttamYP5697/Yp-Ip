import React from 'react';

const HeroMediaSelector = ({ heroMedia, setHeroMedia }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <label className="block text-gray-600 text-sm font-medium mb-2">
        Hero media *
      </label>
      <div className="flex space-x-4">
        <button
          onClick={() => setHeroMedia('Image')}
          className={`flex-1 p-2 border ${
            heroMedia === 'Image' ? 'border-purple-600' : 'border-gray-300'
          } rounded focus:outline-none hover:bg-purple-100`}
        >
          📷 Image
        </button>
        <button
          onClick={() => setHeroMedia('Video')}
          className={`flex-1 p-2 border ${
            heroMedia === 'Video' ? 'border-purple-600' : 'border-gray-300'
          } rounded focus:outline-none hover:bg-purple-100`}
        >
          ▶ Video
        </button>
      </div>
    </div>
  );
};

export default HeroMediaSelector;
