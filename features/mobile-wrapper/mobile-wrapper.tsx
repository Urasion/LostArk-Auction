'use client';
import { ROUTE_LIST } from '@/store/route';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
export default function MobileWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMainPage = ROUTE_LIST.some((route) => route === pathname);
  const mobileClass = isMainPage
    ? 'flex xl:flex-col'
    : 'hidden xl:flex xl:flex-col';
  return (
    <div className={`${mobileClass} w-full xl:max-w-250 max-h-[90dvh]`}>
      {children}
    </div>
  );
}
