import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const [success, setSuccess] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    setSuccess("Login Successful!");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        <p className="error">{errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p className="error">{errors.password?.message}</p>

        <button type="submit">Login</button>
      </form>
      {success && <p className="success">{success}</p>}
    </div>
  );
}
