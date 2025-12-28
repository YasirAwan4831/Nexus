import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  CircleDollarSign,
  Building2,
  AlertCircle,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { UserRole } from '../../types';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserRole>('entrepreneur');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  //  Password strength logic (UI only)
  const getPasswordStrength = () => {
    if (password.length === 0) return '';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  const strength = getPasswordStrength();

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await register(name, email, password, role);
      navigate(
        role === 'entrepreneur'
          ? '/dashboard/entrepreneur'
          : '/dashboard/investor'
      );
    } catch (err) {
      setError((err as Error).message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-primary-600 rounded-md flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join Business Nexus to connect with partners
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-error-50 border border-error-500 text-error-700 px-4 py-3 rounded-md flex items-start">
              <AlertCircle size={18} className="mr-2 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                I am registering as a
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={`py-3 px-4 border rounded-md flex items-center justify-center transition-colors ${
                    role === 'entrepreneur'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setRole('entrepreneur')}
                >
                  <Building2 size={18} className="mr-2" />
                  Entrepreneur
                </button>

                <button
                  type="button"
                  className={`py-3 px-4 border rounded-md flex items-center justify-center transition-colors ${
                    role === 'investor'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setRole('investor')}
                >
                  <CircleDollarSign size={18} className="mr-2" />
                  Investor
                </button>
              </div>
            </div>

            <Input
              label="Full name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              startAdornment={<User size={18} />}
            />

            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              startAdornment={<Mail size={18} />}
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              startAdornment={<Lock size={18} />}
            />

            {/*  Password strength meter */}
            {strength && (
              <div>
                <div className="h-2 w-full rounded bg-gray-200 overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      strength === 'Weak'
                        ? 'w-1/3 bg-error-500'
                        : strength === 'Medium'
                        ? 'w-2/3 bg-yellow-500'
                        : 'w-full bg-success-500'
                    }`}
                  />
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Password strength:{' '}
                  <span className="font-medium">{strength}</span>
                </p>
              </div>
            )}

            <Input
              label="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              fullWidth
              startAdornment={<Lock size={18} />}
            />

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-600 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
                I agree to the Terms & Privacy Policy
              </label>
            </div>

            <Button type="submit" fullWidth isLoading={isLoading}>
              Create account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
