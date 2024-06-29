import * as z from "zod"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(1, {
    message: "Password is required"
  })
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required"
  }),
  firstName: z.string().min(1, {
    message: "First Name is required"
  }),
  lastName: z.string().min(1, {
    message: "Last Name is required"
  }),
  username: z.string().min(1, {
    message: "Username is required"
  }),
  phone: z.string().regex(phoneRegex, {
    message: 'Invalid Number!'
  }),
  remember_token: z.string().optional()
})