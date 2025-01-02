'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useToaster } from '@/hooks/useToaster';
import { Order } from '@/types/order';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { apiClient } from '@/lib/api-client';

const ORDER_STATUS = {
  0: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  1: { label: 'In Progress', color: 'bg-blue-100 text-blue-800' },
  2: { label: 'Under Review', color: 'bg-purple-100 text-purple-800' },
  3: { label: 'Completed', color: 'bg-green-100 text-green-800' },
  4: { label: 'Cancelled', color: 'bg-red-100 text-red-800' },
} as const;

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const toast = useToaster();

  useEffect(() => {
    console.log('Auth state:', { user, authLoading });
    
    if (authLoading) {
      return;
    }
    
    if (!user) {
      console.log('No user found, redirecting to login');
      router.push('/login');
      return;
    }
    
    console.log('User authenticated, fetching orders');
    fetchOrders();
  }, [user, router, authLoading]);

  const fetchOrders = async () => {
    try {
      const response = await apiClient.getAllUserOrders();
      if ('error' in response) {
        throw new Error(typeof response.error === 'string' ? response.error : 'Failed to fetch orders');
      }
      setOrders(response);
    } catch (error) {
      toast.error('Failed to fetch orders');
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusInfo = (status: number) => {
    return ORDER_STATUS[status as keyof typeof ORDER_STATUS] || 
           { label: 'Unknown', color: 'bg-gray-100 text-gray-800' };
  };

  const formatDate = (dateValue: string | number) => {
    try {
      if (!dateValue) return 'Not set';
      
      // If it's a Unix timestamp (number or numeric string)
      if (!isNaN(Number(dateValue))) {
        // Convert milliseconds to seconds if needed
        const timestamp = Number(dateValue).toString().length > 10 
          ? Number(dateValue) / 1000 
          : Number(dateValue);
        return new Date(timestamp * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }

      // If it's a date string
      return new Date(dateValue).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Orders Found</h2>
          <p className="text-gray-600 mb-8">Ready to get started? Place your first order now!</p>
          <Button
            onClick={() => router.push('/order')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Place Your First Order
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-2">Track and manage your assignments</p>
        </div>
        <Button
          onClick={() => router.push('/order')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          New Order
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => {
          const { label, color } = getStatusInfo(order.status);
          return (
            <Card
              key={order.orderid}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                    {order.title}
                  </h3>
                  <Badge className={color}>
                    {label}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {order.descrip}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Subject:</span>
                    <p className="font-medium text-gray-900">{order.sub}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <p className="font-medium text-gray-900">{order.typ}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Created:</span>
                    <p className="font-medium text-gray-900">
                      {order.createdAt ? formatDate(order.createdAt) : 'Recent'}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Deadline:</span>
                    <p className="font-medium text-gray-900">
                      {order.deadline ? formatDate(order.deadline) : 'Not set'}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={() => router.push(`/orders/${order.orderid}`)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Details →
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
