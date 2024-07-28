import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

const NavButton = styled(Button)({
  color: 'white',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.1)',
    transition: 'transform 0.3s',
  },
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div" className="navbar-title">
            Events+
          </Typography>
          <Box>
            <StyledLink to="/">
              <NavButton>Home</NavButton>
            </StyledLink>
            <StyledLink to="/list">
              <NavButton>Details</NavButton>
            </StyledLink>
            <StyledLink to="/user">
              <NavButton>User</NavButton>
            </StyledLink>
            <StyledLink to="/admin">
              <NavButton>Admin</NavButton>
            </StyledLink>
            <StyledLink to="/login">
              <NavButton>Log In</NavButton>
            </StyledLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;