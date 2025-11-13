import { useContext, useState } from "react";
import UserContext from "../routing/UserContext";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const { Login } = useContext(UserContext);
    const [email, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Both fields are required")
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Invalid email")
            return;
        }

        setError("");

        const success = Login(email, password);
        if (success) {
            navigate("/home")
        } else {
            setError("Invalid credentials");
        }

    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#f2f2f2",
        paddingTop: "40px",
    };

    const boxStyle = {
        backgroundColor: "#fff",
        padding: "60px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "250px",
        marginleft: "20px"
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxSizing: "border-box",
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#4CAF50",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
    };

    const errorStyle = {
        backgroundColor: "red",

    }

    return (
        <div style={formStyle}>
            <form onSubmit={handleSubmit} style={boxStyle}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setUserEmail(e.target.value)}
                    style={inputStyle}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setUserPassword(e.target.value)}
                    style={inputStyle}
                    required
                />
                {error && <div style={errorStyle}>{error}</div>}
                <button type="submit" style={buttonStyle}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;