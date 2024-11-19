// utils/api.ts
import { SignUpData, LoginData, ApiResponse } from '../types/auth';

export const mockSignUp = async (data: SignUpData): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'test@example.com') {
        reject({ message: 'Email already exists!' });
      } else {
        resolve({ message: 'Sign up successful!' });
      }
    }, 1000);
  });
};

export const mockLogin = async (data: LoginData): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'test@example.com' && data.password === 'password123') {
        resolve({ message: 'Login successful!' });
      } else {
        reject({ message: 'Invalid credentials!' });
      }
    }, 1000);
  });
};

  