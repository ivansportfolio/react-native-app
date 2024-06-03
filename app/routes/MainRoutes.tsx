import { NativeRouter, Navigate, Route, Routes } from 'react-router-native';
import WelcomeView from '../Views/WelcomeView/WelcomeView';
import LoginView from '../Views/LoginView/LoginView';
import { useAuthContext } from '../context/authContext';
import HomeRoutes from './HomeRoutes';

const MainRoutes = () => {
  const { user } = useAuthContext();

  return (
    <NativeRouter>
      <Routes>
        <Route
          path="/home/*"
          element={user ? <HomeRoutes /> : <Navigate to="/login-page" />}
        />
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <WelcomeView />}
        />
        <Route
          path="/login-page"
          element={user ? <Navigate to="/home" /> : <LoginView />}
        />
        <Route path="*" element={<Navigate to={user ? '/home' : '/'} />} />
      </Routes>
    </NativeRouter>
  );
};

export default MainRoutes;
