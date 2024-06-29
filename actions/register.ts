"use server"

// Here we use server actions instead of API Routes 

import bcrypt from 'bcrypt';
import * as z from "zod";
import { db } from "../lib/db";
import { RegisterSchema } from "../schemas";
import { getUserByEmail } from '../data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate the fields from the server
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: "Invalid fields"
    }
  }

  const { email, password, firstName, lastName, username, remember_token } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Confirm that is email is not taken
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    // That's meen that this email is already taken
    return { error: "Email already in use!" }
  }

  // Provide a default value or null for remember_token
  const tokenValue = remember_token || "null";

  await db.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      remember_token: tokenValue,
      password: hashedPassword,
    }
  })

  // TODO: send verification token email

  // Default
  return {
    success: "User created!",
  }
}