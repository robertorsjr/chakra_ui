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
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const session = await localStorage.getItem('session');
      if (session) {
        setUser(JSON.parse(session));
        // api.defaults.headers[Authorization] = `Bearer ${session.token}`
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await signInPromise();
    setUser(response);
    // api.defaults.headers[Authorization] = `Bearer ${response.token}`
    localStorage.setItem('session', JSON.stringify(response));
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('session');
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
