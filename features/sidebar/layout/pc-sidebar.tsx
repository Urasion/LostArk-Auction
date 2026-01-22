'use client';
import { PanelLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import SettingButton from '../components/setting-button';

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
        'hidden h-screen sticky top-0 shrink-0 flex-col border-r bg-sidebar-accent pb-4 xl:flex transition-[width] duration-300 data-[state-sidebar-open=false]:w-14 group',
        'w-64',
      )}
      data-state-sidebar-open={isOpen}
    >
      <div className="w-full flex justify-end items-center shrink-0 relative h-16 px-2 border-b">
        <Button
          size="icon-lg"
          variant="ghost"
          className="hover:bg-hover-background dark:hover:bg-hover-background p-2 z-10 "
          onClick={handleOnChangeOpen}
        >
          <PanelLeft />
        </Button>
        <Link
          href={'/'}
          className={cn(
            'absolute top-1/2 -translate-y-1/2 left-4 whitespace-nowrap transition-opacity opacity-0',
            'group-data-[state-sidebar-open=true]:opacity-100 group-data-[state-sidebar-open=true]:duration-300 group-data-[state-sidebar-open=true]:delay-100',
          )}
        >
          로아시세
        </Link>
      </div>

      <div className="flex flex-col grow justify-between pt-10 pb-4 px-2 overflow-hidden group-data-[state-sidebar-open=true]:px-4 ">
        <div className="flex flex-col grow gap-y-4 scrollbar-hide">
          {children}
        </div>
        <div className="shrink-0 pt-4">
          <SettingButton />
        </div>
      </div>
    </aside>
  );
}
