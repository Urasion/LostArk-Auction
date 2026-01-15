'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/upgrade/66112553');
  }, [router]);
  return (
    <div className="flex grow">
      <Skeleton className="w-full h-125 rounded-md" />
    </div>
  );
}
