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
type Props = {
  isOpen: boolean;
};
export default function SettingButton({ isOpen }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="hidden md:flex md:w-full hover:bg-hover-background dark:hover:bg-hover-background group relative md:justify-between"
        >
          <Settings className="size-4! group-hover:animate-spin" />
          <p
            className={cn(
              'absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  whitespace-nowrap transition-opacity opacity-0',
              isOpen && 'opacity-100 duration-300 delay-100'
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
