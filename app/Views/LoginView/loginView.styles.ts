import { Color, Font, Spacing } from '@/app/styles/global';
import { StyleSheet, ViewStyle } from 'react-native';
const cardBaseStyle = {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
} as ViewStyle;

export const loginViewStyle = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginTopContainer: {
    ...cardBaseStyle,
    flex: 7,
  },
  loginTextContainer: {
    width: '100%',
    height: '10%',
  },
  loginInputContainer: {
    width: '100%',
    height: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraOptionContainer: {
    flexDirection: 'row',
    width: '100%',

    justifyContent: 'center',
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  /* ------------------------- */

  loginBottomContainer: {
    ...cardBaseStyle,
    flex: 3,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.s10,
    backgroundColor: Color.lemonCream,
    borderRadius: Spacing.s10,
    width: '100%',
    height: 50,
    marginBottom: Spacing.s25,
  },
  textButton: {
    flex: 1,
    textAlign: 'center',
    color: Color.black,
    fontSize: Font.fs16,
    fontWeight: '600',
  },
});
