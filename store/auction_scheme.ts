import z from 'zod';
export const bodyScheme = z.object({
  itemIds: z.array(z.string()),
});
