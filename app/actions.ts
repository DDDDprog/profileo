"use server"

import { saveMessage } from "@/lib/api"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    throw new Error("All fields are required")
  }

  await saveMessage({ name, email, message })

  return {
    message: "Thanks for your message! We'll get back to you soon.",
  }
}

