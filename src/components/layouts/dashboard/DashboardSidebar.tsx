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
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon,
  Camera as CameraIcon
} from 'react-feather';
import NavItem from 'components/atoms/NavItem';

const user = {
  avatar: 'https://ca.slack-edge.com/T02FEPBTM-U02GG75D2AH-54404fbd0ad0-512',
  jobTitle: 'Senior Developer',
  name: 'Walter Chacon'
};

const items = [
  {
    href: '/admin',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/admin/users',
    icon: UsersIcon,
    title: 'Users'
  },
  {
    href: '/admin/posts',
    icon: ShoppingBagIcon,
    title: 'Posts'
  },
  {
    href: '/admin/videos',
    icon: CameraIcon,
    title: 'Videos'
  },
  {
    href: '/admin/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/admin/settings',
    icon: SettingsIcon,
    title: 'Settings'
  }
];

type DashboardSidebarProps = {
  onMobileClose: () => void
  openMobile: boolean
}

const DashboardSidebar = ({ onMobileClose, openMobile = false }: DashboardSidebarProps) => {

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
          src={user.avatar}
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
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
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