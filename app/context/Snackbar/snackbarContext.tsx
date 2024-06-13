import { createContext, useContext, useState } from 'react';
import { Snackbar, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { snackbarStylePicker } from './snackbarContext.helper';
import {
  SnackbarConfig,
  SnackbarContent,
  SnackbarType,
  snackbarConfigInit,
} from '../../types/snackbarContext.types';

const SnackbarContext = createContext<SnackbarContent | null>(null);

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error(
      'useSnackbarContext must be used within SnackbarContextProvider'
    );
  }

  return context;
};

export const SnackbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackbarConfig, setSnackbarConfig] =
    useState<SnackbarConfig>(snackbarConfigInit);
  const snackbarDynamicStyle = snackbarStylePicker(snackbarConfig.snackbarType);

  const showSnackbar = (message: string, snackbarType: SnackbarType) => {
    setSnackbarConfig({ message, snackbarType, open: true });
  };

  const handleClose = () => {
    setSnackbarConfig({ ...snackbarConfig, open: false });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        visible={snackbarConfig.open}
        onDismiss={handleClose}
        wrapperStyle={snackbarStyle.wrapper}
        style={snackbarDynamicStyle.backgroundStyle}
        duration={7000}
        action={{
          icon: () => (
            <MaterialCommunityIcons
              name={'close'}
              color={snackbarDynamicStyle.iconColor}
              size={30}
            />
          ),
          label: '',
          onPress: () => {
            handleClose();
          },
        }}
      >
        <Text style={snackbarDynamicStyle.textStyle}>
          {snackbarConfig.message}
        </Text>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const snackbarStyle = StyleSheet.create({
  textContainer: { flexDirection: 'row', alignItems: 'center' },
  wrapper: {
    top: 110,
  },
});
