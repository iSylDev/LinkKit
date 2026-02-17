import { object, z } from 'zod'

export const bookmarksScheme = z.object({
  // 
})

export const userSignUpInfo = z.object({
  fullName: z.string().min(3, {message: 'Full name must be at least 5 Characters'}).max(20),
  email: z.email(),
  password: z.string()
})