import { AuthContextProvider } from '@/context/authContext';
import React from 'react';
import LoginView from './Views/LoginView';

export default function Index() {
  return (
    <AuthContextProvider>
      <LoginView />
    </AuthContextProvider>
  );
}
