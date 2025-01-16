
import { createContext, useState, useContext } from 'react';
import { useAuth } from '../Hooks/useLogin';


type AuthContextType = {
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: boolean;
  token: string | null;
};

const AuthContext = createContext<AuthContextType >({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, token, loginUser, logoutUser } = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
