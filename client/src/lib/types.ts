export interface User {
  id: string;
  email: string;
  hashedPassword: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface Order {
  orderid: number;
  userId: number;
  title: string;
  description: string;
  subject: string;
  type: string;
  deadline: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  value?: number;
  teacherId?: number;
  files?: Array<{
    file_name: string;
    original_file_name: string;
  }>;
}
