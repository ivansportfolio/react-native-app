import { createContext, useContext, useEffect, useReducer } from 'react';
import { projectAuth } from '@/firebase/firebaseSettings';
import { User } from 'firebase/auth';

interface AuthState {
  user: User | null;
  authIsReady: boolean;
}

interface AuthContextType extends AuthState {
  userLoginHandler: (userData: User) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const authContextReducer = (
  state: AuthState,
  action: { type: 'LOGIN' | 'LOGOUT' | 'AUTH_IS_READY'; payload: User | null }
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within AuthContextProvider');
  }

  return context;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(authContextReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user as User });
    });

    return () => unsub();
  }, []);

  const userLoginHandler = (userData: User) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };

  /* TODO: add logout and register handler */

  return (
    <AuthContext.Provider value={{ ...state, userLoginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
