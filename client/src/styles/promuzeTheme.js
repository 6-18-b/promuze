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
      typography:{
        fontFamily: " 'Lato', sans-serif;",
        display1:{
          fontFamily: "  'Playfair Display', serif; ",
        },
        display2:{
          fontFamily: "  'Playfair Display', serif; ",
        },
        display3:{
          fontFamily: "  'Playfair Display', serif; ",
        },
        display4:{
          fontFamily: "  'Playfair Display', serif; ",
        },
        headline:{
          fontFamily: "  'Playfair Display', serif; ",
        },
        title:{
          fontFamily: "  'Playfair Display', serif; ",
        },
        subheading:{
          fontFamily: "  'Playfair Display', serif; ",
        },
        body1:{
          fontFamily: " 'Lato', sans-serif;",
        },
        body2:{
          fontFamily: " 'Lato', sans-serif;",
        }
      },
});

export default promuzeTheme;

//font-family: 'Lato', sans-serif;
//font-family: 'Playfair Display', serif;