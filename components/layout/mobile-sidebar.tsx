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
type Props = {
  children: ReactNode;
  Footer: ReactNode;
};
export default function MoblieSidebar({ children, Footer }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className='className=" size-fit p-2 md:hidden'>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="max-w-72 md:hidden p-2">
        <DrawerHeader>
          <DrawerTitle>LostArk Auction</DrawerTitle>
        </DrawerHeader>
        <div className="grow">{children}</div>
        <>{Footer}</>
      </DrawerContent>
    </Drawer>
  );
}
