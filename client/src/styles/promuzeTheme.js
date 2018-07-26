import { createMuiTheme } from "@material-ui/core";


const promuzeTheme = createMuiTheme({
    palette: {
        primary: {
          light: '#5c2a5c',
          main: '#300032',
          dark: '#12000d',
          contrastText: '#e6e6e8',
        },
        secondary: {
          light: '#fd665f',
          main: '#c43235',
          dark: '#8c000f',
          contrastText: '#e6e6e8',
        },
      },
});

export default promuzeTheme;