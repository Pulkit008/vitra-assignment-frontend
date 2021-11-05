import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const buttonAppBar = props => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ marginRight: '20px' }}>
              Vitra.ai
          </Typography>
          <a href="/" style={{color: 'white', textDecoration: 'none'}}>People</a>
          <a href="/friendlist" style={{color: 'white', textDecoration: 'none', marginLeft: '15px'}}>Friend List</a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default buttonAppBar;