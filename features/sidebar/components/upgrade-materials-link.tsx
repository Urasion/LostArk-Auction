'use client';
import { cn } from '@/lib/utils';
import { Hammer } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type Props = {
  isMobile?: boolean;
};
export default function UpgradeMaterialsLink({ isMobile }: Props) {
  const pathname = usePathname();
  const currentPath = pathname.split('/').filter(Boolean)[0];
  const isCurrent = currentPath === 'upgrade';
  return (
    <>
      {isMobile ? (
        <Link
          href={'/upgrade'}
          className={cn(
            'w-full flex items-center justify-start gap-x-4 font-medium px-6 py-4 transition-colors duration-300 hover:bg-hover-background border-y',
            isCurrent && 'bg-hover-background',
          )}
        >
          <p className="m-auto text-xl">강화재료</p>
        </Link>
      ) : (
        <Link
          className={cn(
            'hidden h-9 rounded-md text-sm font-medium px-2.5 py-2 xl:flex xl:w-full hover:bg-hover-background group relative xl:justify-between xl:items-center duration-300',
            isCurrent && 'bg-hover-background',
          )}
          href={'/upgrade'}
        >
          <Hammer className="size-5 shrink-0" />
          <p
            className={cn(
              'absolute top-1/2 -translate-y-1/2 left-1/5 whitespace-nowrap transition-opacity opacity-0 text-base',
              'group-data-[state-sidebar-open=true]:opacity-100 group-data-[state-sidebar-open=true]:duration-300 group-data-[state-sidebar-open=true]:delay-100',
            )}
          >
            강화재료
          </p>
        </Link>
      )}
    </>
  );
}
