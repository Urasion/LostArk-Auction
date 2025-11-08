'use client';
import { ReactNode, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Menu } from 'lucide-react';
import ThemeSwitch from '@/features/sidebar/theme-switch';
type Props = {
  children: ReactNode;
};
export default function MoblieSidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <aside className="md:hidden">
      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="size-fit p-2 md:hidden absolute right-0">
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="max-w-60 md:hidden p-2 bg-sidebar-accent">
          <DrawerHeader>
            <DrawerTitle>LostArk Auction</DrawerTitle>
          </DrawerHeader>
          <div className="grow py-4">{children}</div>
          <div className="flex flex-col">
            <ThemeSwitch />
          </div>
        </DrawerContent>
      </Drawer>
    </aside>
  );
}
