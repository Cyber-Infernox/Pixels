import { useState } from "react";

import { useSignup } from "../../Hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
  };

  return (
    <div className="h-screen py-[150px] px-[500px]">
      <form className="flex flex-col h-full justify-center items-center">
        <h3>Signup</h3>

        <label>Username:</label>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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
