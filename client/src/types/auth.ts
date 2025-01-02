export interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface BaseAuthResponse {
  status?: number;
}

export interface AuthResponse extends BaseAuthResponse {
  user: User;
  token: string;
  error?: never;
}

export interface AuthError extends BaseAuthResponse {
  error: string;
  status: number;
  user?: never;
  token?: never;
}

export type AuthResult = AuthResponse | AuthError;

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  confirmPassword: string;
}

// API Response status codes
export const AUTH_STATUS = {
  USER_EXISTS: 409,
  USER_NOT_FOUND: 404,
  INVALID_CREDENTIALS: 401,
  VALIDATION_ERROR: 400,
  SERVER_ERROR: 500,
} as const;

// Error messages
export const AUTH_ERRORS = {
  USER_EXISTS: "User with this email already exists",
  USER_NOT_FOUND: "No user found with this email. Please register first.",
  INVALID_CREDENTIALS: "Invalid email or password",
  VALIDATION_ERROR: "Please check your input",
  SERVER_ERROR: "Something went wrong. Please try again later",
  PASSWORD_MISMATCH: "Passwords don't match",
  WEAK_PASSWORD: "Password must be at least 6 characters",
  INVALID_EMAIL: "Please enter a valid email address",
  REQUIRED_FIELDS: "All fields are required",
} as const;
