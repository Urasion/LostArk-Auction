'use client';
import { Badge } from '@/components/ui/badge';
import { createColumnHelper } from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { FavoriteItem } from '@/store/favorites';
import { EditableCell } from '../components/editable-cell';
import { cn } from '@/lib/utils';

const columnHelper = createColumnHelper<FavoriteItem>();
export const FAVORITE_COLUMN = [
  columnHelper.accessor('Icon', {
    header: '',
    cell: ({ row }) => (
      <div className="flex justify-center items-center">
        <Image
          src={row.getValue('Icon')}
          width={30}
          height={30}
          alt="아이템 이미지"
        />
      </div>
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
    cell: ({ row, column, table }) => {
      return (
        <EditableCell row={row} column={column} table={table} field="Stock" />
      );
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
    cell: ({ row, column, table }) => {
      return (
        <EditableCell
          row={row}
          column={column}
          table={table}
          field="BasePrice"
        />
      );
    },
  }),
  columnHelper.display({
    id: 'ReturnRate',
    header: () => <div className="text-right min-w-10">손익률</div>,
    cell: ({ row }) => {
      const isPriceIncreasing =
        (row.getValue('BasePrice') as number) <
        (row.getValue('CurrentPrice') as number);
      const current = row.getValue('CurrentPrice') as number;
      const prev = row.getValue('BasePrice') as number;
      if (!prev)
        return (
          <span className="flex justify-end items-center text-sm">{'-'}</span>
        );
      const rawRate = ((current - prev) / prev) * 100;

      let formattedRate = +rawRate.toFixed(2) + '%';
      if (rawRate >= 1000) {
        formattedRate = `${(current - prev).toFixed(0)}x`;
      }

      return (
        <span
          className={cn(
            'flex justify-end items-center text-sm',
            isPriceIncreasing
              ? 'text-red-600 dark:text-red-400'
              : 'text-blue-600 dark:text-blue-400',
          )}
        >
          {formattedRate}
        </span>
      );
    },
  }),
  columnHelper.display({
    id: 'ReturnPrice',
    header: () => <div className="text-right min-w-10 pr-5">수익금</div>,
    cell: ({ row }) => {
      const isPriceIncreasing =
        (row.getValue('BasePrice') as number) <
        (row.getValue('CurrentPrice') as number);
      const priceDecrease =
        (row.getValue('CurrentPrice') as number) -
        (row.getValue('BasePrice') as number) *
          (row.getValue('Stock') as number);
      if (!priceDecrease)
        return (
          <span className="flex justify-end items-center text-sm">{0}</span>
        );
      return (
        <span
          className={cn(
            'flex justify-end items-center text-sm pr-5',
            isPriceIncreasing
              ? 'text-red-600 dark:text-red-400'
              : 'text-blue-600 dark:text-blue-400',
          )}
        >
          {priceDecrease.toFixed(0)}
        </span>
      );
    },
  }),
];
