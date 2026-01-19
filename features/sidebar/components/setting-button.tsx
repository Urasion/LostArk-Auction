'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Settings } from 'lucide-react';
import ThemeSwitch from './theme-switch';

export default function SettingButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="hidden h-9 rounded-md text-sm font-medium px-2.5 py-2 xl:flex xl:w-full hover:bg-hover-background dark:hover:bg-hover-background group relative xl:justify-between xl:items-center duration-300"
        >
          <Settings className="size-5 shrink-0" />
          <p
            className={cn(
              'absolute top-1/2 -translate-y-1/2 left-1/5 whitespace-nowrap transition-opacity opacity-0 text-base',
              'group-data-[state-sidebar-open=true]:opacity-100 group-data-[state-sidebar-open=true]:duration-300 group-data-[state-sidebar-open=true]:delay-100'
            )}
          >
            환경설정
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-2 hidden xl:flex"
        side="right"
        sideOffset={30}
      >
        <ThemeSwitch />
      </PopoverContent>
    </Popover>
  );
}
