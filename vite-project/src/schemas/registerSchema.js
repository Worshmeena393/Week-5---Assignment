import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must include at least 1 number"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms & Conditions"),
});