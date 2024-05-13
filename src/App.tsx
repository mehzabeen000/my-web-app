// import { useSelector } from 'react-redux'
// import { ThemeProvider, Theme } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from './components/Header/Header';

// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme { }
// }

// ==============================|| APP ||============================== //

const App = () => {

  return (
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider> */}
      <CssBaseline />
      <Header />
      {/* </ThemeProvider> */}
    </StyledEngineProvider>
  );
};

export default App;
