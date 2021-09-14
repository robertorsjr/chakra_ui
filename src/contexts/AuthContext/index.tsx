import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { signInPromise } from '../../services/auth';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SESSION_KEY } from '../../configs/env';

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
  const [token, setToken, clearToken] = useLocalStorage(SESSION_KEY);

  const recoverUserInformation = useCallback(async () => {
    return signInPromise();
  }, []);

  const signOut = useCallback(() => {
    // delete api.defaults.headers.Authorization
    setUser(null);
    clearToken();
  }, [clearToken]);

  useEffect(() => {
    async function loadStorageData() {
      if (token) {
        // api.defaults.headers[Authorization] = `Bearer ${token}`
        const data = await recoverUserInformation();
        setUser(data);
        setLoading(false);
      } else {
        setLoading(false);
        signOut();
      }
    }
    loadStorageData();
  }, [recoverUserInformation, token, signOut]);

  const signIn = useCallback(async () => {
    const response = await signInPromise();
    setUser(response);
    setToken(response.token);
    // api.defaults.headers[Authorization] = `Bearer ${response.token}`
  }, [setToken]);

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
