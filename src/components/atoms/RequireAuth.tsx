import useAuth from "hooks/useAuth"
import  { Navigate, useLocation } from "react-router"

const RequireAuth = ({ children }: { children: React.ReactNode}) => {
  const { isAuthed } = useAuth()
  const location = useLocation()

  if (!isAuthed) {
    return <Navigate to="/" state={{ from: location }} /> 
  }

  return (
    <>
      {children}
    </>
  )
}

export default RequireAuth