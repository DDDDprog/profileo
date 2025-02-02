"use client"

import { useState, useEffect } from "react"
import { getMessages } from "@/lib/api"

interface Message {
  id: string
  name: string
  email: string
  message: string
  createdAt: Date
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    async function fetchMessages() {
      const fetchedMessages = await getMessages()
      setMessages(fetchedMessages)
    }
    fetchMessages()
  }, [])

  return (
    <ul className="space-y-4">
      {messages.map((message) => (
        <li key={message.id} className="border-b pb-2">
          <h3 className="font-semibold">{message.name}</h3>
          <p className="text-sm text-gray-500">{message.email}</p>
          <p className="mt-1">{message.message}</p>
          <p className="text-xs text-gray-400 mt-1">{new Date(message.createdAt).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  )
}

