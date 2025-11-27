import {useState} from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!username.trim())
            return;
        login(username);
        setUsername("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;