'use client';

import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Menu, 
  MenuItem, 
  Box,
  Typography 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const getPageTitle = () => {
    switch(pathname) {
      case '/':
        return 'Inicio';
      case '/checklist':
        return 'Checklist';
      case '/template':
        return 'Template';
      default:
        return 'Alquiler';
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTo = (path) => {
    router.push(path);
    handleClose();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color="primary"
          aria-label="home"
          onClick={() => navigateTo('/')}
          edge="start"
        >
          <HomeIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
          {getPageTitle()}
        </Typography>

        <IconButton
          color="primary"
          aria-label="menu"
          onClick={handleMenu}
          edge="end"
        >
          <MenuIcon />
        </IconButton>
        
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => navigateTo('/')}>Inicio</MenuItem>
          <MenuItem onClick={() => navigateTo('/checklist')}>Checklist</MenuItem>
          <MenuItem onClick={() => navigateTo('/template')}>Template</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
} 