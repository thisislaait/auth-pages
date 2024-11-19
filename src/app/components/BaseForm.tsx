// components/BaseForm.tsx
import React, { useState } from 'react';
import { SignUpData, LoginData, ApiResponse } from '../types/auth';
import { mockSignUp, mockLogin } from '../utils/api';
import { validateEmail, validatePassword, validateConfirmPassword } from '../utils/validators';
import { handleApiError } from '../utils/errorHandler';

interface BaseFormProps {
  formType: 'signup' | 'login';
}

const BaseForm: React.FC<BaseFormProps> = ({ formType }) => {
  // Initialize formData with the relevant fields, including confirmPassword for 'signup'
  const [formData, setFormData] = useState<SignUpData | LoginData>({
    email: '',
    password: '',
    confirmPassword: '',  // Only needed for signup
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    // Type narrowing to handle confirmPassword field only for 'signup' form
    if (formType === 'signup') {
      const signupData = formData as SignUpData; // Typecast to SignUpData for formType === 'signup'
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      {formType === 'signup' && (
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={(formData as SignUpData).confirmPassword}  // Explicitly cast to SignUpData
            onChange={handleInputChange}
            required
          />
        </div>
      )}

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : formType === 'signup' ? 'Sign Up' : 'Log In'}
      </button>
    </form>
  );
};

export default BaseForm;

