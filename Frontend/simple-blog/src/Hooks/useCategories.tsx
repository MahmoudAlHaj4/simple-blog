import { useState, useEffect } from 'react';
import { useAuthContext } from '../Context/authContext';
import { CategoryService } from '../Services/categoryServices';

type Category = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export const useCategories = () => {
  const { token } = useAuthContext();
  const [categories, setCategories] = useState<Category[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      if (!token) {
        setError('You must be logged in first');
        setIsLoading(false);
        return;
      }
      const response = await CategoryService.getCategories();
     
      setCategories(response.categories || []);
    } catch (err) {
      setError('Failed to fetch categories');
    } finally {
      setIsLoading(false);
    }
  };

  const addCategory = async (name: string) => {
    try {
      if (!token) {
        setError('You must be logged in to add a category');
        return;
      }
      await CategoryService.addCategory(name);
      getCategories();
    } catch (err) {
      setError('Failed to add category');
    }
  };

  useEffect(() => {
    if (token) {
      getCategories();
    }
  }, [token]);

  return { categories, isLoading, error, getCategories, addCategory };
};
