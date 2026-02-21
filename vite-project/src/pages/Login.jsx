import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { loginSchema } from "../schemas/loginSchema";
import FormCard from "../components/FormCard";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Login() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("===== LOGIN DATA =====");
    console.log("Email:", data.email);
    console.log("Password:", data.password);
    console.log("======================");

    setSuccess("Login Successful!");
    reset();
  };

  const onError = (errors) => {
    console.log("===== LOGIN ERRORS =====");
    console.log(errors);
    console.log("========================");
  };

  return (
    <FormCard>
      <h2 className="form-title">Login</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Correct usage: spread register directly */}
        <InputField
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <InputField
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Button type="submit" text="Login" />

        {success && <p className="success">{success}</p>}

        {/* Link to Register page */}
        <p style={{ marginTop: "18px", textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#00c6ff", fontWeight: "600" }}>
            Register
          </Link>
        </p>
      </form>
    </FormCard>
  );
}