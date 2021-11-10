import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from '@mui/material';
import {
  // BarChart as BarChartIcon,
  // Settings as SettingsIcon,
  // User as UserIcon,
  Users as UsersIcon,
  AlertTriangle as AlertIcon, 
  MapPin as PlaceIcon,
} from 'react-feather';
import NavItem from 'components/atoms/NavItem';
import useAuth from 'hooks/useAuth';

const items = [
  // {
  //   href: '/admin/dashboard',
  //   icon: BarChartIcon,
  //   title: 'Dashboard'
  // },
  {
    href: '/admin/places',
    icon: PlaceIcon,
    title: 'Places'
  },
  {
    href: '/admin/users',
    icon: UsersIcon,
    title: 'Users'
  },
  {
    href: '/admin/posts/flagged',
    icon: AlertIcon,
    title: 'Reports'
  },
  // {
  //   href: '/admin/account',
  //   icon: UserIcon,
  //   title: 'Account'
  // },
  // {
  //   href: '/admin/settings',
  //   icon: SettingsIcon,
  //   title: 'Settings'
  // }
];

type DashboardSidebarProps = {
  onMobileClose: () => void
  openMobile: boolean
}

const DashboardSidebar = ({ onMobileClose, openMobile = false }: DashboardSidebarProps) => {
  const { cognitoUser: user } = useAuth()

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src="/static/images/logo.png"
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/admin/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user?.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          HypeNight Administrator
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default DashboardSidebar;