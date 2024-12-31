import { useToast } from '@/components/ui/use-toast';

interface ToasterHook {
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
}

export function useToaster(): ToasterHook {
  const { toast } = useToast();

  return {
    success: (message: string) => {
      toast({
        title: 'Success',
        description: message,
      });
    },
    error: (message: string) => {
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    },
    warning: (message: string) => {
      toast({
        title: 'Warning',
        description: message,
        className: 'bg-yellow-100',
      });
    },
    info: (message: string) => {
      toast({
        title: 'Info',
        description: message,
        className: 'bg-blue-100',
      });
    },
  };
}