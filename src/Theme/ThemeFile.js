import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#031422",
    },
    secondary: {
      main: "#0C223E",
    },
    neutral: {
      main: '#a9d6e5',
      contrastText: "#fff"
    },
    text: {
      primary: "#000000",
    }
  },
  typography: {
    "fontFamily": `KANEDA GOTHIC REGULAR, sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
});
export default Theme;