import { useState } from "react";
import { useLogin } from "../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div>
      <form action="">
        <h3>Login</h3>

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={isLoading} onClick={handleLogin}>
          Login
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
