"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, FileText, Download, ArrowLeft } from 'lucide-react';
import { useToaster } from '@/hooks/useToaster';
import { Order, OrderDetails } from '@/types/order';

interface Props {
  params: { id: string };
}

export default function OrderDetailsPage({ params }: Props) {
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const toast = useToaster();

  useEffect(() => {
    let isSubscribed = true;

    const fetchOrderDetails = async () => {
      try {
        const orderId = parseInt(params.id, 10);
        if (isNaN(orderId)) {
          throw new Error('Invalid order ID');
        }

        const data = await apiClient.getOrderById(orderId);
        if ('error' in data) {
          throw new Error(typeof data.error === 'string' ? data.error : 'Failed to fetch order details');
        }

        if (!isSubscribed) return;

        // Convert Order to OrderDetails format
        const orderDetails: OrderDetails = {
          orderid: data.orderid,
          title: data.title,
          descrip: data.descrip,
          sub: data.sub,
          typ: data.typ,
          deadline: data.deadline,
          status: data.status,
          details: {
            status: data.status,
            teacher_id: data.teacherId?.toString()
          },
          value: data.value,
          files: []  // Add files if available in your data
        };
        setOrder(orderDetails);
      } catch (error) {
        console.error('Error fetching order details:', error);
        if (isSubscribed) {
          toast.error('Failed to load order details');
        }
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    };

    fetchOrderDetails();

    return () => {
      isSubscribed = false;
    };
  }, [params.id]);

  const formatDate = (date: string | number | null) => {
    if (!date) return 'Invalid Date';
    
    try {
      let dateObj: Date;
      
      if (typeof date === 'number') {
        // Handle Unix timestamp (seconds)
        dateObj = new Date(date * 1000);
      } else {
        // Handle ISO string or other date format
        dateObj = new Date(date);
      }
      
      // Check if date is valid
      if (isNaN(dateObj.getTime())) {
        return 'Invalid Date';
      }
      
      // Check if year is reasonable (between 2000 and 2100)
      const year = dateObj.getFullYear();
      if (year < 2000 || year > 2100) {
        return 'Invalid Date';
      }
      
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h2>
          <p className="text-gray-600 mb-8">The order you're looking for doesn't exist or you don't have permission to view it.</p>
          <Button
            onClick={() => router.push('/orders')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Back to Orders
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button
          onClick={() => router.push('/orders')}
          variant="outline"
          className="mt-8 mb-4"
        >
          ← Back to Orders
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">{order.title}</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <h2 className="text-xl font-semibold">Order Details</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="mb-2 font-semibold">Subject</h3>
                  <p>{order.sub}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Type</h3>
                  <p>{order.typ}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Deadline</h3>
                  <p>{formatDate(order.deadline)}</p>
                </div>
                {order.value > 0 && (
                  <div>
                    <h3 className="mb-2 font-semibold">Value</h3>
                    <p>${order.value}</p>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="mb-2 font-semibold">Description</h3>
                <p className="whitespace-pre-wrap">{order.descrip}</p>
              </div>
            </CardContent>
          </Card>

          {order.files && order.files.length > 0 && (
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Attached Files</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {order.files.map((file, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Status</h2>
            </CardHeader>
            <CardContent>
              <Badge className={getStatusColor(order.status)}>
                {getStatusLabel(order.status)}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: number) {
  switch (status) {
    case 0:
      return 'bg-yellow-500';
    case 1:
      return 'bg-blue-500';
    case 2:
      return 'bg-green-500';
    case 3:
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
}

function getStatusLabel(status: number) {
  switch (status) {
    case 0:
      return 'Pending';
    case 1:
      return 'In Progress';
    case 2:
      return 'Completed';
    case 3:
      return 'Cancelled';
    default:
      return 'Unknown';
  }
}
