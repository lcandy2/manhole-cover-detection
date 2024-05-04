import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Nav from './nav';
import Providers from './progress';
import Toast from './toast';
import { Suspense } from 'react';
import Script from "next/script";

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
    {process.env.GAID && <GoogleAnalytics gaId={process.env.GAID} />}
      <body className="h-full">
      <Providers>
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Toast />
      </Providers>
      <Analytics/>
      {process.env.CFTOKEN && (
          <Script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon={`{"token": "${process.env.CFTOKEN}"}`}
          ></Script>
      )}
      {process.env.MSID && (
          <Script
              type="text/javascript"
              strategy="lazyOnload"
              id="clarity-script"
          >
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.MSID}");`}
          </Script>
      )}
      </body>
    </html>
  );
}
