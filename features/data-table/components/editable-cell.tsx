import { Input } from '@/components/ui/input';
import useFavorite from '@/hooks/useFavorite';
import { FavoriteItem } from '@/store/favorites';
import { Row } from '@tanstack/react-table';
import { useState } from 'react';
interface Props {
  row: Row<FavoriteItem>;
}
import { motion, AnimatePresence } from 'framer-motion';

const MotionInput = motion(Input);
export const EditableCell = ({ row }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { updateFavoriteBasicPrice } = useFavorite();

  const [value, setValue] = useState<number>(row.original.BasePrice);
  const handleOnBlur = () => {
    setIsEditing(false);
    updateFavoriteBasicPrice(row.original.Id, value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setValue(Number(value));
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnBlur();
    }
  };
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isEditing ? (
        <MotionInput
          key="editing" // key가 달라야 애니메이션이 작동함
          value={value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
          autoFocus
          className="text-right h-8" // 높이를 고정하면 덜 덜컹거립니다
          // 💫 등장 애니메이션 (살짝 커지면서 등장)
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      ) : (
        <motion.div
          key="view"
          className="text-right w-full cursor-text p-2 rounded hover:bg-muted/50 transition-colors"
          onDoubleClick={() => setIsEditing(true)}
          // 💫 퇴장 애니메이션 (부드럽게 사라짐)
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }} // absolute를 주면 레이아웃이 안 깨짐
          transition={{ duration: 0.15 }}
        >
          {value}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
