import { Box, Container, Typography } from '@mui/material'

const DashboardScreen = () => {
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
          <Typography variant="h4">Main Dashboard</Typography>
        </Container>
      </Box>
    </>
  )
}

export default DashboardScreen