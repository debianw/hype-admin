import { Box, Container, Typography } from '@mui/material'

const AccountScreen = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Typography variant="h4">Settings screen ...</Typography>
        </Container>
      </Box>
    </>
  )
}

export default AccountScreen