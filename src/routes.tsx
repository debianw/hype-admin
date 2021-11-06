import { Navigate } from "react-router";
import DashboardLayout from "components/layouts/dashboard/DashboardLayout";
import MainLayout from "components/layouts/main/MainLayout";
import DashboardScreen from "screens/dashboard/DashboardScreen";
import SignInScreen from "screens/signin/SignInScreen";
import UsersScreen from "screens/users/UsersScreen";
import PostsScreen from 'screens/posts/PostsScreen'
import VideosScreen from 'screens/videos/VideosScreen'
import AccountScreen from 'screens/account/AccountScreen'
import SettingsScreen from 'screens/settings/SettingsScreen'
import NotFound from "screens/NotFoundScreen";

const routes = [
  {
    path: 'admin',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <DashboardScreen /> },
      { path: 'users', element: <UsersScreen /> },
      { path: 'posts', element: <PostsScreen /> },
      { path: 'videos', element: <VideosScreen /> },
      { path: 'account', element: <AccountScreen /> },
      { path: 'settings', element: <SettingsScreen /> },
      { path: '*', element: <Navigate to="/404" />}
    ]
  },
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      { path: '', element: <SignInScreen /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" />}
    ]
  }
]

export default routes