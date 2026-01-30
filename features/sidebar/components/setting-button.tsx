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
import { motion } from 'framer-motion';

export default function SettingButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'hidden h-9 rounded-md px-2.5 py-2 xl:flex xl:w-full gap-x-4 items-center xl:justify-start',
            'text-sm font-medium hover:bg-hover-background! transition-colors duration-300',
            'relative overflow-hidden',
          )}
        >
          <Settings className="size-5 shrink-0" />
          <motion.p
            animate={{
              opacity: 'var(--sidebar-text-opacity)',
              x: 'var(--sidebar-text-x)',
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            className="whitespace-nowrap text-base"
          >
            환경설정
          </motion.p>
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
