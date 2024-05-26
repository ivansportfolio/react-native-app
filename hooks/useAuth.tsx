/* Hooks */
import { useAuthContext } from '@/context/authContext';
import { projectAuth } from '@/firebase/firebaseSettings';
import { User } from 'firebase/auth';

export const useAuth = () => {
  const { userLoginHandler } = useAuthContext();

  const login = async (email: string, password: string) => {
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      userLoginHandler(res.user as User);
    } catch (error) {
      console.log(error);
    }
  };

  /* TODO: add logout and register handler */

  return { login };
};
