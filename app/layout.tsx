import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

const openSans = localFont({
  src: [
    {
      path: './fonts/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/OpenSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/OpenSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/OpenSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/OpenSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/OpenSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Sabin Shrestha | Full Stack Developer | MERN & Next.js Specialist',
  description:
    'Discover the portfolio of Sabin Shrestha, a skilled full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. View projects showcasing comprehensive web development, server-side rendering, and dynamic applications.',
  keywords:
    'Sabin Shrestha, full stack developer, MERN stack, Next.js, MongoDB, Express.js, React, Node.js, web development, server-side rendering, JavaScript, frontend development, backend development, portfolio, modern web applications',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${openSans.variable} `}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
