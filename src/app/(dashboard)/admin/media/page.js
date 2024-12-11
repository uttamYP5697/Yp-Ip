"use client"
import { FaAngleRight, FaDoorClosed } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdFilterList, MdOutlinePushPin } from "react-icons/md";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io";
import { useSidebar } from "../common/sidebarcontex";

function page() {
  const arr = [
    {
      id: "1",
      name: "shwet",
      subname: "loremkshck",
      status: "Live",
      publishedDate: "27/12/2003",
      lastEditDate: "25/11/2024",
    },
    {
      id: "2",
      name: "uttam",
      subname: "loremkshck",
      status: "Live",
      publishedDate: "25/11/2024",
      lastEditDate: "27/12/2003",
    },
    {
      id: "3",
      name: "ram",
      subname: "loremkshck",
      status: "Live",
      publishedDate: "27/12/2003",
      lastEditDate: "25/11/2024",
    },
    {
      id: "3",
      name: "ram",
      subname: "loremkshck",
      status: "Live",
      publishedDate: "27/12/2003",
      lastEditDate: "25/11/2024",
    },
    {
      id: "4",
      name: "ram",
      subname: "loremkshck",
      status: "Live",
      publishedDate: "27/12/2003",
      lastEditDate: "25/11/2024",
    }

  ];
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = arr.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(arr.length / recordsPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const changeCPage = (page) => setCurrentPage(page);
  // pagination end

  ///
  const [isDropOpen, setIsDropOpen] = useState(null); // Track which dropdown is open
  const dropdownRef = useRef(null);
  const buttonRefs = useRef([]); // Track all button refs

  // Toggle dropdown on button click
  const handleToggle = (index) => {
    setIsDropOpen(prev => (prev === index ? null : index)); // Toggle between open and closed state
  };

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      // If clicked outside the dropdown and button
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        buttonRefs.current && !buttonRefs.current.some(ref => ref.contains(e.target))
      ) {
        setIsDropOpen(null); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="">
      <div className={`md:hidden ${isSidebarOpen ? "" : "-z-10" }  fixed right-[50%] bottom-10 translate-x-[50%] translate-y-[50%]`}>
            <button
              type="button"
              className="rounded-full bg-[#6221F8] hover:bg-[#A079FB] border-secondary-400 hover:bg-secondary-300 hover:border-secondary-300 focus:bg-secondary-500 focus:border-secondary-500 text-white text-body p-3 border-2 font-semibold flex items-center"
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                className="shrink-0 text-white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.77594C11.4229 6.77594 10.9552 7.24372 10.9552 7.82075L10.9552 10.9552L7.82073 10.9552C7.2437 10.9552 6.77592 11.423 6.77592 12C6.77592 12.577 7.2437 13.0448 7.82073 13.0448L10.9552 13.0448L10.9552 16.1793C10.9552 16.7563 11.423 17.2241 12 17.2241C12.577 17.2241 13.0448 16.7563 13.0448 16.1793L13.0448 13.0448L16.1792 13.0448C16.7563 13.0448 17.2241 12.5771 17.2241 12C17.2241 11.423 16.7563 10.9552 16.1792 10.9552L13.0448 10.9552L13.0448 7.82075C13.0448 7.24372 12.577 6.77594 12 6.77594Z"
                  fill="currentColor"
                />
              </svg>
            </button>
      </div>
      <div>
        {/* Drawer Toggle Button */}
        

        {/* Drawer Component */}
        <div
          className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          aria-labelledby="drawer-right-label"
        >
          <div className="flex flex-col ">
            {/* Drawer Header */}

            <div className="p-4 shrink-0 flex items-center">
              <div data-v-64e156c8="" className=" flex justify-between gap-5"><h3 data-v-64e156c8="" className="text-h3 font-bold text-primary-400">Customise your view</h3>
                <div>
                  <button
                    type="button"
                    onClick={toggleDrawer}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Close Button */}

            {/* Drawer Content */}
            {/* <div className="px-4 md:px-6 overflow-y-auto grow">
              
            </div> */}
            <div className="flex-grow overflow-y-auto no-scrollbar">

              <div className="flex flex-col pb-6">
                <p className="mb-2 text-body text-primary-400 font-bold">Recommended</p>

                {/* First Button (Disabled) */}
                <button
                  type="button"
                  disabled
                  className="mb-2 cursor-not-allowed opacity-38 p-1 flex flex-col rounded focus:outline-none text-primary-400 text-left"
                >
                  <input type="checkbox" disabled className="appearance-none" />
                  <div className="flex items-center">
                    <div className="bg-secondary-400 border-secondary-400 h-6 w-6 rounded border-2 grid place-items-center">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                    </div>
                    <p className="text-body leading-none ml-2">Name</p>
                  </div>
                </button>

                {/* Second Button */}
                <button
                  type="button"
                  className="mb-2 hover:bg-grey-200 focus:bg-grey-200 p-1 flex flex-col rounded focus:outline-none text-primary-400 text-left"
                >
                  <div className="flex items-center">
                    <div className="bg-secondary-400 border-secondary-400 h-6 w-6 rounded border-2 grid place-items-center">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                    </div>
                    <p className="text-body leading-none ml-2">Status</p>
                  </div>
                </button>

                {/* Third Button */}
                <button
                  type="button"
                  className="mb-2 hover:bg-grey-200 focus:bg-grey-200 p-1 flex flex-col rounded focus:outline-none text-primary-400 text-left"
                >
                  <input type="checkbox" className="appearance-none" />
                  <div className="flex items-center">
                    <div className="bg-secondary-400 border-secondary-400 h-6 w-6 rounded border-2 grid place-items-center">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                    </div>
                    <p className="text-body leading-none ml-2">Publish date</p>
                  </div>
                </button>

                {/* Fourth Button */}
                <button
                  type="button"
                  className="mb-2 hover:bg-grey-200 focus:bg-grey-200 p-1 flex flex-col rounded focus:outline-none text-primary-400 text-left"
                >
                  <input type="checkbox" className="appearance-none" />
                  <div className="flex items-center">
                    <div className="bg-secondary-400 border-secondary-400 h-6 w-6 rounded border-2 grid place-items-center">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                    </div>
                    <p className="text-body leading-none ml-2">Last edited</p>
                  </div>
                </button>

                <p className="mt-6 mb-2 text-body text-primary-400 font-bold">Other</p>

                {/* Fifth Button */}
                <button
                  type="button"
                  className="mb-2 hover:bg-grey-200 focus:bg-grey-200 p-1 flex flex-col rounded focus:outline-none text-primary-400 text-left"
                >
                  <input type="checkbox" className="appearance-none" />
                  <div className="flex items-center">
                    <div className="bg-secondary-400 border-secondary-400 h-6 w-6 rounded border-2 grid place-items-center">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                    </div>
                    <p className="text-body leading-none ml-2">Translations</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}

            <div className="px-4 pb-3 md:pb-6">
              <div className="flex justify-between">
                <h1>Cancle</h1>
                <h1>Apply</h1>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="pt-14">
        <h1 className="text-4xl font-semibold ">Articles</h1>
        <div className="flex items-center flex-wrap gap-2">
          {/* Breadcrumb */}
          <div className="flex items-center flex-wrap gap-1 mr-auto py-2">
            <div className="flex items-center gap-1">
              <p className="text-xl font-semibold items-center flex pe-3">Content Management</p>
              <svg
                height="12"
                width="12"
                viewBox="0 0 24 24"
                className="shrink-0 text-grey-300"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  fill="transparent"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xl font-semibold items-center flex pe-3">Content</p>
              <svg
                height="12"
                width="12"
                viewBox="0 0 24 24"
                className="shrink-0 text-grey-300"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  fill="transparent"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xl font-semibold items-center flex pe-3">Articles</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-2">
          <Link href="/admin/content" >
            <button
              type="button"
              className="text-white gap-2 bg-[#6221F8] hover:bg-[#A079FB]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-xl px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <CiCirclePlus className="text-2xl" /> New
            </button>
            </Link>
          </div>

          {/* Mobile Floating Button */}
          
        </div>
      </div>
      
      <div className="py-10">
        <div className="container">
          <div className="grid grid-rows-1 ">
            
            
            <div className="grid grid-cols-2 pb-10">
              <div>
                <Link
                  href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                  rel="stylesheet"
                />
                <form method="GET" action="">
                  <div className="bg-white border-2  shadow p-2  rounded-xl flex">
                    <span className="w-auto flex justify-end  items-center text-gray-500 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </span>
                    <input
                      name="episodequery"
                      id="title"
                      className="border-white outline-none border-0 w-full rounded-xl p-2"
                      type="text"
                      placeholder="Try 'How to find product market fit?'"
                    />

                  </div>
                </form>
              </div>
              <div className=" items-center gap-10 flex  justify-end">
                <button onClick={toggleDrawer}>
                  <FaRegEye className="text-blue-500 text-2xl h-12 w-12 p-3 hover:bg-gray-200 rounded-md   " />
                </button>
                <button>
                  <MdFilterList className="text-blue-500 text-2xl h-12 w-12 p-3 hover:bg-gray-200 rounded-md   " />
                </button>
              </div>
            </div>
            <div className={`overflow-y-auto no-scrollbar h-full ${records?.length-1 === isDropOpen ? "pb-[134px]":records?.length-2 === isDropOpen ? "pb-[50px]":""}`}>
              <div className="grid grid-cols-2 ">
                <nav className="">
                  <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                      <ul className="flex  flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                          <a
                            href="#"
                            className="text-gray-700 text-lg hover:underline"
                            aria-current="page"
                          >
                            Name
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <nav className="">
                  <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                      <ul className="flex gap-4 flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li className=" items-center flex">
                          <a
                            href="#"
                            className="text-gray-700 text-lg hover:underline"
                            aria-current="page"
                          >
                            Status
                          </a>
                        </li>
                        <li className="flex items-center  text-gray-400">
                          <button className="flex flex-col items-center justify-center">
                            <span className="material-icons text-lg pe-1">
                              <svg
                                height="16"
                                width="16"
                                viewBox="0 0 24 24"
                                className="shrink-0 text-grey-400"
                              >
                                <path
                                  opacity="0.38"
                                  d="M11.4899 1.22826C11.7215 0.923912 12.2785 0.923911 12.5101 1.22827L13.3059 0.622683L12.5101 1.22827L17.9187 8.33547C18.0228 8.47224 18.0205 8.60194 17.9491 8.72602C17.8716 8.86068 17.6949 9 17.4085 9H6.59147C6.30515 9 6.12835 8.86068 6.05089 8.72602C5.97951 8.60194 5.97724 8.47224 6.08133 8.33547L11.4899 1.22826Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="transparent"
                                ></path>
                                <path
                                  opacity="0.38"
                                  d="M12.5101 22.7717C12.2785 23.0761 11.7215 23.0761 11.4899 22.7717L10.6941 23.3773L11.4899 22.7717L6.08133 15.6645C5.97725 15.5278 5.97951 15.3981 6.05089 15.274C6.12836 15.1393 6.30515 15 6.59147 15L17.4085 15C17.6949 15 17.8716 15.1393 17.9491 15.274C18.0205 15.3981 18.0228 15.5278 17.9187 15.6645L12.5101 22.7717Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="transparent"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <span className="text-gray-700 text-lg font-medium ">
                            Publish date
                          </span>
                        </li>

                        <li className="flex items-center  text-gray-400">
                          <button className="flex flex-col items-center justify-center">
                            <span className="material-icons text-lg pe-1">
                              <svg
                                height="16"
                                width="16"
                                viewBox="0 0 24 24"
                                className="shrink-0 text-grey-400"
                              >
                                <path
                                  opacity="0.38"
                                  d="M11.4899 1.22826C11.7215 0.923912 12.2785 0.923911 12.5101 1.22827L13.3059 0.622683L12.5101 1.22827L17.9187 8.33547C18.0228 8.47224 18.0205 8.60194 17.9491 8.72602C17.8716 8.86068 17.6949 9 17.4085 9H6.59147C6.30515 9 6.12835 8.86068 6.05089 8.72602C5.97951 8.60194 5.97724 8.47224 6.08133 8.33547L11.4899 1.22826Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="transparent"
                                ></path>
                                <path
                                  opacity="0.38"
                                  d="M12.5101 22.7717C12.2785 23.0761 11.7215 23.0761 11.4899 22.7717L10.6941 23.3773L11.4899 22.7717L6.08133 15.6645C5.97725 15.5278 5.97951 15.3981 6.05089 15.274C6.12836 15.1393 6.30515 15 6.59147 15L17.4085 15C17.6949 15 17.8716 15.1393 17.9491 15.274C18.0205 15.3981 18.0228 15.5278 17.9187 15.6645L12.5101 22.7717Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="transparent"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <span className="text-gray-700 text-lg font-medium ">
                            Last edited
                          </span>
                        </li>

                      </ul>
                    </div>
                  </div>
                </nav>
              </div>


              {records.map((e, i) => (
                <div key={i} className={`grid grid-cols-2  `}>
                  <div className="flex flex-wrap w-full sm:mx-auto sm:mb-1 border-e-4 border-gray-200">
                    <div className="w-full">
                      <div className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] rounded px-4 py-2 h-full items-center">
                        <h1 className="text-lg">{e.name}</h1>
                        <p className="text-base text-gray-400">{e.subname}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full sm:mx-auto sm:mb-1">
                    <div className="">
                      <div className="w-full bg-white justify-between flex gap-10 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] rounded p-4 h-full items-center">
                        <span className="text-green-800 text-bold text-base me-2 px-2.5 py-0.5 rounded-md bg-green-200">
                          {e.status}
                        </span>
                        <div className="text-base ps-10">{e.publishedDate}</div>
                        <div className="text-base ps-6">{e.lastEditDate}</div>
                        <div className="ps-10">
                          <MdOutlinePushPin className="text-xl hover:bg-gray-300 rounded h-12 w-12 p-3" />
                        </div>
                        <div className="">
                          <div className="dropdown inline-block ">
                            <button
                              ref={(el) => buttonRefs.current[i] = el} // Store button ref in the array
                              onClick={() => handleToggle(i)}
                              className="hover:bg-gray-300 rounded h-12 w-12 p-3 text-blue-700 font-semibold inline-flex items-center"
                            >
                              <BsThreeDotsVertical />
                            </button>
                            {isDropOpen === i && (
                              <div
                                ref={dropdownRef}
                                className="right-0 bg-white rounded border border-grey-200 shadow-md z-[100] ignore-click cursor-default p-4 space-y-2 whitespace-nowrap "
                                style={{
                                  position: 'absolute',
                                  inset: '0px 0px auto auto',
                                  margin: '0px',
                                  transform: 'translate3d(0px, 43px, 0px)',
                                }}
                              >
                                <button className="text-grey-400 hover:underline text-body font-normal justify-center flex items-center">
                                  Copy ID
                                </button>
                                <button className="text-grey-400 hover:underline text-body font-normal justify-center flex items-center">
                                  Make a copy
                                </button>
                                <button className="text-grey-400 hover:underline text-body font-normal justify-center flex items-center">
                                  Publish
                                </button>
                                <button className="text-grey-400 hover:underline text-body font-normal justify-center flex items-center">
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <nav>
              <div>
                <nav>
                  <ul className="flex justify-center space-x-2 py-10 ">
                    <li>
                      <button onClick={prePage} disabled={currentPage === 1} className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Previous
                      </button>
                    </li>
                    {pageNumbers.map((num) => (
                      <li key={num}>
                        <button
                          onClick={() => changeCPage(num)}
                          className={`currentPage === num ? 'active' : '' rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"`}
                        >
                          {num}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button onClick={nextPage} disabled={currentPage === totalPages} className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default page;
