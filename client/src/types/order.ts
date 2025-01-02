export interface Order {
  orderid: number;
  title: string;
  descrip: string;
  sub: string;
  typ: string;
  deadline: number;
  status: number;
  value: number;
  teacherId?: number;
  createdAt: string;
  updatedAt: string;
}

export interface OrderDetails {
  orderid: number;
  title: string;
  descrip: string;
  sub: string;
  typ: string;
  deadline: number;
  status: number;
  details: {
    status: number;
    teacher_id?: string;
  };
  value: number;
  files: Array<{
    name: string;
    url: string;
  }>;
}

export interface OrderCreateInput {
  title: string;
  descrip: string;
  sub: string;
  typ: string;
  deadline: number;
}

export interface OrderFile {
  fileId: number;
  orderId: number;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
}

export interface OrderResponse {
  message: string;
  orderId: number;
}

export interface OrderFilesResponse {
  files: OrderFile[];
}
