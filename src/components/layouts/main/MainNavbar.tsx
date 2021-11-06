import { Link as RouterLink } from 'react-router-dom';
import { AppBar, AppBarProps, Toolbar } from '@mui/material';
import Logo from 'components/atoms/Logo';

const MainNavbar = (props: AppBarProps) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;