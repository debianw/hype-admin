import { Box, Container, Typography } from '@mui/material'

const VideosScreen = () => {
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
          <Typography variant="h4">Videos screen ...</Typography>
        </Container>
      </Box>
    </>
  )
}

export default VideosScreen