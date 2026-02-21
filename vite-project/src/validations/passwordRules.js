export const passwordRules = {
  minLength: 8,
  pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/
};

export const passwordMessage =
  "Password must be at least 8 characters, include uppercase, lowercase and number.";
