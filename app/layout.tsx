import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

import Header from '../components/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Data Dashboard Discovery',
  description: 'Data Dashboard Discovery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='min-h-screen flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
