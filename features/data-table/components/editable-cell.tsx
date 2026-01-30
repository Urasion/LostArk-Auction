import { Input } from '@/components/ui/input';
import useFavorite from '@/hooks/useFavorite';
import { FavoriteItem, priceScheme } from '@/store/favorites';
import { Row } from '@tanstack/react-table';

import { useState } from 'react';
interface Props {
  row: Row<FavoriteItem>;
  field: keyof FavoriteItem;
}
import { AnimatePresence, motion } from 'framer-motion';

const MotionInput = motion(Input);
export const EditableCell = ({ row, field }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { updateFavoriteBasicPrice } = useFavorite();

  const [value, setValue] = useState<FavoriteItem[keyof FavoriteItem]>(
    row.original[field],
  );
  const handleOnBlur = () => {
    setIsEditing(false);
    if (row.original[field] !== value) {
      updateFavoriteBasicPrice(row.original.Id, field, value);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      const result = priceScheme.safeParse(Number(inputValue));
      if (result.success) {
        setValue(inputValue);
      }
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnBlur();
    }
  };

  console.log(value);
  return (
    <div className="flex justify-end items-center">
      {isEditing ? (
        <MotionInput
          key="editing"
          value={value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
          autoFocus
          className="flex max-w-30 text-right h-8 border-rose-300"
          initial={{ flex: 0, opacity: 0 }}
          animate={{ flex: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <motion.div
          key="view"
          className="text-right w-full cursor-text p-2 rounded hover:bg-muted/50 transition-colors"
          onDoubleClick={() => setIsEditing(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {value.toLocaleString() || 0}
        </motion.div>
      )}
    </div>
  );
};
