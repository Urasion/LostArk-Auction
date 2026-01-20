import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/features/sidebar/layout/sidebar';
import { ThemeScript } from '@/features/provider/theme-script';
import QueryClientProviders from '@/features/provider/queryclient-provider';
import { Provider } from 'jotai';
import Header from '@/features/header/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | 로아 시세',
    default: '로아 시세',
  },
  description:
    '로스트아크 시세 데이터를 보기 쉽게 제공합니다. 각인서, 재련 재료 등의 정보를 확인하세요.',
  keywords: [
    '로스트아크',
    '로스트아크 경매장',
    '로스트아크 시세',
    '로스트아크 각인서',
    '로스트아크 장신구',
    '로스트아크 어빌리티 스톤',
    '로스트아크 재련 재료',
    'Lost Ark Auction',
    'Lost Ark Market',
  ],
  authors: [{ name: 'Jeong Jiwon', url: 'https://github.com/jeongjiwon' }],
  openGraph: {
    title: '로아 시세',
    description:
      '로스트아크 시세 데이터를 보기 쉽게 제공합니다. 각인서, 재련 재료 등의 정보를 확인하세요.',
    url: 'https://lostark-auction.vercel.app',
    siteName: '로아 시세',
    images: [
      {
        url: 'https://lostark-auction.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: '로아 시세 로고',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '로아 시세',
    description:
      '로스트아크 시세 데이터를 보기 쉽게 제공합니다. 각인서, 재련 재료 등의 정보를 확인하세요.',
    images: ['https://lostark-auction.vercel.app/og.png'],
    creator: '@jeongjiwon',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-dvh`}
        suppressHydrationWarning={true}
      >
        <ThemeScript />
        <Provider>
          <QueryClientProviders>
            <div className="flex grow">
              <Sidebar />
              <main className="flex flex-col xl:flex-row grow items-center bg-white dark:bg-black p-4 gap-y-4 xl:gap-y-0">
                <Header />
                {children}
              </main>
            </div>
          </QueryClientProviders>
        </Provider>

        {/** Header자리 */}
      </body>
    </html>
  );
}
