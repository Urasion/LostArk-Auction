import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface ColumnDef {
  header: string;
}
interface DataTableSkeletonProps {
  columns: ColumnDef[];
  rowCount?: number;
  className?: string;
}

export function DataTableSkeleton({
  columns,
  rowCount = 10,
  className,
}: DataTableSkeletonProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-card border relative overflow-y-auto w-full xl:max-h-full  scrollbar-hide',
        className,
      )}
    >
      <Table className="w-full caption-bottom text-sm">
        <TableHeader className="w-full caption-bottom text-sm">
          <TableRow>
            {columns.map((col, index) => (
              <TableHead key={col.header + index} className="sticky top-0 z-10">
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="overlfow-y-auto scrollbar-hide">
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton className="h-12 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
