import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    // Empty Validation
    if(email === "" || password === ""){
      alert("All fields are required");
      return;
    }

    // Email Validation
    if(!email.includes("@") || !email.includes(".")){
      alert("Enter valid email");
      return;
    }

    // Password Length Validation
    if(password.length < 6){
      alert("Password must contain minimum 6 characters");
      return;
    }

    // Successful Login
    alert("Login Successful");

    navigate("/home");
  };

  return (

    <div className="center-container">

      <div className="glass-card login-card">

        <h1>Welcome Back</h1>

        <p>Login to your music world</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={login}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;