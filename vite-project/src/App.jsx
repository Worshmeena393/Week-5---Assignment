import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import "./App.css";

export default function App() {
  const [tab, setTab] = useState("login");

  return (
    <div className="app-container">
      <div className="tab-buttons">
        <button
          className={tab === "login" ? "active" : ""}
          onClick={() => setTab("login")}
        >
          Login
        </button>
        <button
          className={tab === "register" ? "active" : ""}
          onClick={() => setTab("register")}
        >
          Register
        </button>
      </div>

      <div className="tab-content">
        {tab === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
