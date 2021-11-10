import { BrowserRouter } from 'react-router-dom';
import theme from 'theme'
import { ThemeProvider, StyledEngineProvider } from '@mui/material'
import GlobalStyles from 'components/GlobalStyles';
import Amplify from 'aws-amplify'
import awsExports from 'aws-exports'
import { AuthProvider } from 'hooks/useAuth'

Amplify.configure({
  ...awsExports,
  // DataStore: {
  //   authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  // }
})

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Providers