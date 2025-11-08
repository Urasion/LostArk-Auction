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
          className="hidden md:flex md:w-full hover:bg-hover-background has-[>svg]:px-3 dark:hover:bg-hover-background  relative md:justify-between transition-colors duration-300"
        >
          <Settings className="size-4! " />
          <p
            className={cn(
              'absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  whitespace-nowrap transition-opacity opacity-0',
              'group-data-[state-sidebar-open=true]:opacity-100 group-data-[state-sidebar-open=true]:duration-300 group-data-[state-sidebar-open=true]:delay-100'
            )}
          >
            환경설정
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-2 hidden md:flex"
        side="right"
        sideOffset={30}
      >
        <ThemeSwitch />
      </PopoverContent>
    </Popover>
  );
}
