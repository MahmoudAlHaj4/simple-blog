import { createContext, useState, useContext, ReactNode } from 'react';
import { useAuthContext } from './authContext';
import { useCategories } from '../Hooks/useCategories';


type Category = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  
  type CategoryContextType = {
    addCategory: (name: string) => void;
    getCategories: () => void;
    categories: Category[]; 
  };

const CategoryContext = createContext<CategoryContextType>({} as CategoryContextType);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const { categories, getCategories, addCategory } = useCategories();

  return (
    <CategoryContext.Provider value={{ categories, getCategories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};
