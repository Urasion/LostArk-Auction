// "use client" 지시어는 이 파일이 클라이언트 컴포넌트임을 명시합니다.
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function QueryClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  // useState를 사용해 QueryClient 인스턴스가 컴포넌트 라이프사이클 동안
  // 단 한 번만 생성되도록 보장합니다.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
