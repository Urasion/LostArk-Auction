import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        none: 'rounded-sm bg-gray-50 text-gray-600 border-gray-500',
        decrease: 'rounded-sm bg-green-50 text-green-600 ',
        increase: 'rounded-sm bg-red-50 text-red-600 border-red-500',
        고대: 'rounded-sm bg-[#8C6928]/5 text-[#8C6928] border-[[#E3C7A1]/30',
        희귀: 'rounded-sm bg-blue-50 text-blue-600 border-blue-500',
        유물: 'rounded-sm bg-orange-50 text-orange-600 border-orange-500',
        영웅: 'rounded-sm bg-violet-50 text-violet-600 border-violet-500',
        전설: 'rounded-sm bg-yellow-50 text-yellow-600 border-yellow-500',
        고급: 'rounded-sm bg-green-50 text-green-600 border-green-500',
      },
    },
    defaultVariants: {
      variant: 'none',
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
