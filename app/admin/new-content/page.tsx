"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function NewContentPage() {
  const [title, setTitle] = useState("")
  const [type, setType] = useState<"about" | "skill" | "experience">("about")
  const [content, setContent] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to an API
    console.log({ title, type, content })
    router.push("/admin")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Content</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1">
            Type
          </label>
          <Select onValueChange={(value: "about" | "skill" | "experience") => setType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="about">About</SelectItem>
              <SelectItem value="skill">Skill</SelectItem>
              <SelectItem value="experience">Experience</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <Button type="submit">Add Content</Button>
      </form>
    </div>
  )
}

