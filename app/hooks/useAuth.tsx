/* Hooks */
import { useAuthContext } from '@/app/context/authContext';
import { projectAuth } from '@/firebase/firebaseSettings';
import { User } from 'firebase/auth';

export const useAuth = () => {
  const { userLoginHandler, userLogout } = useAuthContext();

  const login = async (email: string, password: string) => {
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      userLoginHandler(res.user as User);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      await projectAuth.signOut();
      userLogout();
    } catch (error) {
      console.log(error);
    }
  };

  /* TODO: register handler */

  return { login, logout };
};
