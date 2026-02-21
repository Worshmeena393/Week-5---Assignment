eact Login & Register Forms with Validation
Project Overview

This project implements Login and Register forms using React, Vite, and React Hook Form with Yup for schema validation. It demonstrates:

Form validation with Yup schemas

Reusable React components (InputField, FormCard, Button, PasswordRules)

Password rules enforcement (uppercase, lowercase, number, min length)

Dynamic error handling and success messages

Console logging of form data for testing

React Router navigation between Login and Register pages

Clean, responsive, and modern UI design

vite-project/
├─ src/
│  ├─ components/
│  │  ├─ Button.jsx
│  │  ├─ FormCard.jsx
│  │  ├─ InputField.jsx
│  │  ├─ PasswordRules.jsx
│  ├─ pages/
│  │  ├─ Login.jsx
│  │  ├─ Register.jsx
│  ├─ schemas/
│  │  ├─ loginSchema.js
│  │  ├─ registerSchema.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ App.css
├─ package.json
├─ package-lock.json
└─ README.md

Features
Login Form

Fields: Email, Password

Validates:

Required fields

Email format

Password length, number, uppercase, lowercase

Displays error messages below each field

Shows success message after submission

Logs data in the console

Register Form

Fields: Full Name, Email, Password, Confirm Password, Terms & Conditions

Validates:

Required fields

Full Name min 3 characters

Email format

Password rules (min 8, number, uppercase, lowercase)

Confirm Password must match

Terms & Conditions must be checked

Displays error messages and success message

Logs registration data in the console

Components
InputField.jsx

Reusable input component

Supports text, email, password

Show/Hide toggle for passwords

Displays field-specific errors

Button.jsx

Reusable button component

Fully styled with hover effects

FormCard.jsx

Reusable card wrapper for forms

Adds padding, shadow, and animation

PasswordRules.jsx

Shows password requirements

Reusable for multiple forms

Schemas
loginSchema.js
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Must be valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least 1 uppercase letter")
    .matches(/[a-z]/, "Must include at least 1 lowercase letter")
    .matches(/\d/, "Must include at least 1 number"),
});
registerSchema.js
import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required").min(3, "Full Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Must be valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must include at least 1 uppercase letter")
    .matches(/[a-z]/, "Must include at least 1 lowercase letter")
    .matches(/\d/, "Must include at least 1 number"),
  confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Passwords must match"),
  terms: yup.boolean().oneOf([true], "You must accept Terms & Conditions"),
});
Styling

Modern gradient background

Animated form cards

Responsive design

Hover effects on buttons

Error messages in red, success messages in green

Installation & Setup

Clone the repository:

git clone <your-repo-url>
cd vite-project

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:5173
Usage

Fill out Login or Register forms

Invalid data triggers error messages

Correct data triggers success messages

Check the browser console to see the submitted form data

Notes for Teacher / Reviewer

Components are reusable and separated

Form validation is fully handled via Yup + React Hook Form

Password rules include uppercase, lowercase, number, and minimum length

Login and Register pages are separated with React Router

Errors are logged to console for testing

Design is modern and responsive

Author

Worshmeena Qayoumi
