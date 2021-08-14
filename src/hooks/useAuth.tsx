import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const session = useContext(AuthContext);

  return session;
}
