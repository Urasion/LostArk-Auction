'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { motion } from 'framer-motion';
import FavoriteList from './favorite-table';

const MotionButton = motion(Button);
export default function FavoriteButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MotionButton
          layout
          variant="outline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
          }}
        >
          즐겨찾기
        </MotionButton>
      </SheetTrigger>
      <SheetContent className="min-w-5xl px-4">
        <SheetHeader>
          <SheetTitle>즐겨찾기</SheetTitle>
          <SheetDescription>
            즐겨찾기 추가 시점의 최저가가 기준가로 설정됩니다.
          </SheetDescription>
        </SheetHeader>
        <FavoriteList />
      </SheetContent>
    </Sheet>
  );
}
