import { useState } from "react";
import { useSignup } from "../Hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div>
      <form>
        <h3>Signup</h3>

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

        <button disabled={isLoading} onClick={handleSignup}>
          Signup
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
