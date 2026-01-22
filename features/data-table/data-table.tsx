'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { motion } from 'motion/react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface DataTableProps<TData> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  data: TData[];
  onRowClick?: (item: TData) => void;
  className?: string;
}

export function DataTable<TData>({
  columns,
  data,
  onRowClick,
  className,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [draggedRow, setIsDraggedRow] = useState<TData | null>(null);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(), // 정렬 로직
    state: {
      sorting,
    },
    initialState: {
      columnVisibility: {
        Id: false,
      },
    },
  });

  const handleDragStart = (e: React.DragEvent, row: TData) => {
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => {
      setIsDraggedRow(row);
    }, 0);
  };

  const handleDragEnd = () => {
    setIsDraggedRow(null);
  };
  return (
    <>
      {draggedRow && (
        <motion.div
          className="absolute -translate-x-full  w-100 h-[50dvh]  z-10 rounded-xl border-2 border-dashed border-accent bg-rose-300"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            console.log(e);
            console.log(draggedRow);
          }}
        >
          드롭 영역
        </motion.div>
      )}
      <motion.div
        className={cn(
          'rounded-xl bg-card border relative overflow-y-auto w-full xl:max-h-full  scrollbar-hide',
          className,
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
        }}
        whileHover={{
          y: -10,
          transition: { duration: 0.2 },
        }}
      >
        <Table className="w-full caption-bottom text-sm">
          <TableHeader className="w-full caption-bottom text-sm">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="sticky top-0 z-10">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="overlfow-y-auto scrollbar-hide">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={cn('h-14', row.id === draggedRow && 'opacity-30')}
                  onClick={() => {
                    onRowClick?.(row.original);
                  }}
                  onDragStart={(e) => {
                    handleDragStart(e, row.original);
                  }}
                  onDragEnd={handleDragEnd}
                  draggable
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  데이터가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </motion.div>
    </>
  );
}
