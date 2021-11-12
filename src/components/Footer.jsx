// import React from "react";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";



// export default function Footer() {
//   return (
    // <Container
    //         maxWidth="md"
    //         component="footer"
    //         sx={{
    //           borderTop: (theme) => `1px solid ${theme.palette.divider}`,
    //           mt: "auto",
    //           py: [3],
    //           minWidth: "100%",
    //           backgroundColor: "#012a4a"

    //         }}
    //       >
    //         <Copyright sx={{ mt: 5 }} />
    //       </Container>
//   );
// }


import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Grid';


function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#FFFFFF"
      align="center"
    >
      {"LiquidHackathon II. Mousefit.gg - Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const useStyles = makeStyles({
  logo: {
    maxWidth: 75,
    paddingRight: '10px',
  },
  customizeToolbar: {
    minHeight: 85,
  }
});

function Footer() {


  const classes = useStyles();

  return (
    <Box sx={{ position: 'fixed', width: '100%', bottom: 0, left: 0 }}>
      <AppBar position="static" color="secondary" textAlign="center">
          {/* <img src="MouseFitLogo.png" alt="logo" className={classes.logo} />
          <div className="footerClass">
          <Typography
            variant="body2"
            color="#FFFFFF"
            align="center"
            textAlign="center"
            sx={{flexGrow: 1}}
          >
            {"LiquidHackathon II. Mousefit.gg - Copyright © "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
          </div> */}
            <Container
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              mt: "auto",
              py: [3],
              minWidth: "100%",
              backgroundColor: "#012a4a"

            }}
          >
            <Copyright sx={{ mt: 5 }} />
          </Container>
      </AppBar>
    </Box>
  )
}

export default Footer