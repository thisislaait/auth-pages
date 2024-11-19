// types/auth.ts
export interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface ApiResponse {
    message: string;
    status?: number;
  }
  