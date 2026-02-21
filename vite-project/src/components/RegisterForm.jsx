import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/registerSchema";

import FormInput from "./common/FormInput";
import SubmitButton from "./common/SubmitButton";

export default function RegisterForm() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = data => {
    console.log("Register Data:", data);
    setSuccess("Registration Successful!");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <FormInput
          label="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName?.message}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <div className="checkbox-group">
          <input type="checkbox" {...register("terms")} />
          <label>Accept Terms & Conditions</label>
        </div>
        {errors.terms && <p className="error">{errors.terms.message}</p>}

        <SubmitButton text="Register" />

      </form>

      {success && <p className="success">{success}</p>}
    </div>
  );
}
