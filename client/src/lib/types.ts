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
  orderId: number;
  title: string;
  desc: string;
  subject: string;
  type: string;
  deadline: number;
  details?: {
    status: number;
    teacher_id?: string;
  };
  value?: number;
  files?: Array<{
    file_name: string;
    original_file_name: string;
  }>;
}
