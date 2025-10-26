import React, { ReactNode } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Menu } from 'lucide-react';

export default function MoblieSidebar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger className='className=" size-fit p-2 md:hidden '>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="max-w-72">
        <DrawerHeader>
          <DrawerTitle>LostArk Auction</DrawerTitle>
        </DrawerHeader>
        <div className="grow"></div>

        <div className="w-64"></div>
      </DrawerContent>
    </Drawer>
  );
}
