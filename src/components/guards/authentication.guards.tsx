import { FunctionComponent, ReactNode, useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header.components'
import Loading from '../loading/loading.component'

interface AuthenticationProps {
  children: ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />

        <Loading message='Ops! Parece que você não está logado. Vamos te levar rapidinho para o login 😉' />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
