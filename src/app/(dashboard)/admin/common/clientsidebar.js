// ClientSidebar.js
"use client";

import { useSidebar } from "@/components/SidebarContext";

export default function ClientSidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-60' : 'w-20'} bg-gray-800`}>
      <button onClick={toggleSidebar} className="text-white p-2">
        Toggle
      </button>
    </div>
  );
}
