"use client";

import { useSidebar } from "./sidebarcontex";




export default function MainContent({ children }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <main
      className={`p-4 ${isSidebarOpen ? "ml-20" : "ml-60"} bg-[#dfdff5] transition-all duration-300 w-full `}
    >
      <div className=" ">
        <div>{children}</div>
      </div>  
    </main>
  );
}
  