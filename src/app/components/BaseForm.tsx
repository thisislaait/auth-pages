import React, { useState } from 'react';
import { SignUpData, LoginData, ApiResponse } from '../types/auth';
import { mockSignUp, mockLogin } from '../utils/api';
import { validateEmail, validatePassword, validateConfirmPassword } from '../utils/validators';
import { handleApiError } from '../utils/errorHandler';
import { TextLink } from '../components/Button'
import { Button } from '../components/Button'; 

interface BaseFormProps {
  formType: 'signup' | 'login';
}

const BaseForm: React.FC<BaseFormProps> = ({ formType }) => {
  // Initialize formData with relevant fields
  const [formData, setFormData] = useState<SignUpData | LoginData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '', // For "Work" or "Business"
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (formType === 'signup') {
      const signupData = formData as SignUpData; // Type narrowing for signup
      const confirmPasswordError = validateConfirmPassword(signupData.password, signupData.confirmPassword);
      if (emailError || passwordError || confirmPasswordError) {
        return `${emailError} ${passwordError} ${confirmPasswordError}`.trim();
      }
    } else if (emailError || passwordError) {
      return `${emailError} ${passwordError}`.trim();
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      let response: ApiResponse;
      if (formType === 'signup') {
        response = await mockSignUp(formData as SignUpData);
      } else {
        response = await mockLogin(formData as LoginData);
      }
      console.log(response.message); // Handle success response
      setLoading(false);
    } catch (err) {
      setError(handleApiError(err));
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      {/* First Name */}
      {formType === 'signup' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={(formData as SignUpData).firstName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      )}

      {/* Last Name */}
      {formType === 'signup' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={(formData as SignUpData).lastName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      )}

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Confirm Password (only for signup) */}
      {formType === 'signup' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={(formData as SignUpData).confirmPassword}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      )}

      {/* User Type Select (only for signup) */}
      {formType === 'signup' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">User Type</label>
          <select
            name="userType"
            value={(formData as SignUpData).userType}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select User Type</option>
            <option value="work">Work</option>
            <option value="business">Business</option>
          </select>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {loading ? 'Submitting...' : formType === 'signup' ? 'Sign Up' : 'Log In'}
      </Button>

      {/* Links for switching between forms */}
      <div className="mt-4 text-center">
        {formType === 'signup' ? (
          <TextLink href="/login">Already have an account? Login here</TextLink>
        ) : (
          <TextLink href="/signup">Don&apos;t have an account? Sign Up</TextLink>
        )}
      </div>
    </form>
  );
};

export default BaseForm;


