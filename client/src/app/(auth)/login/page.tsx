'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';
import { useToaster } from '@/hooks/useToaster';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const toast = useToaster();

  useEffect(() => {
    if (searchParams.get('expired') === 'true') {
      toast.error('Your session has expired. Please log in again.');
    }
  }, [searchParams, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              create a new account
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
