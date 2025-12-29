import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Registered successfully");
  };

  return (
    <div className="background">
      <div className="form">
        <h1 className="if">🍕NEW REGISTER🍔</h1>

        <input name="username" placeholder="username" onChange={handleChange} />
        <input name="email" placeholder="email" onChange={handleChange} />
        <input name="password" type="password" placeholder="password" onChange={handleChange} />

        <button onClick={handleSubmit}>REGISTER</button>

        {/* 👇 THIS IS THE IMPORTANT PART */}
        <button onClick={() => navigate("/login")}>LOGIN</button>
      </div>
    </div>
  );
}

export default Register;