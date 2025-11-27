import { useTheme } from "../context/ThemeContext"

export const ThemeToggle = () => {
    const {isDarkMode, toggleDarkMode} = useTheme()

    return <button className="toggle-btn" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️ Light Mode' : '🌙Dark Mode'}
    </button>
}   