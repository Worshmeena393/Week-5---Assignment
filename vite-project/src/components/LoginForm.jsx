import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";

import FormInput from "./common/FormInput";
import SubmitButton from "./common/SubmitButton";

export default function LoginForm() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = data => {
    console.log("Login Data:", data);
    setSuccess("Login Successful!");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <FormInput
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <SubmitButton text="Login" />

      </form>

      {success && <p className="success">{success}</p>}
    </div>
  );
}
