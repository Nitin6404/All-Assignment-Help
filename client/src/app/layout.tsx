import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LandingPageNavbar  from '@/components/landing-page/landingPageNavbar';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Assignment Help',
  description: 'Get help with your assignments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LandingPageNavbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
