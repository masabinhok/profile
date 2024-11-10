import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
// import ThemeToggle from '@/components/ThemeToggle';

const workSans = localFont({
  src: [
    {
      path: './fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-work-sans',
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
      <body className={`${workSans.variable} `}>
        {/* <ThemeToggle /> */}
        {children}
      </body>
    </html>
  );
}
