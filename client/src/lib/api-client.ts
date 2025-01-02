import { validateEnv } from './env';
import { User, AuthResponse, AuthResult, LoginCredentials as LoginData, RegisterCredentials as RegisterData } from '@/types/auth';
import { Order, OrderFile, OrderResponse, OrderFilesResponse } from '@/types/order';

interface ApiResponse<T = any> {
  success?: boolean;
  data?: T;
  error?: string;
  status?: number;
}

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
  method?: RequestMethod;
  body?: any;
  headers?: Record<string, string>;
  isFormData?: boolean;
}

export class ApiClient {
  private baseUrl: string;
  private token: string | null;

  constructor() {
    const env = validateEnv();
    this.baseUrl = env.NEXT_PUBLIC_API_URL;
    this.token = null;
  }

  setToken(token: string | null) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {
      method = 'GET',
      body,
      headers = {},
      isFormData = false
    } = options;

    const requestHeaders: Record<string, string> = {
      ...headers,
    };

    if (!isFormData) {
      requestHeaders['Content-Type'] = 'application/json';
    }

    if (this.token) {
      requestHeaders['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: requestHeaders,
        body: isFormData ? body : body ? JSON.stringify(body) : undefined,
        credentials: 'include',
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errorStatus = response.status;
        let errorMessage = data?.error || 'An error occurred';
        
        return {
          error: errorMessage,
          status: errorStatus
        } as T;
      }

      return data as T;
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        status: 500
      } as T;
    }
  }

  // Auth endpoints
  async register(data: RegisterData): Promise<AuthResult> {
    return this.request<AuthResult>('/user/add', {
      method: 'POST',
      body: data,
    });
  }

  async login(credentials: LoginData): Promise<AuthResult> {
    return this.request<AuthResult>('/user/login', {
      method: 'POST',
      body: credentials,
    });
  }

  async logout(): Promise<void> {
    await this.request<void>('/user/logout', {
      method: 'POST'
    });
    this.clearToken();
  }

  async getUserByToken(): Promise<AuthResult> {
    return this.request<AuthResult>('/user/me');
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    return this.request<User>('/user/profile', {
      method: 'PUT',
      body: data,
    });
  }

  // Order endpoints
  async getAllUserOrders(): Promise<Order[]> {
    const response = await this.request<Order[]>('/orders');
    return response;
  }

  async getOrderById(orderId: number): Promise<Order> {
    const response = await this.request<Order>(`/order/${orderId}`);
    return response;
  }

  async createOrder(orderData: {
    title: string;
    desc: string;     // Backend expects 'desc'
    subject: string;  // Backend expects 'subject'
    type: string;     // Backend expects 'type'
    deadline: string; // Changed to string for ISO date
  }): Promise<{ orderId: number }> {
    const response = await this.request<{ orderId: number }>('/order', {
      method: 'POST',
      body: orderData,
    });
    return response;
  }

  async uploadOrderFiles(orderId: number, files: FormData): Promise<ApiResponse> {
    return this.request<ApiResponse>(`/orders/${orderId}/files`, {
      method: 'POST',
      body: files,
      isFormData: true,
    });
  }

  async updateOrderStatus(orderId: number, status: number): Promise<ApiResponse> {
    return this.request<ApiResponse>(`/orders/${orderId}/status`, {
      method: 'PATCH',
      body: { status },
    });
  }

  async getOrderFiles(orderId: number): Promise<OrderFile[]> {
    return this.request<OrderFile[]>(`/order/${orderId}/files`);
  }

  // User endpoints
  async getUserOrders(): Promise<Order[]> {
    return this.request<Order[]>('/user/orders');
  }

  async getOrderDetails(orderId: number): Promise<Order> {
    return this.request<Order>(`/user/orders/${orderId}`);
  }

  // Admin endpoints
  async getAllOrders(): Promise<Order[]> {
    return this.request<Order[]>('/admin/orders');
  }

  async assignTeacher(orderId: number, teacherId: number): Promise<void> {
    await this.request<void>(`/admin/orders/${orderId}/assign`, {
      method: 'PUT',
      body: { teacherId },
    });
  }

  async updateOrderValue(orderId: number, value: number): Promise<void> {
    await this.request<void>(`/admin/orders/${orderId}/value`, {
      method: 'PUT',
      body: { value },
    });
  }
}

// Create a singleton instance
export const apiClient = new ApiClient();
