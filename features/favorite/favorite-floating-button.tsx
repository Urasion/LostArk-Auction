'use client';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { motion } from 'framer-motion';
import FavoriteList from './favorite-table';
const MotionButton = motion(Button);

export default function FavoriteFloatingButton() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <MotionButton variant="outline" className="xl:hidden">
          즐겨찾기
        </MotionButton>
      </DrawerTrigger>
      <DrawerContent className="min-h-3xl px-5 pb-5">
        <DrawerHeader>
          <DrawerTitle>즐겨찾기</DrawerTitle>
          <DrawerDescription>
            즐겨찾기 추가 시점의 최저가가 기준가로 설정됩니다.
          </DrawerDescription>
        </DrawerHeader>
        <FavoriteList />
      </DrawerContent>
    </Drawer>
  );
}
