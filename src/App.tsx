import { FunctionComponent } from 'react'
import Header from './components/header/header.components'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = () => {
  return <Header />
}

export default App
