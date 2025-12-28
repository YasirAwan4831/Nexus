import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  CircleDollarSign,
  Building2,
  LogIn,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { UserRole } from '../../types';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('entrepreneur');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  //  2FA state
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      //  Step 1 → credentials correct → show OTP UI
      if (!showOTP) {
        await login(email, password, role);
        setShowOTP(true);
        setIsLoading(false);
        return;
      }

      //  Step 2 → OTP mock check
      if (otp.length !== 6) {
        setError('Invalid OTP code');
        setIsLoading(false);
        return;
      }

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

  // Demo credentials
  const fillDemoCredentials = (userRole: UserRole) => {
    if (userRole === 'entrepreneur') {
      setEmail('sarah@techwave.io');
      setPassword('password123');
    } else {
      setEmail('michael@vcinnovate.com');
      setPassword('password123');
    }
    setRole(userRole);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-primary-600 rounded-md flex items-center justify-center">
            <ShieldCheck className="text-white" />
          </div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Business Nexus
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Secure access with role-based login
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
            {!showOTP && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I am a
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className={`py-3 px-4 border rounded-md flex items-center justify-center ${
                      role === 'entrepreneur'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setRole('entrepreneur')}
                  >
                    <Building2 size={18} className="mr-2" />
                    Entrepreneur
                  </button>

                  <button
                    type="button"
                    className={`py-3 px-4 border rounded-md flex items-center justify-center ${
                      role === 'investor'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setRole('investor')}
                  >
                    <CircleDollarSign size={18} className="mr-2" />
                    Investor
                  </button>
                </div>
              </div>
            )}

            {/* Email + Password */}
            {!showOTP && (
              <>
                <Input
                  label="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  startAdornment={<User size={18} />}
                />

                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                />
              </>
            )}

            {/*  OTP STEP */}
            {showOTP && (
              <Input
                label="Enter 6-digit OTP"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                required
                fullWidth
              />
            )}

            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
              leftIcon={<LogIn size={18} />}
            >
              {showOTP ? 'Verify OTP' : 'Sign in'}
            </Button>
          </form>

          {/* Demo buttons */}
          {!showOTP && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => fillDemoCredentials('entrepreneur')}
              >
                Entrepreneur Demo
              </Button>
              <Button
                variant="outline"
                onClick={() => fillDemoCredentials('investor')}
              >
                Investor Demo
              </Button>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
