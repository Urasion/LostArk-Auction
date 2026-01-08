'use client';
import { useSearchParams } from 'next/navigation';
export default function Page() {
  const searchParams = useSearchParams();

  return <div className="flex flex-col grow ">{searchParams.get('id')}</div>;
}
