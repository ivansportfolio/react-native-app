export interface SnackbarContent {
  showSnackbar: (message: string, snackbarType: SnackbarType) => void;
}

export interface SnackbarConfig {
  message: string;
  snackbarType: SnackbarType;
  open: boolean;
}

export const snackbarConfigInit: SnackbarConfig = {
  message: '',
  open: false,
  snackbarType: 'info',
};

export type SnackbarType = 'success' | 'error' | 'info';
