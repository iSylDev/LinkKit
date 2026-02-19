import { z } from "zod";


export const NewBookmarkSchema = z.object({
  title: z.string().min(2, {message: 'Title cannot be less than 2 chars'}).max(30, {message: 'Title cannot be greater than 30 chars'}),
  description: z.string().min(0).max(100, {message: 'description cannot be greater than 100 chars'}),
  websiteUrl: z.url({ message: 'Invalid URL' }),
  tags: z.string()
  .min(3, 'At least one tag is required')
  .transform((val) => val.split(',').map((tag) => tag.trim()).filter((tag) => tag !== ''))
});

export type NewBookmarkInput = z.input<typeof NewBookmarkSchema>;
export type NewBookmarkOutput = z.output<typeof NewBookmarkSchema>;