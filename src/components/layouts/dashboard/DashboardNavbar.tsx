import { useState, MouseEventHandler } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  AppBarProps,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined'
import InputIcon from '@mui/icons-material/Input'
import Logo from 'components/atoms/Logo';

interface IDashboardNavbar extends AppBarProps {
  onMobileNavOpen: MouseEventHandler<HTMLButtonElement> 
}

const DashboardNavbar = ({ onMobileNavOpen, ...rest }: IDashboardNavbar) => {
  const navigate = useNavigate();
  const [notifications] = useState([]);

  const onLogout = () => {
    navigate('/')
  }

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/admin">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={onLogout} color="inherit" size="large">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
