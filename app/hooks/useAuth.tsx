import { useAuthContext } from '@/app/context/authContext';
import { projectAuth } from '@/firebase/firebaseSettings';
import { User } from 'firebase/auth';
import { useSnackbarContext } from '../context/Snackbar/snackbarContext';

export const useAuth = () => {
  const { userLoginHandler, userLogout } = useAuthContext();
  const { showSnackbar } = useSnackbarContext();

  const login = async (email: string, password: string) => {
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      const userData = res.user as User;
      userLoginHandler(userData);
      const emailLocalPartMatch = userData.email?.match(/^[^@]+/);
      const emailLocalPart = emailLocalPartMatch ? emailLocalPartMatch[0] : '';
      showSnackbar(`Welcome ${emailLocalPart}`, 'success');
    } catch (error: any) {
      showSnackbar(error.message as string, 'error');
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
