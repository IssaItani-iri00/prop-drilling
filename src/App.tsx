import './App.css'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { useTheme } from './context/ThemeContext'

function App() {
  const {isDarkMode} = useTheme()
  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <Header />
        <MainContent/>
    </div>
  )
}

export default App
