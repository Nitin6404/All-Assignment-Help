import { useState, useEffect, useRef } from 'react';
import { apiClient, User, LoginData, RegisterData, ApiClient } from '@/lib/api-client';

interface AuthState {
  user: User | null;
  token: string | null;
  apiClient: ApiClient;
  login: (data: LoginData) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const apiClientRef = useRef<ApiClient>(apiClient);

  useEffect(() => {
    // Initialize from localStorage
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      apiClientRef.current.setToken(storedToken);
    }
  }, []);

  const login = async (data: LoginData) => {
    const response = await apiClientRef.current.login(data);
    setToken(response.token);
    setUser(response.user);
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    apiClientRef.current.setToken(response.token);
  };

  const logout = async () => {
    await apiClientRef.current.logout();
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    apiClientRef.current.setToken(null);
  };

  const register = async (data: RegisterData) => {
    const response = await apiClientRef.current.register(data);
    setToken(response.token);
    setUser(response.user);
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    apiClientRef.current.setToken(response.token);
  };

  return {
    user,
    token,
    apiClient: apiClientRef.current,
    login,
    logout,
    register,
  };
}
