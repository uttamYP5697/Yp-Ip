"use client";
import "../common/sidebar.scss";
import "../../../globals.css";
import { MdContentCopy, MdPermMedia } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/utils/auth";
import { useSidebar } from "./sidebarcontex";

export default function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    const [isMenuVisible, setMenuVisible] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const { logout } = useAuth();

    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        if (pathname === "/admin") {
            router.push("/admin");
        }
    }, [pathname, router]);

    const toggleMenu = () => setMenuVisible((prevState) => !prevState);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`/admin/${tabName}`, undefined, { shallow: true });
    };

    const isActive = (route) => pathname === route;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenuVisible(false); // Close the dropdown if click is outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`transition-all duration-300 fixed top-0 left-0 z-50 h-full bg-white flex flex-col ${isSidebarOpen ? "w-20" : "w-60"
                }`}
        >
            {/* Header */}
            <div className="h-20 px-4 shrink-0 flex items-center">
                <button
                    onClick={() => toggleSidebar(!isSidebarOpen)}
                    className="rounded-full border-2 border-grey-200 h-10 w-10 flex items-center justify-center grow-0 shrink-0"
                >
                    <svg
                        className="text-gray-400"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                    >
                        <line
                            x1="3"
                            y1="7"
                            x2="21"
                            y2="7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        ></line>
                        <line
                            x1="3"
                            y1="12"
                            x2="21"
                            y2="12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        ></line>
                        <line
                            x1="3"
                            y1="17"
                            x2="21"
                            y2="17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        ></line>
                    </svg>
                </button>
                <span className={`ml-4 font-semibold ${isSidebarOpen ? "hidden" : ""}`}>
                    
                    <Link href="/admin" className="flex items-center">
                        <img
                            src="https://media-cdn.incrowdsports.com/298b6ccb-4447-4fb9-a167-89fa1b87074e.png"
                            alt="Yellow Panther"
                            className="h-10 rounded-full"
                        />
                        YP Admin
                    </Link>
                </span>
            </div>
            <hr className="border border-grey-200 mx-4" />

            {/* Scrollable Middle Section */}
            <div className="flex-grow overflow-y-auto no-scrollbar">
                <ul className="w-full mt-12 side-menu top">
                    <li className={`${isActive('/admin/content') ? 'active' : ''} `}>
                        <Link href="/admin/content" className="w-full hover:bg-[#dfdff5] h-full bg-red flex justify-start rounded-[48px] text-xl">
                            <span className={`flex justify-center items-center min-w-[60px]  ${isSidebarOpen && isActive('/admin/content') ? "border border-blue-600 rounded-[48px] bg-white z-20" : "rounded-[48px] z-20"}`}> <MdContentCopy /></span>
                            <span className={`flex justify-center items-center min-w-[60px] ${isSidebarOpen ? "hidden" : "block"}`}>Content</span>
                        </Link>
                    </li>
                    <li className={`${isActive('/admin/media') ? 'active' : ''} `}>
                        <Link href="/admin/media" className="w-full h-full hover:bg-[#dfdff5] bg-red flex justify-start rounded-[48px] text-xl">
                            <span className={`flex justify-center items-center min-w-[60px]  ${isSidebarOpen && isActive('/admin/media') ? "border border-blue-600 rounded-[48px] bg-white z-20" : "rounded-[48px]"}`}> <MdPermMedia /></span>
                            <span className={`flex justify-center items-center min-w-[60px] ${isSidebarOpen ? "hidden" : "block"}`}>Media</span>
                        </Link>
                    </li>
                </ul>

            </div>

            {/* Footer */}
            <div className="px-4 pb-3 md:pb-6">
                <div className="relative">
                    {/* Dropdown menu */}
                    {isMenuVisible && (
                        <div ref={dropdownRef} className={`w-52 ${isSidebarOpen ? 'left-[63px] bottom-2' : 'left-0 bottom-12'} pointer-left absolute rounded bg-white border-2 border-grey-200 shadow p-1 space-y-1 transition-all duration-300 ease-out ${isMenuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                            <button
                                onClick={() => alert('My Account clicked')}
                                className="w-full flex items-center hover:bg-grey-100 focus:bg-grey-100 focus:outline-none h-10 p-2 z-1 rounded"
                            >
                                <svg height="16" width="16" viewBox="0 0 24 24" className="shrink-0 text-secondary-400">
                                    <circle cx="12" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="2" fill="transparent"></circle>
                                    <path
                                        d="M21 17.5C21 18.4856 20.2608 19.5935 18.5891 20.5129C16.9535 21.4125 14.6258 22 12 22C9.37422 22 7.04651 21.4125 5.41085 20.5129C3.73919 19.5935 3 18.4856 3 17.5C3 16.5144 3.73919 15.4065 5.41085 14.4871C7.04651 13.5875 9.37422 13 12 13C14.6258 13 16.9535 13.5875 18.5891 14.4871C20.2608 15.4065 21 16.5144 21 17.5Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="transparent"
                                    ></path>
                                </svg>
                                <p className="text-caption text-primary-400 leading-none ml-2">My account</p>
                            </button>
                            <button
                                onClick={logout}
                                className="w-full flex items-center hover:bg-grey-100 focus:bg-grey-100 focus:outline-none h-10 p-2 z-1 rounded"
                            >
                                <svg height="16" width="16" viewBox="0 0 24 24" className="shrink-0 text-red-400">
                                    <path
                                        d="M16 5C18.9634 6.46714 21 9.51364 21 13.034C21 17.9858 16.9706 22 12 22C7.02944 22 3 17.9858 3 13.034C3 9.51364 5.03656 6.46714 8 5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        fill="transparent"
                                    ></path>
                                    <line x1="12" y1="3" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
                                </svg>
                                <p className="text-caption text-primary-400 leading-none ml-2">Log out</p>
                            </button>
                        </div>
                    )}
                    {/* Profile button */}
                    <button
                        ref={buttonRef}
                        type="button"
                        name="current-client"
                        onClick={toggleMenu} // Toggle menu visibility
                        className="p-2 border-transparent hover:bg-grey-100 hover:border-grey-100 focus:bg-grey-100 focus:border-grey-100 rounded border w-full focus:outline-none flex space-x-2 items-center"
                    >
                        <img
                            src="https://media-cdn.incrowdsports.com/298b6ccb-4447-4fb9-a167-89fa1b87074e.png"
                            alt="Yellow Panther"
                            className="h-8 w-8 rounded-full shadow shrink-0 grow-0"
                        />
                        <p className="text-caption text-primary-400 truncate">Yellow Panther</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
