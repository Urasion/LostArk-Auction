import z from 'zod';
import { ROUTE_LIST } from './route';
export const requestItemScheme = z.object({
  Id: z.number(),
  Name: z.string(),
  Grade: z.string(),
  Icon: z.string(),
  BasePrice: z.number(),
  CurrentPrice: z.number(),
  Stock: z.number(),
  Type: z.enum(ROUTE_LIST),
});
export const requestScheme = z.array(requestItemScheme);
