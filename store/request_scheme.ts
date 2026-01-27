import z from 'zod';
import { ROUTE_LIST } from './route';
export const requestScheme = z.array(
  z.object({
    itemId: z.string(),
    type: z.enum(ROUTE_LIST),
  }),
);
