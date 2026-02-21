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
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("===== REGISTER DATA =====");
    console.log(data);
    console.log("=========================");

    setSuccess("Registration Successful!");
  };

  const onError = (errors) => {
    console.log("===== REGISTER ERRORS =====");
    console.log(errors);
    console.log("===========================");
  };

  return (
    <FormCard>
      <h2 className="form-title">Create Account</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>

        <InputField
          label="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName?.message}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
        />

        <PasswordRules />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <div className="checkbox-group">
          <input type="checkbox" {...register("terms")} />
          <label>I accept Terms & Conditions</label>
        </div>

        {errors.terms && <p className="error">{errors.terms.message}</p>}

        <Button type="submit">Register</Button>

        {success && <p className="success">{success}</p>}
      </form>
    </FormCard>
  );
}