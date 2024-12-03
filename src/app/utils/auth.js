"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false); 
  const [isMounted, setIsMounted] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLogin(true); 
    }
  }, []);

  const login = (data) => {
    console.log("🚀 ~ login ~ data:", data)
    if(data.email === "ypdevloper@gmail.com" && data.password === "123456"){
      console.log("Login successful");
    
    setIsLogin(true);
    localStorage.setItem('authToken', 'true');
    router.push('/admin'); 
  }
  else{
    localStorage.setItem("authreturn","wrong credentials");
}
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem('authToken');
    localStorage.clear();
    router.push('/login'); 
  };

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
