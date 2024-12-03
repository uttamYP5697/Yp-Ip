"use client"
import React, { useEffect, useRef, useState } from "react";
import { FaLink } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa6";
import { FaFileImage } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAddCircleOutline, IoMdRefresh } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoReorderThreeSharp } from "react-icons/io5";
import { TbDeviceMobileExclamation } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";
const ImageComponent = ({setShowFiles , showFiles}) => {
    const [isMenuopen, setIsmenuopen] = useState(false)
    const [inpval, setInpval] = useState({
        imgurl: "",
        thumb_url: "",
        title: "",
        description: "",
        alttext: "",
        sponsor: "",
        link: ""
    })
    const [isRemoved, setIsRemoved] = useState(false);
    const removeToggle = () => {
        setIsRemoved(!isRemoved);
    }
    const [isButtonToggle, setisButtonToggle] = useState({
        isMenu: false,
        isdescription: false,
        istitle: false,
        isthumbnil: false,
        issponser: false,
        isalttext: false,
        islink: false
    })
    const handleToggle = (toggleState) => {
        setisButtonToggle({
            ...isButtonToggle,
            [toggleState]: !isButtonToggle[toggleState],
        })
    }
    const handlechange = (e) => {
        setInpval({
            ...inpval, [e.target.name]: e.target.value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log("submit data ", inpval);
    }
    const handleOpenMenu = () => {
        setIsmenuopen(!isMenuopen)
    }
    const handleRemoveThumbnail = () => {
        setInpval((prev) => ({
            ...prev,
            thumb_url: '',
            sponsor: '',
            imgurl: ''
        }));
    };
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
                buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsmenuopen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        // <div  className="">
        <div className={`${isRemoved ? 'hidden' : 'block max-w-5xl mx-auto  bg-white p-6 shadow-md rounded-b-md '}`}>
            <div className="space-y-4 p-6 rounded border-2 border-b-0 border-gray-200">
                {/* Image Section */}
                    { showFiles &&
                    <div className='justify-between mb-4 flex items-center space-x-2'>
                        <p className=' font-bold text-lg tracking-normal'>Image</p>
                        <div className='flex space-x-2 hover:bg-gray-100'>
                            <button
                                name="removeToggle"
                                onClick={() => setShowFiles({
                                    imageFile: false,
                                    videoFile: false
                                })}
                                className={` p-3 justify-center flex items-center`}

                            >
                                <IoCloseSharp />
                            </button>
                        </div>
                    </div>
                    }
                <div className="flex">  
                    {/* Image Preview */}
                    <div className="mt-4 w-1/4 h-[100px] mx-2 relative rounded border-2 border-gray-200 bg-gray-50 md:w-52 grid place-items-center">
                        <FaFileImage className="h-20 w-30 text-2xl" />
                        {inpval.imgurl && (
                            <div className="absolute top-0 left-0">
                                <img src={inpval.imgurl} alt="User Image" className="h-[100px] w-full md:w-52" />
                            </div>
                        )}
                    </div>

                    {/* Image URL Input */}
                    <div className="w-full mt-3 mx-2">
                        <label className="block font-medium mb-1">Image URL *</label>
                        <input
                            type="url"
                            placeholder="https://www.example.com"
                            className="w-full border-2 border-gray-300 p-2 focus:border-gray-400 rounded-sm"
                            name="imgurl"
                            value={inpval.imgurl}
                            onChange={handlechange}
                        />
                        {/* Add Image Button */}
                        <div className={`${inpval.imgurl ? 'hidden' : 'block'}`}>
                            <button className="mt-2 rounded-full font-semibold items-center flex gap-3">
                                <span className="text-[#6221f8] font-extrabold rounded-full items-center justify-center">
                                    <IoMdAddCircleOutline className="h-[24px] w-[24px]" />
                                </span> Add image
                            </button>
                        </div>
                        {/* Image Actions (Replace/Remove) */}
                        {inpval.imgurl && (
                            <div className="mt-2 flex text-gray-500 gap-10 items-center">
                                <button className="hover:underline text-[16px] flex items-center gap-1">
                                    <IoMdRefresh /> Replace
                                </button>
                                <button onClick={handleRemoveThumbnail} className="hover:underline text-[16px] flex items-center gap-1">
                                    <RiDeleteBin6Fill /> Remove
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Title Section */}
                {isButtonToggle.istitle && (
                    <div className="mt-4">
                        <label className="block text-gray-700 text-lg">Enter Title</label>
                        <input
                            type="text"
                            className="mt-2 p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-400"
                            name="title"
                            value={inpval.title}
                            onChange={handlechange}
                        />
                    </div>
                )}

                {/* Description Section */}
                {isButtonToggle.isdescription && (
                    <div className="mt-4">
                        <label className="block text-gray-700 text-lg">Enter description</label>
                        <textarea
                            type="text"
                            className="mt-2 p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-300"
                            name="description"
                            value={inpval.description}
                            onChange={handlechange}
                        />
                    </div>
                )}

                {/* Alt Text Section */}
                {isButtonToggle.isalttext && (
                    <div className="mt-4">
                        <label className="block text-gray-700 text-lg">Alt text</label>
                        <input
                            type="text"
                            className="mt-2 p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-400"
                            name="alttext"
                            value={inpval.alttext}
                            onChange={handlechange}
                        />
                    </div>
                )}

                {/* Link Section */}
                {isButtonToggle.islink && (
                    <div className="mt-4">
                        <label className="block text-gray-700 text-lg">Link</label>
                        <p className="text-gray-800">Note: Please include http:// or https:// in your link URL</p>
                        <input
                            type="text"
                            className="mt-2 p-2 border-2 border-gray-300 rounded-sm w-full focus:border-gray-400"
                            placeholder="https://www.example.com"
                            onChange={handlechange}
                            name="link"
                            value={inpval.link}
                        />
                    </div>
                )}

                {/* Thumbnail Section */}
                {isButtonToggle.isthumbnil && (
                    <div className="space-y-4 flex">
                        {/* Thumbnail Preview */}
                        <div className="mt-4 w-1/4 h-[100px] mx-2 relative rounded border-2 border-gray-200 bg-gray-50 md:w-52 grid place-items-center">
                            <FaFileImage className="h-20 w-30 text-2xl" />
                            {inpval.thumb_url && (
                                <div className="absolute top-0 left-0">
                                    <img src={inpval.thumb_url} alt="User Image" className="h-[100px] w-full md:w-52" />
                                </div>
                            )}
                        </div>

                        {/* Thumbnail URL Input */}
                        <div className="w-full ml-3">
                            <label className="block font-medium mb-1">Thumbnail URL *</label>
                            <input
                                type="url"
                                name="thumb_url"
                                placeholder="https://www.example.com"
                                className="w-full border-2 border-gray-300 p-2 focus:border-gray-400 rounded-sm"
                                value={inpval.thumb_url}
                                onChange={handlechange}
                            />
                            {/* Add Image Button */}
                            <div className={`${inpval.thumb_url ? 'hidden' : 'block'}`}>
                                <button className="mt-2 rounded-full font-semibold items-center flex gap-3">
                                    <span className="text-[#6221f8] font-extrabold rounded-full items-center justify-center">
                                        <IoMdAddCircleOutline className="h-[24px] w-[24px]" />
                                    </span> Add image
                                </button>
                            </div>
                            {/* Image Actions (Replace/Remove) */}
                            {inpval.thumb_url && (
                                <div className="mt-2 flex text-gray-500 gap-10 items-center">
                                    <button className="hover:underline text-[16px] flex items-center gap-1">
                                        <IoMdRefresh /> Replace
                                    </button>
                                    <button onClick={handleRemoveThumbnail} className="hover:underline text-[16px] flex items-center gap-1">
                                        <RiDeleteBin6Fill /> Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Sponsor Section */}
                {isButtonToggle.issponser && (
                    <div className="space-y-4 flex">
                        {/* Sponsor Preview */}
                        <div className="mt-4 w-1/4 h-[100px] mx-2 relative rounded border-2 border-gray-200 bg-gray-50 md:w-52 grid place-items-center">
                            <FaFileImage className="h-20 w-30 text-2xl" />
                            {inpval.sponsor && (
                                <div className="absolute top-0 left-0">
                                    <img src={inpval.sponsor} alt="User Image" className="h-[100px] w-full md:w-52" />
                                </div>
                            )}
                        </div>

                        {/* Sponsor URL Input */}
                        <div className="w-full ml-3">
                            <label className="block font-medium mb-1">Sponsor URL *</label>
                            <input
                                type="url"
                                name="sponsor"
                                placeholder="https://www.example.com"
                                className="w-full border-2 border-gray-300 p-2 focus:border-gray-400 rounded-sm"
                                value={inpval.sponsor}
                                onChange={handlechange}
                            />
                            {/* Add Image Button */}
                            <div className={`${inpval.sponsor ? 'hidden' : 'block'}`}>
                                <button className="mt-2 rounded-full font-semibold items-center flex gap-3">
                                    <span className="text-[#6221f8] font-extrabold rounded-full items-center justify-center">
                                        <IoMdAddCircleOutline className="h-[24px] w-[24px]" />
                                    </span> Add image
                                </button>
                            </div>
                            {/* Image Actions (Replace/Remove) */}
                            {inpval.sponsor && (
                                <div className="mt-2 flex text-gray-500 gap-10 items-center">
                                    <button className="hover:underline text-[16px] flex items-center gap-1">
                                        <IoMdRefresh /> Replace
                                    </button>
                                    <button onClick={handleRemoveThumbnail} className="hover:underline text-[16px] flex items-center gap-1">
                                        <RiDeleteBin6Fill /> Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className={`z-10 px-4 text-gray-600 border-t-2 pb-4 border-b-2 border-l-2 border-r-2 border-grey-200 pt-4 flex space-x-4`} >
                <button className='text-grey-400 hover:underline text-body font-normal justify-center flex items-center '>
                    <LuRefreshCw className="h-[23px] w-[23px]" />
                    <p className='ml-2 leading-none'> Change block type</p>
                </button>
                <div className={` ${isMenuopen ? '' : ''} relative`}>
                    <button
                        onClick={handleOpenMenu}
                        ref={buttonRef}
                        className="text-grey-400 hover:underline text-body font-normal justify-center  flex items-center  "
                    >
                        <BsThreeDotsVertical className="h-[24px] w-[24px]" />
                        <p> More</p>
                    </button>
                    {isMenuopen &&
                        <div className="absolute ">
                            <div className="z-1 ">
                                {isMenuopen && (
                                    <div ref={dropdownRef}
                                        className='w-52  left-30  absolute rounded bg-white border shadow-md text-xl border-gray-200 space-y-1'>
                                        <ul className="p-1">
                                            <li className="">
                                                <button
                                                    onClick={() => handleToggle("istitle")}
                                                    className="w-full text-gray-500 text-left px-4 py-2  hover:underline "
                                                >
                                                    <p className="flex items-center gap-1">
                                                        <FaGripLines className="" />
                                                        Title</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => handleToggle("isdescription")}
                                                    className="w-full text-left  text-gray-500 px-4 py-2  hover:underline">
                                                    <p className="flex items-center gap-1">
                                                        <IoReorderThreeSharp className="h-[24px] w-[24px]" />
                                                        Description
                                                    </p>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => handleToggle("isalttext")}
                                                    className="w-full text-gray-500 text-left px-4 py-2  hover:underline">
                                                    <p className="flex items-center gap-1">
                                                        <FaRegCircleUser />
                                                        ALT text
                                                    </p>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => handleToggle("isthumbnil")}
                                                    className="w-full text-gray-500 text-left px-4 py-2  hover:underline">
                                                    <p className="flex items-center gap-1">
                                                        <TbDeviceMobileExclamation />

                                                        Thumbnail
                                                    </p>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => handleToggle("issponser")}
                                                    className="w-full text-gray-500 text-left px-4 py-2  hover:underline">
                                                    <p className="flex items-center gap-1">
                                                        <TbDeviceMobileExclamation />
                                                        Sponsor
                                                    </p>
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => handleToggle("islink")}
                                                    className="w-full text-gray-500 text-left px-4 py-2  hover:underline">
                                                    <p className="flex items-center gap-1">
                                                        <FaLink />
                                                        Link
                                                    </p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                <button className="p-3 bg-blue-300" onClick={((e) => handlesubmit(e))}  > submit</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
