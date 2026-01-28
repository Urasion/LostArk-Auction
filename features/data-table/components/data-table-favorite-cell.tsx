import useFavorite from '@/hooks/useFavorite';
import { cn } from '@/lib/utils';
import { AuctionItem } from '@/store/auction';
import { Row } from '@tanstack/react-table';
import { motion, useAnimation } from 'framer-motion';
import { Heart } from 'lucide-react';
interface Props {
  row: Row<AuctionItem>;
}

export default function DataTableFavoriteCell({ row }: Props) {
  const { isFavorite, toggleFavorite } = useFavorite();
  const controls = useAnimation();

  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(row.getValue('Id'), row.original);
    await controls.start({
      scale: [1, 1.4, 1],
      rotate: [-10, 10, -5, 5, 0],
      transition: { duration: 0.4 },
    });
  };

  return (
    <motion.button
      animate={controls}
      onClick={handleToggle}
      whileTap={{ scale: 0.95 }}
    >
      <Heart
        size={18}
        className={cn(
          'fill-gray-300 dark:fill-gray-300/15 stroke-0',
          isFavorite(row.original.Id) && 'fill-red-500 dark:fill-red-600',
        )}
      />
    </motion.button>
  );
}
