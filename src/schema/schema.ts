import { z } from "zod";


export const NewBookmarkSchema = z.object({
  title: z.string().min(2).max(30),
  description: z.string().min(5).max(70),
  websiteUrl: z.url({ message: 'Invalid URL' }),
  tags: z.string()
  .min(3, 'At least one tag is required')
  .transform((val) => val.split(',').map((tag) => tag.trim()).filter((tag) => tag !== ''))
});

export type NewBookmarkInput = z.input<typeof NewBookmarkSchema>;
export type NewBookmarkOutput = z.output<typeof NewBookmarkSchema>;