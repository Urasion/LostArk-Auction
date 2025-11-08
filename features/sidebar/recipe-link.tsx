'use client';
import { cn } from '@/lib/utils';
import { BookOpenText } from 'lucide-react';
import Link from 'next/link';

export default function RecipeLink() {
  return (
    <Link
      className="hidden h-9 rounded-md text-sm font-medium px-4 py-2  has-[>svg]:px-3 md:flex md:w-full hover:bg-hover-background dark:hover:bg-hover-background group relative md:justify-between md:items-center duration-100"
      href={'/recipe'}
    >
      <BookOpenText className="size-4 shrink-0" />
      <p
        className={cn(
          'absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  whitespace-nowrap transition-opacity opacity-0',
          'group-data-[state-sidebar-open=true]:opacity-100 group-data-[state-sidebar-open=true]:duration-300 group-data-[state-sidebar-open=true]:delay-100'
        )}
      >
        각인서
      </p>
    </Link>
  );
}
