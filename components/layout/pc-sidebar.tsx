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
export default function PcSidebar({ defaultOpen, children }: Props) {
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
        'hidden w-64 flex-col border-r bg-sidebar-accent pb-4  md:flex transition-[width] duration-300 data-[state-sidebar-open=false]:w-14 group'
      )}
      data-state-sidebar-open={isOpen}
    >
      <div className="w-full flex justify-end items-center grow relative max-h-16 px-2 shadow-md ">
        <Button
          size="icon-lg"
          variant="ghost"
          className="hover:bg-hover-background dark:hover:bg-hover-background p-2 z-10 "
          onClick={handleOnChangeOpen}
        >
          <PanelLeft />
        </Button>
        <h1
          className={cn(
            'absolute top-1/2 -translate-y-1/2 left-4 whitespace-nowrap transition-opacity opacity-0',
            'group-data-[state-sidebar-open=true]:opacity-100 group-data-[state-sidebar-open=true]:duration-300 group-data-[state-sidebar-open=true]:delay-100'
          )}
        >
          LostArk Auction
        </h1>
      </div>
      <div className="flex flex-col grow justify-between pt-10 pb-4 px-2">
        <div className="max-h-full grow">{children}</div>
        <SettingButton />
      </div>
    </aside>
  );
}
