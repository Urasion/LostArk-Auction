'use client';
import { ReactNode, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../../components/ui/drawer';
import { Menu } from 'lucide-react';
import ThemeSwitch from '../components/theme-switch';
type Props = {
  children: ReactNode;
};
export default function MoblieSidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <aside className="xl:hidden">
      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="size-fit p-2 xl:hidden absolute right-0">
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="max-w-60 xl:hidden py-2 bg-sidebar-accent">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">LostArk Auction</DrawerTitle>
          </DrawerHeader>
          <div className="grow py-20">{children}</div>
          <div className="flex flex-col">
            <ThemeSwitch />
          </div>
        </DrawerContent>
      </Drawer>
    </aside>
  );
}
