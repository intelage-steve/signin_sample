import { createMuiTheme } from '@material-ui/core/styles';

const COLORS = {
  primary: {
    extraLight: '#F1FFFF',
    light: '#88d4ff',
    medium: '#58a1ff',
    main: '#256ed8',
    dark: '#256ed8',
    extraDark: '#00228c',
    contrastText: '#fff',
  },
  secondary: {
    light: '#61ffe0',
    main: '#68CFBF',
    dark: '#009d7f',
    contrastText: '#fff',
  },
  background: {
    light: '#f8f8f8',
    medium: '#aeaeae',
    dark: '#616161',
    extraDark: '#3b3b3b',
    white: '#ffffff',
    contrastText: '#fff',
  },
  status: {
    info: '#88d4ff',
    success: '#65a603',
    warning: '#ffce26',
    danger: '#eb0000',
  },
};

const theme = createMuiTheme({
  palette: COLORS,
  typography: {
    htmlFontSize: 10,
    fontWeight: 300,
    headline: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    floatingLabelStyle: {
      fontSize: '1rem',
      fontWeight: 300,
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: 10,
        fontWeight: 300,
        color: 'white',
      },
      raisedPrimary: {
        fontSize: 14,
      },
      raisedSecondary: {
        fontSize: 14,
      },
      flatPrimary: {
        color: COLORS.primary.main,
      },
      flatSecondary: {
        color: COLORS.secondary.main,
      },
    },
    MuiListItem: {
      gutter: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});

export default theme;
