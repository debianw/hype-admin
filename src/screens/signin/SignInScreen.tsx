import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material';
import useAuth from 'hooks/useAuth'

type FormValues = {
  email: string,
  password: string
}

const Login = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [isSigninIn, setIsSigningIn] = useState<boolean>(false)
  const { signIn } = useAuth()
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setError(null)
      setIsSigningIn(true)
      await signIn!(formValues.email, formValues.password)

      setIsSigningIn(false)
      navigate('/admin/places')
    } catch(error: any) {
      setError(error.message)
      setIsSigningIn(false)
    }
  }

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          {error && (
            <Alert severity="error">{error}</Alert>
          )}
          <form onSubmit={onSubmit}>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                color="textPrimary"
                variant="h2"
              >
                Sign in
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              value={formValues.email}
              onChange={onValueChange}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              value={formValues.password}
              onChange={onValueChange}
            />
            <Box sx={{ py: 2 }}>
              <Button
                disabled={isSigninIn}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {isSigninIn ? 'SignIn in, please wait ...' : 'Sign in now'}
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
