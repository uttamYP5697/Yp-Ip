import React, { useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { MdAddCircleOutline } from 'react-icons/md';
import DynamicBlock from '../components/blocks/daynemicBlocks';
import BlockInserter from './BlockInserter';

const ContentTypeSelector = ({ blocks, setBlocks, addBlock, toggleBlockList, openIndex }) => {
  
  const toggleVisibility = (index) => {
    const newBlocks = blocks?.map((block, i) =>
      i === index ? { ...block, visible: !block.visible } : block
    );
    setBlocks(newBlocks);
  };

  const moveBlock = (index, direction) => {
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;

    const elementToMove = newBlocks[index];
    const targetElement = newBlocks[targetIndex];

    newBlocks[index] = targetElement;
    newBlocks[targetIndex] = elementToMove;
    setBlocks(newBlocks);
  };

  const deleteBlock = (index) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  return (
    <div> 
      {blocks?.map((block, index) => (
  <div key={block.id}>
    <div className="flex flex-col border border-gray-300  ">
      <div className={`flex items-center justify-between bg-white  pt-5 px-8 rounded-t-lg ${!block.visible ? 'pb-4' : ''}`}>
        <h3 className="text-lg font-semibold">{block?.type}</h3>
        <div className="space-x-4">
          <button
            onClick={() => moveBlock(index, 'up')}
            className="text-gray-500 hover:text-purple-600"
          >
            ↑
          </button>
          <button
            onClick={() => moveBlock(index, 'down')}
            className="text-gray-500 hover:text-purple-600"
          >
            ↓
          </button>
          <button
            onClick={() => toggleVisibility(index)}
            className="text-gray-500 hover:text-purple-600"
          >
            {block.visible ? <CiSquareMinus /> : <CiSquarePlus />}
          </button>
          <button
            onClick={() => deleteBlock(index)}
            className="text-red-500 hover:text-red-700"
          >
            ✖
          </button>
        </div>
      </div>
      {block.visible && (
        <div>
          <DynamicBlock type={block.type} content={block.content} />
        </div>
      )}
    </div>

    {/* Add divider between blocks, but not after the last block */}
    
      <div className="flex justify-center ml-3 w-1 border-l border-black h-5 my-2"></div>
    
    
    {/* Add New Block Button */}
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-start">
        <button
          onClick={() => toggleBlockList(index)} // Toggle Block Inserter visibility
          className="text-primary-300 hover:text-primary-400 hover:underline focus:text-primary-400 font-semibold flex items-center"
        >
          <span className="text-2xl">
            <MdAddCircleOutline />
          </span>
          <p className="leading-none">Add new block</p>
        </button>
      </div>
    </div>

    {/* Divider between blocks */}
    {index < blocks.length - 1 && (
      <div className="flex justify-center ml-3 w-1 border-l border-black h-5 my-2"></div>
    )}

    {/* Block Inserter */}
    {openIndex === index && (
      <div className="max-w-5xl mx-auto my-10 bg-white shadow rounded-lg overflow-hidden">
        <BlockInserter addBlock={addBlock} />
      </div>
    )}
  </div>
))}

    </div>
  );
};

export default ContentTypeSelector;
