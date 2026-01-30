'use client';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type Props = {
  isMobile?: boolean;
};
export default function GemLink({ isMobile }: Props) {
  const pathname = usePathname();
  const currentPath = pathname.split('/').filter(Boolean)[0];
  const isCurrent = currentPath === 'gem';
  return (
    <>
      {isMobile ? (
        <Link
          href={'/gem'}
          className={cn(
            'w-full flex items-center justify-start gap-x-4  font-medium px-6 py-4 transition-colors duration-300 hover:bg-hover-background border-y',
            isCurrent && 'bg-hover-background',
          )}
        >
          <p className="m-auto text-xl">아크그리드</p>
        </Link>
      ) : (
        <Link
          className={cn(
            'hidden h-9 rounded-md px-2.5 py-2 xl:flex xl:w-full gap-x-4 items-center',
            'text-sm font-medium hover:bg-hover-background transition-colors duration-300',
            isCurrent && 'bg-hover-background',
            'relative overflow-hidden',
          )}
          href={'/gem'}
        >
          <Globe className="size-5 shrink-0" />
          <motion.p
            animate={{
              opacity: 'var(--sidebar-text-opacity)',
              x: 'var(--sidebar-text-x)',
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            className="whitespace-nowrap text-base"
          >
            아크그리드
          </motion.p>
        </Link>
      )}
    </>
  );
}
