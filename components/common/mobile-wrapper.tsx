'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
const wrapper_list = ['/gem', '/upgrade', '/recipe'];
export default function MobileWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMainPage = wrapper_list.includes(pathname);
  const mobileClass = isMainPage ? 'flex' : 'hidden xl:flex';
  return <div className={`${mobileClass} h-dvh`}>{children}</div>;
}
