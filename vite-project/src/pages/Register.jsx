import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/registerSchema";
import FormCard from "../components/FormCard";
import InputField from "../components/InputField";
import PasswordRules from "../components/PasswordRules";
import Button from "../components/Button";

export default function Register() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("===== REGISTER DATA =====");
    console.log("Full Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Password:", data.password);
    console.log("Confirm Password:", data.confirmPassword);
    console.log("Terms Accepted:", data.terms);
    console.log("=========================");

    setSuccess("Registration Successful!");
    reset();
  };

  const onError = (errors) => {
    console.log("===== REGISTER ERRORS =====");
    console.log(errors);
    console.log("===========================");
  };

  const passwordValue = watch("password");

  return (
    <FormCard>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputField
          label="Full Name"
          {...register("fullName")}
          error={errors.fullName?.message}
        />

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

        <PasswordRules password={passwordValue} />

        <InputField
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <div className="checkbox-group">
          <input type="checkbox" {...register("terms")} />
          <label>I accept Terms & Conditions</label>
        </div>
        <p className="error">{errors.terms?.message}</p>

        <Button type="submit" text="Register" />

        {success && <p className="success">{success}</p>}
      </form>
    </FormCard>
  );
}