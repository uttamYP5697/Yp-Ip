"use client";
import React, { useState } from 'react';
import ImageComponent from '../components/blocks/imageBlock';
import VideoBlock from '../components/blocks/videoBlocj';

const TitleSection = ({ title, setTitle, summary, setSummary }) => {
  const [showFiles, setShowFiles] = useState({
    imageFile: false,
    videoFile: false
  });

  const handleFileShow = (file) => {
    setShowFiles((prevShowFiles) => ({
      ...prevShowFiles,
      [file]: !prevShowFiles[file]
    }));
  };

  return (
    <div className="col-span-9">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Media</h1>

        <div className="bg-white p-2 md:p-4 rounded shadow">
          {/* Title Input */}
          <div>
            <div className="flex justify-between items-end">
              <label htmlFor="content-title" className="text-body text-primary-400 block mb-1">
                Title *
              </label>
            </div>
            <input
              id="content-title"
              type="text"
              placeholder="Name your content..."
              required
              className="border-grey-300 focus:border-grey-400 bg-transparent text-primary-400 placeholder-grey-300 w-full py-2 text-h3 font-bold border-b-2 focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Summary Input */}
          <div className="mt-8">
            <div className="flex justify-between items-end">
              <label htmlFor="content-summary" className="text-body text-primary-400 block mb-1">
                Summary
              </label>
            </div>
            <textarea
              id="content-summary"
              placeholder="Enter your summary..."
              className="border-grey-300 focus:border-grey-400 bg-white text-primary-400 w-full py-3 px-2 rounded border-2 placeholder-grey-300 focus:outline-none"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </div>

          {/* Hero Media Section */}
          <div className="mt-8">
            <p className="text-body text-primary-400 mb-1">Hero media *</p>
            {!showFiles.imageFile && !showFiles.videoFile && (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
                {/* Image Button */}
                <button
                  type="button"
                  className="border-grey-200 hover:border-grey-300 focus:border-grey-300 bg-white text-primary-400 rounded border-2 p-4 focus:outline-none text-left"
                  onClick={() => handleFileShow("imageFile")}
                >
                  <div className="flex items-center">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      className="shrink-0 mr-2 text-secondary-400"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 5.05265C5 3.39579 6.34314 2.05264 8 2.05264H17C18.6569 2.05264 20 3.39579 20 5.05265V18.9474C20 20.6042 18.6569 21.9474 17 21.9474H8C6.34315 21.9474 5 20.6042 5 18.9474V5.05265ZM8 4.05264C7.44772 4.05264 7 4.50036 7 5.05265V18.9474C7 19.4997 7.44772 19.9474 8 19.9474H17C17.5523 19.9474 18 19.4997 18 18.9474V5.05264C18 4.50036 17.5523 4.05264 17 4.05264H8Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.3536 10.3536C14.1583 10.1583 13.8417 10.1583 13.6465 10.3536L11.5 12.5L10.3536 11.3536C10.1583 11.1583 9.84172 11.1583 9.64646 11.3536L7.85356 13.1465C7.53858 13.4614 7.76167 14 8.20712 14H11.2061C11.2064 14 11.2068 14 11.2071 14H16.7929C17.2384 14 17.4614 13.4614 17.1465 13.1465L14.3536 10.3536Z"
                        fill="currentColor"
                      />
                      <circle cx="10" cy="9.00002" r="1" fill="currentColor" />
                    </svg>
                    <p className="text-body font-bold leading-none">Image</p>
                  </div>
                </button>

                {/* Video Button */}
                <button
                  type="button"
                  className="border-grey-200 hover:border-grey-300 focus:border-grey-300 bg-white text-primary-400 rounded border-2 p-4 focus:outline-none text-left"
                  onClick={() => handleFileShow("videoFile")}
                >
                  <div className="flex items-center">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      className="shrink-0 mr-2 text-secondary-400"
                    >
                      <path
                        d="M18.9753 10.4291C20.348 11.1486 20.348 12.861 18.9753 13.5806L7.2362 19.7341C6.50433 20.1177 5.6781 20.0716 5.03431 19.7341C4.39263 19.3977 4.00482 18.8192 4.00482 18.1584L4.00482 5.85126C4.00482 5.19041 4.39263 4.6119 5.03431 4.27554C5.6781 3.93807 6.50433 3.8919 7.2362 4.27554L18.9753 10.4291Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                      />
                    </svg>
                    <p className="text-body font-bold leading-none">Video</p>
                  </div>
                </button>
              </div>
            )}
            {
              showFiles.imageFile && (
                <ImageComponent setShowFiles={setShowFiles} showFiles={showFiles} />
              )

            }
            {
              showFiles.videoFile && (
                <VideoBlock setShowFiles={setShowFiles} showFiles={showFiles} />
              )

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
