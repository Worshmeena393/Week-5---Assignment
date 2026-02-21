// src/components/PasswordRules.jsx
import React from "react";

const PasswordRules = ({ password }) => {
  const rules = [
    { test: /.{8,}/, label: "At least 8 characters" },
    { test: /[A-Z]/, label: "At least one uppercase letter" },
    { test: /[a-z]/, label: "At least one lowercase letter" },
    { test: /\d/, label: "At least one number" },
  ];

  return (
    <div className="password-rules">
      <p>Password must contain:</p>
      <ul>
        {rules.map((rule, index) => {
          const isValid = rule.test.test(password || "");
          return (
            <li
              key={index}
              style={{
                color: isValid ? "green" : "red",
                fontWeight: isValid ? "bold" : "normal",
              }}
            >
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordRules;