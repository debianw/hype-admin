import { useEffect, useState, useCallback, createContext, useContext } from 'react'
import Auth from '@aws-amplify/auth'

const STORAGE_KEY = 'hypenight-auth'

type AuthContextProps = {
  isAuthed: boolean
  signIn?: (email: string, password: string) => Promise<any | null>
  signOut?: () => void
}

export const AuthContext = createContext<AuthContextProps>(null!)
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthed, setIsAuthed] = useState<boolean>(JSON.parse(localStorage.getItem(STORAGE_KEY) || 'false'))

  // -- Get current authenticated user
  const getCurrentUser = useCallback(async () => {
    return Auth.currentAuthenticatedUser()
  }, [])

  // -- persist auth result
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(isAuthed))
  }, [isAuthed])

  useEffect(() => {
    (async () => {
      try {
        console.log('getting user')
        await getCurrentUser()
        console.log('getting user done!')
        setIsAuthed(true)
      } catch (error) {
        setIsAuthed(false)
      }
    })()
  }, [getCurrentUser])

  // -- SignIn
  const signIn = useCallback(async (email: string, password: string): Promise<any> => {
    try {
      const response = await Auth.signIn(email, password)
      setIsAuthed(true)
      return response
    } catch (error) {
      setIsAuthed(false)
      throw error
    }
  }, [])

  // -- SignOut
  const signOut = useCallback(async () => {
    try {
      await Auth.signOut()
      setIsAuthed(false)
    } catch (error) {
      console.log('Error signing out => ', error)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}


const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(`AuthContext should be inside <Providers />`)
  }

  return context
}

export default useAuth