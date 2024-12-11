"use client"
import { useAuth } from '@/app/utils/auth';
import { useRouter } from 'next/navigation';
import AuthContainer from '../components/authcontainer';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    // You can add your login logic here (API request, validation, etc.)
    login(); // Call the login function, which will update the state and redirect
  };

  return (
    <div>
      <AuthContainer />
    </div>
  );
}
