import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000}}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Event Management
            </Typography>
            <div className='NavBarButtons'>
              <Link to={'/'}><button>Home</button></Link>
              <Link to={'/user'}><button>User</button></Link>
              <Link to={'/admin'}><button>Admin</button></Link>
              <Link to={'/login'}><button>Log In</button></Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
