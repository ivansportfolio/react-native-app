import React from 'react';
import { useFonts } from 'expo-font';
import { AuthContextProvider } from '@/app/context/authContext';
import { Color, Spacing } from './styles/global';
import { View, StyleSheet, ViewStyle } from 'react-native';
import {
  configureFonts,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';

import MainRoutes from './routes/MainRoutes';
import { SnackbarContextProvider } from './context/Snackbar/snackbarContext';

const baseVariants = configureFonts({
  config: { fontFamily: 'Poppins-Regular' },
});

const customVariants = {
  bold: { fontFamily: 'Poppins-Bold' },
  extraBold: { fontFamily: 'Poppins-ExtraBold' },
  medium: { fontFamily: 'Poppins-Medium' },
};

const fonts = configureFonts({
  config: { ...baseVariants, ...customVariants },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fee590',
    onSurface: Color.black,
  },
  fonts,
};

const Index = () => {
  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!loaded) return null;

  return (
    <PaperProvider theme={theme}>
      <SnackbarContextProvider>
        <AuthContextProvider>
          <View style={indexStyle.mainContainer}>
            <View style={indexStyle.card}>
              <MainRoutes />
            </View>
          </View>
        </AuthContextProvider>
      </SnackbarContextProvider>
    </PaperProvider>
  );
};

export default Index;

const indexStyle = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 375,
  },
  card: {
    width: '100%',
    height: '100%',
    paddingHorizontal: Spacing.s40,
    paddingVertical: Spacing.s10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
