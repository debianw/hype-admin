import { useEffect, useState, useCallback, createContext, useContext, useMemo } from 'react'
import Auth from '@aws-amplify/auth'
import { CognitoUser } from 'types'

const STORAGE_KEY = 'hypenight-auth'

type AuthContextProps = {
  isAuthed: boolean
  signIn: (email: string, password: string) => Promise<any | null>
  signOut: () => void
  cognitoUser: CognitoUser | null 
}

export const AuthContext = createContext<AuthContextProps>(null!)
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cognitoUser, setCognitoUser] = useState<CognitoUser | null>(null)
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
        const response = await getCurrentUser()
        setIsAuthed(true)
        setCognitoUser({
          name: response.attributes?.name,
          email: response.attributes?.email, 
        })
      } catch (error) {
        setIsAuthed(false)
        setCognitoUser(null)
      }
    })()
  }, [getCurrentUser])

  // -- SignIn
  const signIn = useCallback(async (email: string, password: string): Promise<any> => {
    try {
      const response = await Auth.signIn(email, password)
      setCognitoUser({
        name: response.attributes?.name,
        email: response.attributes?.email, 
      })
      setIsAuthed(true)
      return response
    } catch (error) {
      setIsAuthed(false)
      setCognitoUser(null)
      throw error
    }
  }, [])

  // -- SignOut
  const signOut = useCallback(async () => {
    try {
      await Auth.signOut()
      setIsAuthed(false)
      setCognitoUser(null)
    } catch (error) {
      console.log('Error signing out => ', error)
      throw error
    }
  }, [])

  const contextValue = useMemo(() => {
    return {
      isAuthed,
      signIn,
      signOut,
      cognitoUser,
    }
  }, [cognitoUser, isAuthed, signIn, signOut])

  return (
    <AuthContext.Provider value={contextValue}>
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