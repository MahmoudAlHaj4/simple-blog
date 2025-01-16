import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../Services/authServices';



export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>();
  const navigate = useNavigate()

  const registerUser = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const { message } = await authService.Register(first_name, last_name, email, password);
      setSuccessMessage(message);
      navigate('/user')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading, error, successMessage };
};
