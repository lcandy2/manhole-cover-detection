import './globals.css';

// import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';

export const metadata = {
  title: '市政设施智慧预警系统 - 井盖破损识别',
  description:
    '市政设施智慧预警系统 - 井盖破损识别',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh_CN" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        {/*<Analytics />*/}
        <Toast />
      </body>
    </html>
  );
}
