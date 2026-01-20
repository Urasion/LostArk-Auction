'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const wrapper_list = ['/gem', '/upgrade', '/recipe'];
export default function MobileWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isMainPage = wrapper_list.includes(pathname);
  const mobileClass = isMainPage ? 'block' : 'hidden xl:block';

  return (
    <div
      className={`
        ${mobileClass} 
        flex h-full shrink-0
        grow xl:grow-0 
        justify-center xl:justify-start 
        items-start
        
      `}
    >
      {children}
    </div>
  );
}
