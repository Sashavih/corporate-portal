import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';
import { Link as RouterLink } from 'react-router-dom';

export default function User() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [pressed, setPressed] = useState(false);

  const open = Boolean(anchorEl);
  const { logout } = useAuth0();
  const handleChange = ()=>{
    logout({ logoutParams: { returnTo: window.location.origin } })
    setAnchorEl(null);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setPressed(true);
    console.log('it is work babe')
    setAnchorEl(null);
  };
  if (isLoading) {
    return <span class="loader"></span>;
  }
  return (
    isAuthenticated &&(
    <div>
      <Button
        sx={{ '&:hover': {
          backgroundColor: 'inherit',
        }, }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <BadgeAvatar/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem component={RouterLink} to="/profile" onClick={handleClose}>Профиль</MenuItem>
        <MenuItem onClick={handleChange}>Выйти</MenuItem>
      </Menu>
    </div>
  ));
      
}