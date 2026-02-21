import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="app-wrapper">
      <div className="card">

        <div className="tabs">
          <button
            className={activeTab === "login" ? "tab active" : "tab"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "register" ? "tab active" : "tab"}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        <div className="form-area">
          {activeTab === "login" && <LoginForm />}
          {activeTab === "register" && <RegisterForm />}
        </div>

      </div>
    </div>
  );
}
