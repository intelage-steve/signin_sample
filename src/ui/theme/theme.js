import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#88d4ff',
      medium: '#58a1ff',
      dark: '#256ed8',
      extraDark: '#00228c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f8f8f8',
      medium: '#aeaeae',
      dark: '#616161',
      extraDark: '#3b3b3b',
      black: '#2C2D30',
      contrastText: '#fff',
    },
    status: {
      info: '#58a1ff',
      success: '#65a603',
      warning: '#ffce26',
      danger: '#eb0000',
    }
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontWeight: 300,
    body1: {
      fontWeight: 300,
    },
    floatingLabel: {
      fontWeight: 300,
      fontSize: 4,
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        fontWeight: 400,
      }
    }
  },
});

export default theme;
