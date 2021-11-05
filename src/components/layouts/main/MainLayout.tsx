import { Box } from "@mui/system"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <Box sx={{
      backgroundColor: 'grey',
      padding: '16px',
      border: '2px solid orange',
    }}>
      <Outlet />
    </Box>
  )
}

export default MainLayout