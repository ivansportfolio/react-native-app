import { Color, Font } from '@/app/styles/global';
import { StyleProp, TextStyle } from 'react-native';

export const snackbarStylePicker = (
  snackbarType: 'error' | 'success' | 'info'
) => {
  const colors = {
    error: { bg: Color.bitterSweetRed, text: Color.white, icon: Color.white },
    success: { bg: Color.yellowGreen, text: Color.white, icon: Color.white },
    info: { bg: Color.lemonCream, text: Color.black, icon: Color.black },
  }[snackbarType];

  const textStyle: StyleProp<TextStyle> = {
    color: colors.text,
    fontSize: Font.fs16,
    textAlign: 'center',
  };

  return {
    backgroundStyle: { backgroundColor: colors.bg },
    textStyle,
    iconColor: colors.icon,
  };
};
