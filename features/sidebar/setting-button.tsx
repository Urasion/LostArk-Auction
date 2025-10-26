'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import useSidebar from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { Moon, Settings } from 'lucide-react';
export default function SettingButton() {
  const { isOpen } = useSidebar();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="hidden md:flex md:w-full group hover:bg-gray-200 relative md:justify-between"
        >
          <Settings className="group-hover:animate-spin" />
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
      <PopoverContent className="p-2" side="right" sideOffset={30}>
        <Button variant="ghost" className="w-full justify-start gap-x-4">
          <Moon />
          다크모드
        </Button>
      </PopoverContent>
    </Popover>
  );
}
