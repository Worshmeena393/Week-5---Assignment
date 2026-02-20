import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required").min(3, "Full Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Must include at least 1 number"),
  confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Passwords must match"),
  terms: yup.boolean().oneOf([true], "You must accept Terms & Conditions"),
});

export default function RegisterForm() {
  const [success, setSuccess] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    setSuccess("Registration Successful!");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Full Name" {...register("fullName")} />
        <p className="error">{errors.fullName?.message}</p>

        <input placeholder="Email" {...register("email")} />
        <p className="error">{errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p className="error">{errors.password?.message}</p>

        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
        <p className="error">{errors.confirmPassword?.message}</p>

        <label>
          <input type="checkbox" {...register("terms")} /> Accept Terms & Conditions
        </label>
        <p className="error">{errors.terms?.message}</p>

        <button type="submit">Register</button>
      </form>
      {success && <p className="success">{success}</p>}
    </div>
  );
}
