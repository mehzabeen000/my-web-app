// import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import LandingPage from './components/Home/LandingPage';
import ProductsScreen from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/Cart';

const theme = createTheme();
// ==============================|| APP ||============================== //

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

