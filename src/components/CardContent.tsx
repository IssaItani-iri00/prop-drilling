import { useTheme } from "../context/ThemeContext";

export const CardContent = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className="card-content">
            <p>
                Current Theme: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong>
            </p>
        </div>
    )
}