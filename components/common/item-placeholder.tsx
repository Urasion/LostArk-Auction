'use client'; // Framer Motion 사용을 위해 필요

import { MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ItemPlaceHolder() {
  return (
    <div className="hidden xl:flex grow flex-col items-center justify-center h-full bg-muted/5 gap-y-6">
      {/* 1. 아이콘 영역 */}
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-muted/20">
        {/* motion.div로 아이콘을 감싸서 애니메이션 적용 */}
        <motion.div
          animate={{
            scale: [1, 0.9, 1],
            y: [0, 3, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            times: [0, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          // 마우스를 올렸을 때 즉각적인 반응 추가 (선택사항)
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="flex items-center justify-center ml-2" // 기존 ml-2를 여기로 이동
        >
          <MousePointerClick
            size={64}
            className="text-muted-foreground/50"
            strokeWidth={1.5}
          />
        </motion.div>
      </div>

      {/* 2. 텍스트 영역 */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground/80 whitespace-nowrap">
          아이템을 선택해주세요
        </h2>
        <p className="text-muted-foreground whitespace-nowrap">
          오른쪽 목록에서 아이템을 클릭하면
          <br />
          상세 시세와 거래 내역이 이곳에 표시됩니다.
        </p>
      </div>
    </div>
  );
}
