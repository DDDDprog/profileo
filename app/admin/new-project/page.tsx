"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

export default function NewProjectPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [githubUrl, setGithubUrl] = useState("")
  const [tags, setTags] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to an API
    console.log({ title, description, imageUrl, githubUrl, tags: tags.split(",").map((tag) => tag.trim()) })
    router.push("/admin")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">
            Image URL
          </label>
          <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="githubUrl" className="block text-sm font-medium mb-1">
            GitHub URL
          </label>
          <Input id="githubUrl" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-medium mb-1">
            Tags (comma-separated)
          </label>
          <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} required />
        </div>
        <Button type="submit">Add Project</Button>
      </form>
    </div>
  )
}

