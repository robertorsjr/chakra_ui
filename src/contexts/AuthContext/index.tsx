import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { signInPromise } from '../../services/auth';

type AuthContextProviderProps = {
  children: ReactNode;
};

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  token: string;
};

type AuthContextType = {
  user: User | null;
  signed: boolean;
  signIn(): Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      const parsedData = JSON.parse(session);
      setUser(parsedData);
    }
  }, []);

  async function signIn() {
    const response = await signInPromise();
    setUser(response);
    localStorage.setItem('session', JSON.stringify(response));
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('session');
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
