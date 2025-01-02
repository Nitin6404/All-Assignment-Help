"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { apiClient } from "@/lib/api-client";
import type { AuthResult, RegisterCredentials } from "@/types/auth";
import { AUTH_ERRORS, AUTH_STATUS } from "@/types/auth";

// Validation schema
const signupSchema = z.object({
  name: z.string().min(2, AUTH_ERRORS.WEAK_PASSWORD),
  email: z.string().email(AUTH_ERRORS.INVALID_EMAIL),
  password: z.string().min(6, AUTH_ERRORS.WEAK_PASSWORD),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: AUTH_ERRORS.PASSWORD_MISMATCH,
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = signupSchema.parse(formData);
      
      const credentials: RegisterCredentials = {
        name: validatedData.name,
        email: validatedData.email,
        password: validatedData.password,
        confirmPassword: validatedData.confirmPassword,
      };

      const response = await apiClient.register(credentials);

      if ('error' in response || response.error) {
        // Handle specific error cases
        switch (response.status) {
          case AUTH_STATUS.USER_EXISTS:
            toast.error(AUTH_ERRORS.USER_EXISTS);
            break;
          case AUTH_STATUS.VALIDATION_ERROR:
            toast.error(AUTH_ERRORS.VALIDATION_ERROR);
            break;
          case AUTH_STATUS.SERVER_ERROR:
            toast.error(AUTH_ERRORS.SERVER_ERROR);
            break;
          default:
            toast.error(response.error || AUTH_ERRORS.SERVER_ERROR);
        }
        return;
      }

      // If we have a successful response with token and user
      if (response.token && response.user) {
        // Auto login after successful registration
        const loginResponse = await apiClient.login({
          email: validatedData.email,
          password: validatedData.password
        });

        if ('error' in loginResponse || loginResponse.error) {
          toast.error("Registration successful but auto-login failed. Please login manually.");
          router.push("/login");
          return;
        }

        toast.success("Registration successful! Welcome to our platform.");
        router.push("/");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      
      if (error.errors) {
        // Handle Zod validation errors
        error.errors.forEach((err: { message: string }) => {
          toast.error(err.message);
        });
      } else if (error instanceof Error) {
        toast.error(error.message || AUTH_ERRORS.SERVER_ERROR);
      } else {
        toast.error(AUTH_ERRORS.SERVER_ERROR);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-label="Full Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            aria-label="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            aria-label="Password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
            aria-label="Confirm Password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
      </div>
    </form>
  );
}
