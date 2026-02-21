import * as yup from "yup";
import { passwordRules } from "./passwordRules";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),

  password: passwordRules
});
