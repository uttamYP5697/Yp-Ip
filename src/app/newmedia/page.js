"use client";
import { MdAddCircleOutline } from "react-icons/md";
import { useState } from 'react';
import ContentTypeSelector from '../(dashboard)/admin/common/contentTypeSelector';


export default function Home() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [heroMedia, setHeroMedia] = useState('');
  const [blocks, setBlocks] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to control visibility

  const toggleBlockList = () => {
    setIsOpen(!isOpen); // Toggle state on click
  };

  const addBlock = (type) => {
    if (type) setBlocks([...blocks, type]);
  };

  return (
    <div className="">
      <div className="">
        <TitleSec tion title={title} setTitle={setTitle} summary={summary} setSummary={setSummary} />
        {/* <HeroMediaSelector heroMedia={heroMedia} setHeroMedia={setHeroMedia} /> */}
      </div>
      <div className=' max-w-5xl mx-auto'>
        <div className="flex justify-center ml-3  w-1 border-l border-black h-5 my-2"></div>
      </div>

      <div className="max-w-5xl mx-auto ">
        <div className='flex items-center justify-start'>
          <span>
          </span>
          <button
            type="button"
            tabIndex={0}
            onClick={toggleBlockList}
            className=" relative  text-primary-300 hover:text-primary-400 hover:underline focus:text-primary-400 text-body font-semibold flex items-center justify-center"
          >
            <span className='text-2xl'> <MdAddCircleOutline /> </span>

            <p className="leading-none">Add new block</p>
          </button>
        </div>
      </div>
      <div className=' max-w-5xl mx-auto'>
        <div className="flex justify-center ml-3  w-1 border-l border-black h-5 my-2"></div>
      </div>
      {isOpen && (
        <div className="max-w-5xl mx-auto my-10 bg-white shadow rounded-lg overflow-hidden">
          <BlockInserter addBlock={addBlock} />
        </div>
      )}
      <div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto my-10 bg-white shadow rounded-lg overflow-hidden">
        <ContentTypeSelector blocks={blocks} setBlocks={setBlocks} />
      </div>
      
      <div>
      </div>
    </div>
  );
}
