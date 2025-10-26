'use client';
import useSidebar from '@/hooks/useSidebar';
import { PanelLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import SettingButton from '@/features/sidebar/setting-button';
type Props = {
  children: ReactNode;
};
export default function PcSidebar({ children }: Props) {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <aside
      className={cn(
        'hidden w-64 flex-col border-r bg-gray-50 p-4 md:flex dark:bg-gray-900 transition-all duration-300',
        isOpen || 'w-19'
      )}
    >
      <div className="flex grow relative max-h-10 ">
        <Button
          size="icon-lg"
          variant="ghost"
          className="hover:bg-gray-200 p-2 z-10"
          onClick={toggleSidebar}
        >
          <PanelLeft />
        </Button>
        <h1
          className={cn(
            'absolute top-1/2 -translate-y-1/2 right-0 whitespace-nowrap transition-opacity opacity-0',
            isOpen && 'opacity-100 duration-300 delay-100'
          )}
        >
          LostArk Auction
        </h1>
      </div>
      <div className="max-h-4/5 grow">{children}</div>
      <SettingButton />
    </aside>
  );
}
