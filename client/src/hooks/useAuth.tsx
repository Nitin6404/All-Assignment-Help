import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '@/lib/api-client';
import type { User, AuthResult, LoginCredentials, RegisterCredentials } from '@/types/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (data: LoginCredentials) => Promise<AuthResult>;
  logout: () => Promise<void>;
  register: (data: RegisterCredentials) => Promise<AuthResult>;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateAuthState = useCallback((token: string, user: User) => {
    setToken(token);
    setUser(user);
    apiClient.setToken(token);
  }, []);

  const clearAuthState = useCallback(() => {
    setToken(null);
    setUser(null);
    apiClient.clearToken();
  }, []);

  // Initialize auth state from cookie/session
  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        const response = await apiClient.getUserByToken();
        if (!mounted) return;

        if ('error' in response || !response.token || !response.user) {
          clearAuthState();
        } else {
          updateAuthState(response.token, response.user);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        if (!mounted) return;
        clearAuthState();
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initializeAuth();

    return () => {
      mounted = false;
    };
  }, [updateAuthState, clearAuthState]);

  const login = useCallback(async (credentials: LoginCredentials): Promise<AuthResult> => {
    try {
      const response = await apiClient.login(credentials);
      
      if ('error' in response || !response.token || !response.user) {
        clearAuthState();
      } else {
        updateAuthState(response.token, response.user);
      }
      
      return response;
    } catch (error) {
      console.error('Login error:', error);
      clearAuthState();
      return {
        error: 'An unexpected error occurred',
        status: 500
      };
    }
  }, [updateAuthState, clearAuthState]);

  const register = useCallback(async (data: RegisterCredentials): Promise<AuthResult> => {
    try {
      const response = await apiClient.register(data);
      
      if ('error' in response || !response.token || !response.user) {
        clearAuthState();
      } else {
        updateAuthState(response.token, response.user);
      }
      
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      clearAuthState();
      return {
        error: 'An unexpected error occurred',
        status: 500
      };
    }
  }, [updateAuthState, clearAuthState]);

  const logout = useCallback(async () => {
    try {
      await apiClient.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearAuthState();
    }
  }, [clearAuthState]);

  return {
    user,
    token,
    isLoading,
    login,
    logout,
    register,
  };
}
