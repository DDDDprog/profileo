"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // In a real application, you would fetch projects from an API
    setProjects([
      { id: "1", title: "E-commerce Platform", description: "A full-stack e-commerce platform" },
      { id: "2", title: "Task Management App", description: "A real-time task management application" },
      { id: "3", title: "AI Chat Interface", description: "An AI-powered chat interface" },
    ])
  }, [])

  const handleDelete = (id: string) => {
    // In a real application, you would call an API to delete the project
    setProjects(projects.filter((project) => project.id !== id))
  }

  return (
    <ul className="space-y-2">
      {projects.map((project) => (
        <li key={project.id} className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
          </div>
          <Button variant="destructive" onClick={() => handleDelete(project.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}

