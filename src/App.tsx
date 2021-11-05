import theme from 'theme'
import { ThemeProvider, StyledEngineProvider } from '@mui/material'
import { useRoutes } from 'react-router';
import GlobalStyles from 'components/GlobalStyles';
import routes from 'routes'

function App() {
  const content = useRoutes(routes)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
