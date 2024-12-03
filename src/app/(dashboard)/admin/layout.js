"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/app/utils/auth';

import "../../../app/globals.css"
import MainContent from './common/maincontent';
import Sidebar from './common/sidebar';
import { SidebarProvider } from './common/sidebarcontex';

export default function DashboardLayout({ children }) {
  const { isLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push('/login');  // Redirect to login page if not logged in
    }
  }, [isLogin, router]);

  // If logged in, render the dashboard layout and content
  if (!isLogin) {
    return <div>Loading...</div>;  // Optionally show a loading spinner while checking login status
  }

  return (
    <AuthProvider>
      <div className="dashboard-layout">
        <SidebarProvider>
          <div className=" flex bg-[#dfdff5] min-h-screen duration-200">
            <div className="bg-[#F9F9F9]">
              <Sidebar />
            </div>
            <MainContent>{children}</MainContent>
          </div>
        </SidebarProvider>
      </div>
    </AuthProvider>
  );
}

