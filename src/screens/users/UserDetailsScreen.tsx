import { Box, Container, Typography } from '@mui/material'

const UsersDetailsScreen = () => {
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
          <Typography variant="h4">User details screen ...</Typography>
        </Container>
      </Box>
    </>
  )
}

export default UsersDetailsScreen