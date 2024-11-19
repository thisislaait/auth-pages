import { ApiResponse } from '../types/auth'; // Reuse types from auth

export const handleApiError = (error: ApiResponse | unknown): string => {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return (error as ApiResponse).message || 'An unexpected error occurred.';
  }
  return 'An unexpected error occurred.';
};

  