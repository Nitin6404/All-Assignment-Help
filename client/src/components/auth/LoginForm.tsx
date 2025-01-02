"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import type { LoginCredentials } from "@/types/auth";
import { AUTH_ERRORS, AUTH_STATUS } from "@/types/auth";

const loginSchema = z.object({
  email: z.string().email(AUTH_ERRORS.INVALID_EMAIL),
  password: z.string().min(6, AUTH_ERRORS.WEAK_PASSWORD),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = loginSchema.parse(formData);
      const credentials: LoginCredentials = {
        email: validatedData.email,
        password: validatedData.password,
      };
      
      const response = await login(credentials);

      // need a refresh page after login
      window.location.reload();
      
      if ('error' in response) {
        const status = response.status || AUTH_STATUS.SERVER_ERROR;
        switch (status) {
          case AUTH_STATUS.USER_NOT_FOUND:
            toast.error(AUTH_ERRORS.USER_NOT_FOUND);
            break;
          case AUTH_STATUS.INVALID_CREDENTIALS:
            toast.error(AUTH_ERRORS.INVALID_CREDENTIALS);
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

      toast.success(`Welcome back, ${response.user.name}!`);
      router.push("/");
    } catch (error: any) {
      if (error.errors) {
        // Handle Zod validation errors
        error.errors.forEach((err: { message: string }) => {
          toast.error(err.message);
        });
      } else {
        toast.error(AUTH_ERRORS.SERVER_ERROR);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
