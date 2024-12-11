"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaFileImage, FaGripLines } from "react-icons/fa6";
import { IoCloseSharp, IoReorderThreeSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRefresh } from "react-icons/io";
import ReactPlayer from "react-player";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuRefreshCw } from "react-icons/lu";

const VideoBlock = ({ setShowFiles, showFiles }) => {
  const [isMenuopen, setIsmenuopen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const selecthandlechnage = (e) => {
    setSelectedOption(e.target.value);
  };
  const [inpval, setInpval] = useState({
    title: "",
    description: "",
    videoId: "",
    videoUrl: "",
    videoThumbnil: "",
    Brightcoveid: "",
    BrightCoveThumbnil: "",
    StreamvideoId: "",
    StreamThumbnil: "",
    DiceId: "",
    DiceThumbnil: "",
  });
  const [isRemoved, setIsRemoved] = useState(false);
  const removeToggle = () => {
    setIsRemoved(!isRemoved);
  };
  const [isButtonToggle, setisButtonToggle] = useState({
    isdescription: false,
    istitle: false,
  });
  const handleToggle = (toggleState) => {
    setisButtonToggle({
      ...isButtonToggle,
      [toggleState]: !isButtonToggle[toggleState],
    });
    // setIsmenuopen(false)
  };
  const handlechange = (e) => {
    setInpval({
      ...inpval,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const handleOpenMenu = () => {
    setIsmenuopen(!isMenuopen);
  };
  const handleRemoveThumbnail = () => {
    setInpval((prev) => ({
      ...prev,
      StreamThumbnil: "",
      BrightCoveThumbnil: "",
      videoThumbnil: "",
      DiceThumbnil: "",
    }));
  };
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsmenuopen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    // <div className="max-w-3xl mx-auto  bg-white p-6 shadow-md rounded-md">
    <div
      className={`${
        isRemoved
          ? "hidden"
          : "block max-w-5xl mx-auto  bg-white md:p-6 p-2 shadow-b-md rounded-b-md "
      }`}
    >
      <div className="space-y-4 md:p-6 p-2  rounded border-2 border-b-0 border-gray-200">
        {showFiles && (
          <div className="justify-between mb-4 flex items-center space-x-2">
            <p className=" font-bold text-lg tracking-normal">Video</p>
            <div className="flex space-x-2 hover:bg-gray-100">
              <button
                name="removeToggle"
                onClick={() =>
                  setShowFiles({
                    imageFile: false,
                    videoFile: false,
                  })
                }
                className={` p-3 justify-center flex items-center`}
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
        )}
        <div className="">
          <div className="w-full">
            <label className="block font-medium mb-1 text-lg">Source *</label>
            <form className="w-full">
              <div className="relative  rounded-sm border-2 border-gray-300  focus:border-gray-400 p-1 bg-white">
                <select
                  className=" text-gray-800 appearance-none w-full py-1 bg-white p-3 focus:outline-none"
                  name="whatever"
                  id="frm-whatever"
                  value={selectedOption}
                  onChange={selecthandlechnage}
                  placeholder="Please select ..."
                >
                  <option value="" style={{ color: "gray" }}>
                    Please select...
                  </option>
                  <option value="StreamAMG">StreamAMG</option>
                  <option value="YouTube">YouTube</option>
                  <option value="BrightCove">BrightCove</option>
                  <option value="Dice">Dice</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 ">
                  <FaAngleDown />
                </div>
              </div>
            </form>
          </div>
        </div>
        {selectedOption === "StreamAMG" && (
          <div>
            <label className="block text-gray-700 text-lg">Video ID</label>
            <input
              type="text"
              className=" p-2 border-2 border-gray-300 focus:border-gray-400 rounded-sm w-full"
              name="StreamvideoId"
              value={inpval.StreamvideoId}
              onChange={(e) => handlechange(e)}
            />
            <div className="space-y-4 md:flex gap-4">
              <div
                className="mt-4 md:w-52 ms:w-40 w-28 h-[100px] px-2 relative
                  rounded border-2 border-grey-200 bg-gray-50 
                  grid place-items-center border-grey-200 bg-grey-100  text-gray-300
                  "
              >
                <FaFileImage className="h-20 w-30" />

                {inpval.StreamThumbnil && (
                  <div className=" w-[20px] absolute top-0 left-0">
                    <ReactPlayer
                    width={"150px"}
                      height={"95px"}
                      url={inpval.StreamThumbnil}
                      controls={false}
                      className=" h-[100px] w-[20px] md:w-52"
                    ></ReactPlayer>
                  </div>
                )}
              </div>
              <div className="w-full">
                <label className="block font-medium text-lg mb-1">
                  Video thumbnail *
                </label>

                <input
                  type="url"
                  name="StreamThumbnil"
                  placeholder="https://www.example.com"
                  className="w-full border-2  border-gray-300  p-2  focus:border-gray-400
                        rounded-sm 
                        "
                  value={inpval.StreamThumbnil}
                  onChange={(e) => handlechange(e)}
                />
                <div
                  className={`${inpval.StreamThumbnil ? "hidden" : "block"}`}
                >
                  <button className="mt-2  flex items-center gap-1 text-black rounded-full font-semibold">
                    <span className="  text-[#6221f8]  font-extrabold rounded-full items-center justify-center">
                      {" "}
                      <IoMdAddCircleOutline className="h-[24px] w-[24px] " />{" "}
                    </span>{" "}
                    Add image
                  </button>
                </div>
                {inpval.StreamThumbnil && (
                  <div className=" mt-2 flex text-gray-500 gap-10  items-center">
                    <button className="hover:underline text-[16px] flex items-center gap-1">
                      {" "}
                      <IoMdRefresh /> Replace
                    </button>
                    <button
                      onClick={handleRemoveThumbnail}
                      className="hover:underline text-[16px] flex items-center gap-1"
                    >
                      {" "}
                      <RiDeleteBin6Fill /> Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {selectedOption === "YouTube" && (
          <div>
            <label className="block text-gray-700 text-lg">Video URL*</label>
            <input
              type="text"
              className=" p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-400"
              name="videoUrl"
              value={inpval.videoUrl}
              onChange={(e) => handlechange(e)}
            />
            <label className="block text-gray-700 text-lg">Video ID</label>
            <input
              type="text"
              className=" p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-400"
              name="videoId"
              value={inpval.videoId}
              onChange={(e) => handlechange(e)}
            />
            <div className="space-y-4 gap-x-4 md:flex">
              <div
                className="mt-4 md:w-52 ms:w-40 w-28 justify-center h-[100px]   relative
                 rounded border-2 border-grey-200 bg-gray-50 px-2 
                 grid place-items-center border-grey-200 bg-grey-100  text-gray-300
                 
                 "
              >
                <FaFileImage className="h-20 w-30" />

                {inpval.videoThumbnil && (
                  <div className=" w-[20px] absolute top-0 left-0">
                    <ReactPlayer
                      width={"150px"}
                      height={"95px"}
                      url={inpval.videoThumbnil}
                      controls={false}
                      className=" h-[100px] w-[20px] md:w-52"
                    ></ReactPlayer>
                  </div>
                )}
              </div>
              <div className="w-full">
                <label className="block font-medium mb-1">
                  Video thumbnail *
                </label>
                <input
                  type="url"
                  name="videoThumbnil"
                  placeholder="https://www.example.com"
                  className="w-full border-2 border-gray-300  p-2  focus:border-gray-400
                        rounded-sm 
                        "
                  value={inpval.videoThumbnil}
                  onChange={(e) => handlechange(e)}
                />
                <div className={`${inpval.videoThumbnil ? "hidden" : "block"}`}>
                  <button className="mt-2  flex items-center gap-1 text-black rounded-full font-semibold">
                    <span className="  text-[#6221f8]  font-extrabold rounded-full items-center justify-center">
                      {" "}
                      <IoMdAddCircleOutline className="h-[24px] w-[24px] " />{" "}
                    </span>{" "}
                    Add image
                  </button>
                </div>
                {inpval.videoThumbnil && (
                  <div className=" mt-2 flex text-gray-500 gap-10  items-center">
                    <button className="hover:underline text-[16px] flex items-center gap-1">
                      {" "}
                      <IoMdRefresh /> Replace
                    </button>
                    <button
                      onClick={handleRemoveThumbnail}
                      className="hover:underline text-[16px] flex items-center gap-1"
                    >
                      {" "}
                      <RiDeleteBin6Fill /> Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {selectedOption === "BrightCove" && (
          <div>
            <label className="block text-gray-700 text-lg">Video ID</label>
            <input
              type="text"
              className="mt-2 p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-400"
              name="Brightcoveid"
              value={inpval.Brightcoveid}
              onChange={(e) => handlechange(e)}
            />
            <div className="space-y-4 md:flex gap-4">
              <div
                className="mt-4 md:w-52 ms:w-40 w-28 h-[100px] px-2 relative
            rounded border-2 border-grey-200 bg-gray-50 
            grid place-items-center border-grey-200 bg-grey-100  text-gray-300
            "
              >
                <FaFileImage className="h-20 w-30" />

                {inpval.BrightCoveThumbnil && (
                  <div className=" w-[20px] absolute top-0 left-0">
                    <ReactPlayer
                      width={"150px"}
                      height={"95px"}
                      url={inpval.BrightCoveThumbnil}
                      controls={false}
                      className=" h-[100px] w-[20px] md:w-52"
                    ></ReactPlayer>
                  </div>
                )}
              </div>
              <div className="w-full">
                <label className="block font-medium mb-1">
                  Video thumbnail *
                </label>
                <input
                  type="url"
                  name="BrightCoveThumbnil"
                  placeholder="https://www.example.com"
                  className="w-full border-2 border-gray-300  p-2  focus:border-gray-400
                        rounded-sm 
                        "
                  value={inpval.BrightCoveThumbnil}
                  onChange={(e) => handlechange(e)}
                />
                <div
                  className={`${
                    inpval.BrightCoveThumbnil ? "hidden" : "block"
                  }`}
                >
                  <button className="mt-2  flex items-center gap-1 text-black rounded-full font-semibold">
                    <span className="  text-[#6221f8]  font-extrabold rounded-full items-center justify-center">
                      {" "}
                      <IoMdAddCircleOutline className="h-[24px] w-[24px] " />{" "}
                    </span>{" "}
                    Add image
                  </button>
                </div>
                {inpval.BrightCoveThumbnil && (
                  <div className=" mt-2 flex text-gray-500 gap-10  items-center">
                    <button className="hover:underline text-[16px] flex items-center gap-1">
                      {" "}
                      <IoMdRefresh /> Replace
                    </button>
                    <button
                      onClick={handleRemoveThumbnail}
                      className="hover:underline text-[16px] flex items-center gap-1"
                    >
                      {" "}
                      <RiDeleteBin6Fill /> Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {selectedOption === "Dice" && (
          <div>
            <label className="block text-gray-700 text-lg">Video ID</label>
            <input
              type="text"
              className="mt-2 p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-400"
              name="DiceId"
              value={inpval.DiceId}
              onChange={(e) => handlechange(e)}
            />
            <div className="space-y-4 md:flex gap-4">
              <div
                className="mt-4 md:w-52 ms:w-40 w-28 h-[100px] px-2 relative
                  rounded border-2 border-grey-200 bg-gray-50  
                  grid place-items-center border-grey-200 bg-grey-100  text-gray-300
                  "
              >
                <FaFileImage className="h-20 w-30" />

                {inpval.DiceThumbnil && (
                  <div className=" w-[20px] absolute top-0 left-0">
                    <ReactPlayer
                      width={"150px"}
                      height={"95px"}
                      url={inpval.DiceThumbnil}
                      controls={false}
                      className=" h-[100px] w-[20px] md:w-52"
                    ></ReactPlayer>
                  </div>
                )}
              </div>
              <div className="w-full">
                <label className="block font-medium mb-1">
                  Video thumbnail *
                </label>
                <input
                  type="url"
                  name="DiceThumbnil"
                  placeholder="https://www.example.com"
                  className="w-full border border-gray-300  p-2
                        rounded-sm 
                        "
                  value={inpval.DiceThumbnil}
                  onChange={(e) => handlechange(e)}
                />
                <div className={`${inpval.DiceThumbnil ? "hidden" : "block"}`}>
                  <button className="mt-2  flex items-center gap-1 text-black rounded-full font-semibold">
                    <span className="text-[#6221f8]  font-extrabold rounded-full items-center justify-center">
                      {" "}
                      <IoMdAddCircleOutline className="h-[24px] w-[24px] " />{" "}
                    </span>{" "}
                    Add image
                  </button>
                </div>
                {inpval.DiceThumbnil && (
                  <div className=" mt-2 flex text-gray-500 gap-10  items-center">
                    <button className="hover:underline text-[16px] flex items-center gap-1">
                      {" "}
                      <IoMdRefresh /> Replace
                    </button>
                    <button
                      onClick={handleRemoveThumbnail}
                      className="hover:underline text-[16px] flex items-center gap-1"
                    >
                      {" "}
                      <RiDeleteBin6Fill /> Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {isButtonToggle.istitle && (
          <div className="mt-4">
            <label className="block text-gray-700 text-lg">Enter Title</label>
            <input
              type="text"
              className="mt-2 p-2 border-2 border-gray-300 focus:border-gray-400 rounded-sm w-full"
              name="title"
              value={inpval.title}
              onChange={(e) => handlechange(e)}
            />
          </div>
        )}
        {isButtonToggle.isdescription && (
          <div className="mt-4">
            <label className="block text-gray-700 text-lg">
              Enter description
            </label>
            <textarea
              type="text"
              className="mt-2 p-2 border-2 border-gray-300 focus:border-gray-400 rounded-sm w-full"
              name="description"
              value={inpval.description}
              onChange={(e) => handlechange(e)}
            />
          </div>
        )}
      </div>

      <div className="z-10 px-4 text-gray-600  border-t-2 pb-4 border-b-2 border-l-2 border-r-2 border-grey-200 pt-4 flex space-x-4">
        <button className="text-grey-400 hover:underline  font-normal justify-center flex items-center ">
          <LuRefreshCw className="h-[23px] w-[23px]" />
          <p className="ml-2 leading-none text-gray-600 "> Change block type</p>
        </button>
        <div className={` ${isMenuopen ? "" : ""} relative flex items-center`}>
          <button
            onClick={handleOpenMenu}
            ref={buttonRef}
            className="text-grey-400 hover:underline text-body font-normal justify-center  flex items-center  "
          >
            <BsThreeDotsVertical className="h-[24px] w-[24px]" />
            <p> More</p>
          </button>
          {isMenuopen && (
            <div className="absolute ">
              <div className="z-1 ">
                {isMenuopen && (
                  <div
                    ref={dropdownRef}
                    className={`w-52  -right-20 top-12 md:top-4 pointer-left absolute rounded bg-white border-2 border-grey-200 shadow p-1 space-y-1`}
                  >
                    <ul className="p-1">
                      <li className="">
                        <button
                          onClick={() => handleToggle("istitle")}
                          className="w-full text-gray-500 text-left px-4 py-2  hover:underline "
                        >
                          <p className="flex items-center gap-1">
                            <FaGripLines className="" />
                            Title
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleToggle("isdescription")}
                          className="w-full text-left  text-gray-500 px-4 py-2  hover:underline"
                        >
                          <p className="flex items-center gap-1">
                            <IoReorderThreeSharp className="h-[24px] w-[24px]" />
                            Description
                          </p>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="p-3 bg-blue-300" onClick={(e) => handlesubmit(e)}>
        {" "}
        submit
      </button>
    </div>
  );
};

export default VideoBlock;
