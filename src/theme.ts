import { red, pink, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: orange,
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  }
});

import { withStyles } from '@material-ui/core/styles';

export const GlobalCss = withStyles({
  '@global': {
    body: {
      ...theme.typography.body1
    },
  },
})(() => null);

export default theme;