import { Box, Container, Typography } from '@mui/material'

const PostDetailsScreen = () => {
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
          <Typography variant="h4">Post details screen ...</Typography>
        </Container>
      </Box>
    </>
  )
}

export default PostDetailsScreen 