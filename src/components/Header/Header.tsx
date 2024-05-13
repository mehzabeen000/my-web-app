// Example Header component with Material-UI
// import React from 'react';
// import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  // const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ABC Store
        </Typography>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
            <li style={{ margin: '0 10px' }}>Home</li>
            <li style={{ margin: '0 10px' }}>Products</li>
            <li style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
              {/* <ShoppingCartIcon /> */}
              {/* <span>({cartItemsCount})</span> */}
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
