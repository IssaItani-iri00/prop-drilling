import { Card } from "./Card";
import { useAuth } from "../context/AuthContext";
import LoginForm from "./LoginForm";

export const MainContent = () => {
    const { user } = useAuth();

    return (
        <main className="main=content">
            <h2>Welcome!</h2>
            {!user ? (
                <LoginForm />
            ) : (
                <Card />
            )}
        </main>
    )

}