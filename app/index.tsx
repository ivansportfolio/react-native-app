import { AuthContextProvider } from '@/context/authContext';

import React from 'react';

export default function Index() {
  return (
    <AuthContextProvider>
      <div>TEST</div>
    </AuthContextProvider>
  );
}
