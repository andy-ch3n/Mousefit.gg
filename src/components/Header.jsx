import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import LoginIcon from '@mui/icons-material/Login';

const useStyles = makeStyles({
  logo: {
    maxWidth: 75,
    paddingRight: '10px',
  },
  customizeToolbar: {
    minHeight: 85,
  }
});

function Header() {

  const classes = useStyles();

  return (
    <Box sx={{ flex: '0 0 auto' }}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.customizeToolbar}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src="MouseFitLogo.png" alt="logo" className={classes.logo} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Mousefit.gg
          </Typography>
          <Button color="inherit">Login</Button>
          <LoginIcon />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
