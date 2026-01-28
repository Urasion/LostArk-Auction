import z from 'zod';
import { ROUTE_LIST } from './route';
export const favoriteRequestItemScheme = z.object({
  Id: z.number(),
  Type: z.enum(ROUTE_LIST),
});
export const favoriteRequestScheme = z.array(favoriteRequestItemScheme);
