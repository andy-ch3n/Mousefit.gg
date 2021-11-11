import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#012a4a",
    },
    secondary: {
      main: "#468faf",
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
    "fontFamily": `"Orbitron", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
});
export default Theme;