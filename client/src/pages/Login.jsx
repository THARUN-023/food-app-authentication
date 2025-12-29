import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const response = await fetch(
      "http://localhost:8080/api/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const result = await response.text();

    if (result === "SUCCESS") {
      navigate("/food");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="background">
      <div className="form">
        <h1>🦀LOGIN🍨</h1>
        <input name="email" placeholder="email" onChange={handleChange} />
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;