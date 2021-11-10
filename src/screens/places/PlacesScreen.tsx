import { Box, Container, Typography } from '@mui/material'

const PlacesScreen = () => {
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
          <Typography variant="h4">Places screen ...</Typography>
        </Container>
      </Box>
    </>
  )
}

export default PlacesScreen