import { z } from 'zod';

export const Store = z.object({
  name: z.string(),
  phone: z.string(),
  coordinates: z.tuple([z.number(), z.number()]),
  images: z.array(z.string()),
  nid: z.string(),
  description: z.string(),
  address: z.string(),
  foodKind: z.string(),
});

export type Store = z.infer<typeof Store>;
