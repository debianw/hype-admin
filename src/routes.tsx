import { Navigate } from "react-router";
import DashboardLayout from "components/layouts/dashboard/DashboardLayout";
import MainLayout from "components/layouts/main/MainLayout";
import DashboardScreen from "screens/dashboard/DashboardScreen";
import SignInScreen from "screens/signin/SignInScreen";
import InProgressScreen from 'screens/common/InProgressScreen'
import NotFound from "screens/NotFoundScreen";

const routes = [
  {
    path: 'admin',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <DashboardScreen /> },
      { path: 'users', element: <InProgressScreen /> },
      { path: 'posts', element: <InProgressScreen /> },
      { path: 'videos', element: <InProgressScreen /> },
      { path: 'account', element: <InProgressScreen /> },
      { path: 'settings', element: <InProgressScreen /> },
      { path: '*', element: <Navigate to="/404" />}
    ]
  },
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      { path: '/', element: <SignInScreen /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" />}
    ]
  }
]

export default routes