"use client";
import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import BlockInserter from '../common/blockInserter';
import ContentTypeSelector from '../common/contentTypeSelector';
import TitleSection from '../common/titleSection';

const Page = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [blocks, setBlocks] = useState([]);
  const [openIndex, setOpenIndex] = useState(null); 
  const [inatialBlock, setInatialBlock] = useState(false); 

  const toggleBlockList = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleInatialBlock = () => {
    setInatialBlock(!inatialBlock)
  }

  const generateRandomId = () => Math.random().toString(36).substring(2, 10);

  const addBlock = (type) => {
    const newBlock = {
      id: generateRandomId(),
      type: type || "Text",
      visible: true,
      content: `${type || "Text"} block content.`,
    };
    setBlocks([...blocks, newBlock]);
    setOpenIndex(null); // Close the inserter after adding
    setInatialBlock(false)
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-12 md:gap-4">
        {/* Left Side - 9 Columns */}
        <div className="md:col-span-8 py-4">
          <TitleSection
            title={title}
            setTitle={setTitle}
            summary={summary}
            setSummary={setSummary}
          />

          <div className=" max-w-5xl mx-auto">
            {/* Add Block Button */}
            <div className="flex justify-center ml-3 w-1 border-l border-black h-5 my-2"></div>
            <div className="flex items-center justify-start">
              <button
                onClick={() => toggleInatialBlock()} // Open inserter outside blocks
                className="text-primary-300 hover:text-primary-400 hover:underline focus:text-primary-400 font-semibold flex items-center"
              >
                <span className="text-2xl">
                  <MdAddCircleOutline />
                </span>
                <p className="leading-none">Add new block</p>
              </button>
            </div>

            {inatialBlock && (
              <>
                <div className="flex justify-center ml-3 w-1 border-l border-black h-5 my-2"></div>

                <div className="max-w-5xl mx-auto  bg-white shadow rounded-lg overflow-hidden">
                  <BlockInserter addBlock={addBlock} />
                </div>
              </>
            )}

            {/* Render Content Blocks */}
            <div className="mt-2">
              <ContentTypeSelector
                blocks={blocks}
                setBlocks={setBlocks}
                toggleBlockList={toggleBlockList}
                openIndex={openIndex}
                addBlock={addBlock}
              />
            </div>
          </div>
        </div>

        {/* Right Side - 3 Columns */}
        <div className="col-span-4 py-4">
          <div className="bg-white shadow rounded-lg p-4 md:mt-14">
            <h2 className="text-xl font-bold">Publish</h2>
            <div className="my-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="published"
                  name="status"
                  className="mr-2 h-6 w-6 rounded-full bg-white grid place-items-center"
                />
                <label htmlFor="published" className="ml-2 text-lg">
                  Specify date and time
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="publish-now"
                  name="status"
                  className="mr-2 h-6 w-6 rounded-full bg-white grid place-items-center"
                />
                <label htmlFor="publish-now" className="ml-2 text-lg">
                  Publish immediately
                </label>
              </div>
            </div>
            <h4 className="flex items-center my-2">Publish time</h4>
            <input
              className="border-grey-300 bg-grey-200 pr-2 text-primary-400 w-full py-3 pl-10 rounded border-2"
              placeholder="DD/MM/YYYY - hh:mm"
              type="text"
              id="publish-time"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
