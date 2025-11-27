import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";

export const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <h1> 🌗 Dark Mode</h1>
            <p className="subtitle"> Prop Drilling Example</p>
            {user && (
                <div className="user-info">
                    <span>Welcome, {user.name}!</span>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
            <ThemeToggle />
        </header>
    )
}