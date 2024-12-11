"use client";
import { useSidebar } from "./sidebarcontex";

export default function MainContent({ children }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <main
      className={`p-4 ${isSidebarOpen ? "md:ml-20 ml-0" : "md:ml-60 ml-20"}  bg-[#dfdff5] transition-all duration-300 w-full `}
    >
      <div className="md:mt-4  mt-10">
        <div>{children}</div>
      </div>  
    </main>
  );
}
  