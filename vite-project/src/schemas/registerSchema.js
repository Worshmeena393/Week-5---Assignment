import * as yup from "yup";
import { passwordRules } from "./passwordRules";

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),

  password: passwordRules,

  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms & Conditions")
});
