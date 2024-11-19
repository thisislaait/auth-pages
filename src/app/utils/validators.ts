// utils/validators.ts

interface ValidationErrors {
  [key: string]: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface SignupFormData extends LoginFormData {
  confirmPassword: string;
}

type FormData = LoginFormData | SignupFormData;

export const validateEmail = (email: string): string | null => {
  const emailPattern = /\S+@\S+\.\S+/;
  return !email || !emailPattern.test(email) ? 'Please enter a valid email address.' : null;
};

export const validatePassword = (password: string): string | null => {
  return !password || password.length < 6 ? 'Password must be at least 6 characters.' : null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  return password !== confirmPassword ? 'Passwords do not match.' : null;
};

// General input validation function, could be used for both login and signup
export const validateInput = (data: FormData, formType: 'login' | 'signup'): string | null => {
  const errors: ValidationErrors = {};

  // Validate Email
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  // Validate Password
  const passwordError = validatePassword(data.password);
  if (passwordError) errors.password = passwordError;

  // Signup-specific validation
  if (formType === 'signup') {
    const signupData = data as SignupFormData;
    const confirmPasswordError = validateConfirmPassword(signupData.password, signupData.confirmPassword);
    if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;
  }

  return Object.keys(errors).length > 0 ? Object.values(errors).join(' ') : null;
};
