import { Input } from '@/components/ui/input';
import useFavorite from '@/hooks/useFavorite';
import { FavoriteItem } from '@/store/favorites';
import { Column, Row, Table } from '@tanstack/react-table';

import { useEffect, useState } from 'react';
interface Props {
  row: Row<FavoriteItem>;
  column: Column<FavoriteItem>;
  table: Table<FavoriteItem>;
  field: keyof FavoriteItem;
}
import { motion } from 'framer-motion';

const MotionInput = motion(Input);
export const EditableCell = ({ row, column, table, field }: Props) => {
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
    <>
      {isEditing ? (
        <MotionInput
          key="editing"
          value={value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
          autoFocus
          className="text-right h-8"
        />
      ) : (
        <motion.div
          key="view"
          className="text-right w-full cursor-text p-2 rounded hover:bg-muted/50 transition-colors"
          onDoubleClick={() => setIsEditing(true)}
        >
          {value}
        </motion.div>
      )}
    </>
  );
};
