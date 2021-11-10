import { Navigate } from "react-router";
import RequireAuth from "components/atoms/RequireAuth";
import DashboardLayout from "components/layouts/dashboard/DashboardLayout";
import MainLayout from "components/layouts/main/MainLayout";
import DashboardScreen from "screens/dashboard/DashboardScreen";
import SignInScreen from "screens/signin/SignInScreen";
import UsersScreen from "screens/users/UsersScreen";
import UserDetailsScreen from "screens/users/UserDetailsScreen";
import FlaggedPostsScreen from 'screens/posts/FlaggedPostsScreen';
import PostDetailsScreen from 'screens/posts/PostDetailsScreen';
import PlacesScreen from 'screens/places/PlacesScreen'
import PlaceDetailsScreen from "screens/places/PlaceDetailsScreen";
import AccountScreen from 'screens/account/AccountScreen'
import SettingsScreen from 'screens/settings/SettingsScreen'
import NotFound from "screens/NotFoundScreen";

const routes = [
  {
    path: 'admin',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <RequireAuth><DashboardScreen /></RequireAuth> },
      { path: 'places', element: <RequireAuth><PlacesScreen /></RequireAuth> },
      { path: 'places/:id', element: <RequireAuth><PlaceDetailsScreen /></RequireAuth> },
      { path: 'users', element: <RequireAuth><UsersScreen /></RequireAuth> },
      { path: 'users/:id', element: <RequireAuth><UserDetailsScreen /></RequireAuth> },
      { path: 'posts/flagged', element: <RequireAuth><FlaggedPostsScreen /></RequireAuth> },
      { path: 'posts/:id', element: <RequireAuth><PostDetailsScreen /></RequireAuth> },
      { path: 'account', element: <RequireAuth><AccountScreen /></RequireAuth> },
      { path: 'settings', element: <RequireAuth><SettingsScreen /></RequireAuth> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <SignInScreen /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
]

export default routes