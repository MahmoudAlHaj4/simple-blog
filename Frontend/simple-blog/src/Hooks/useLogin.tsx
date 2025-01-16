import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../Services/authServices';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const navigate = useNavigate();

  const loginUser = async (email: string, password: string) => {
    try {
      const { token } = await authService.login(email, password);
      setIsLoggedIn(true);
      setToken(token);
      localStorage.setItem('token', token);
    navigate('/user') 
    } catch (error) {
      console.error('Login failed:', error);
     
    }
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return { isLoggedIn, token, loginUser, logoutUser };
};
