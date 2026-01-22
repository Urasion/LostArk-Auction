'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
const wrapperList = ['/gem', '/upgrade', '/recipe', '/battle-items'];
export default function MobileWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMainPage = wrapperList.includes(pathname);
  const mobileClass = isMainPage ? 'flex' : 'hidden xl:flex';
  return (
    <div className={`${mobileClass} w-full xl:max-w-250 max-h-[90dvh]`}>
      {children}
    </div>
  );
}
