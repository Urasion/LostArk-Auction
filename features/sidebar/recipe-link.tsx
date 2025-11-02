'use client';
import { cn } from '@/lib/utils';
import { BookOpenText } from 'lucide-react';
import Link from 'next/link';
type Props = {
  isOpen: boolean;
};
export default function RecipeLink({ isOpen }: Props) {
  return (
    <Link
      className="hidden h-9 rounded-md text-sm font-medium px-4 py-2  has-[>svg]:px-3.5 md:flex md:w-full hover:bg-hover-background dark:hover:bg-hover-background group relative md:justify-between md:items-center duration-100"
      href={'/recipe'}
    >
      <BookOpenText className="size-4 shrink-0" />
      <p
        className={cn(
          'absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  whitespace-nowrap transition-opacity opacity-0',
          isOpen && 'opacity-100 duration-300 delay-100'
        )}
      >
        경매장
      </p>
    </Link>
  );
}
