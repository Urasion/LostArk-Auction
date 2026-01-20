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
        'rounded-xl bg-card border relative  overflow-y-auto w-full max-h-full scrollbar-hide',
        className,
      )}
    >
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, index) => (
              <TableHead key={index}>{col.header}</TableHead>
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
