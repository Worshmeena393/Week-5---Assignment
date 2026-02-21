import { useState } from "react";

export default function InputField({
  label,
  name,
  type = "text",
  register,
  error
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="input-group">
      <label>{label}</label>

      <div className="password-wrapper">
        <input
          type={isPassword && showPassword ? "text" : type}
          {...register(name)}
        />

        {isPassword && (
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}