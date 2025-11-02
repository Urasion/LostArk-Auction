'use client';
import { PanelLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';
import Cookies from 'js-cookie';
import SettingButton from '@/features/sidebar/setting-button';
type Props = {
  children: ReactNode;
  defaultOpen: boolean;
};
export default function PcSidebar({ children, defaultOpen }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleOnChangeOpen = () => {
    setIsOpen((prev) => {
      Cookies.set('pc-sidebar', prev ? 'false' : 'true');
      return !prev;
    });
  };
  return (
    <aside
      className={cn(
        'hidden w-64 flex-col border-r bg-sidebar-accent p-4 md:flex transition-[width] duration-300',
        isOpen || 'w-19'
      )}
    >
      <div className="flex grow relative max-h-10 ">
        <Button
          size="icon-lg"
          variant="ghost"
          className="hover:bg-hover-background dark:hover:bg-hover-background p-2 z-10"
          onClick={handleOnChangeOpen}
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
      <div className="max-h-full grow">{children}</div>
      <SettingButton isOpen={isOpen} />
    </aside>
  );
}
