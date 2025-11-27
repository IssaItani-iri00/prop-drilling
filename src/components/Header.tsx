import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
    return (
        <header className="header">
            <h1> 🌗 Dark Mode</h1>
            <p className="subtitle"> Prop Drilling Example</p>
            <ThemeToggle />
        </header>
    )
}