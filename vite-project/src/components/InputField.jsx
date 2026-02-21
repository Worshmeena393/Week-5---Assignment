import { useState } from "react";

export default function InputField({ label, type = "text", error, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="input-group">
      {/* Label */}
      <label>{label}</label>

      {/* Input with optional password toggle */}
      <div className="password-wrapper" style={{ position: "relative" }}>
        <input
          type={isPassword && showPassword ? "text" : type}
          {...rest} // Spread react-hook-form register props here
          style={{
            width: "100%",
            padding: isPassword ? "10px 50px 10px 10px" : "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {/* Show/Hide Password Button */}
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#2563eb",
              fontSize: "0.9em",
              userSelect: "none",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="error" style={{ color: "#e63946", fontSize: "0.85em", marginTop: "4px" }}>{error}</p>}
    </div>
  );
}