import { createContext, useContext, useState, type JSX, type ReactNode } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = (): void => {
        setIsDarkMode(!isDarkMode)
      }

      return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
      )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}