"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Content {
  id: string
  title: string
  type: "about" | "skill" | "experience"
  content: string
}

export default function ContentList() {
  const [contents, setContents] = useState<Content[]>([])

  useEffect(() => {
    // In a real application, you would fetch content from an API
    setContents([
      { id: "1", title: "About Me", type: "about", content: "I'm a full-stack developer..." },
      { id: "2", title: "React", type: "skill", content: "Experienced in building React applications" },
      { id: "3", title: "Software Engineer at Tech Co", type: "experience", content: "Worked on various projects..." },
    ])
  }, [])

  const handleDelete = (id: string) => {
    // In a real application, you would call an API to delete the content
    setContents(contents.filter((content) => content.id !== id))
  }

  return (
    <ul className="space-y-2">
      {contents.map((content) => (
        <li key={content.id} className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{content.title}</h3>
            <p className="text-sm text-gray-500">{content.type}</p>
          </div>
          <Button variant="destructive" onClick={() => handleDelete(content.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}

