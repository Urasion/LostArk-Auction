'use client';
import { Badge } from '@/components/ui/badge';
import { createColumnHelper } from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { FavoriteItem } from '@/store/favorites';
import { EditableCell } from '../components/editable-cell';

const columnHelper = createColumnHelper<FavoriteItem>();
export const FAVORITE_COLUMN = [
  columnHelper.accessor('Icon', {
    header: '',
    cell: ({ row }) => (
      <Image
        src={row.getValue('Icon')}
        width={30}
        height={30}
        alt="아이템 이미지"
      />
    ),
  }),

  columnHelper.accessor('Name', {
    header: ({ column }) => (
      <div
        className="flex justify-start items-center gap-x-2 text-left cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        아이템명
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
  }),
  columnHelper.accessor('Grade', {
    header: () => <div className="text-center">등급</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center ">
          <Badge variant={row.getValue('Grade')}>{row.getValue('Grade')}</Badge>
        </div>
      );
    },
  }),

  columnHelper.accessor('CurrentPrice', {
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        현재가
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('CurrentPrice')}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('Stock', {
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        보유 수량
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
    meta: { align: 'right' },
    cell: ({ row }) => {
      return <EditableCell row={row} field="Stock" />;
    },
  }),
  columnHelper.accessor('BasePrice', {
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        기준가
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
    cell: ({ row }) => {
      return <EditableCell row={row} field="BasePrice" />;
    },
  }),
];
