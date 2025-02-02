interface Content {
  id: string
  title: string
  type: "about" | "skill" | "experience"
  content: string
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

interface Message {
  id: string
  name: string
  email: string
  message: string
  createdAt: Date
}

const messages: Message[] = []

export async function getHomePageContent() {
  // In a real application, this would be an API call
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

  const contents: Content[] = [
    {
      id: "1",
      title: "About Me",
      type: "about",
      content: "I'm a passionate full-stack developer with experience in building modern web applications.",
    },
    {
      id: "2",
      title: "React",
      type: "skill",
      content: "Experienced in building complex applications with React and its ecosystem.",
    },
    {
      id: "3",
      title: "Node.js",
      type: "skill",
      content: "Proficient in server-side JavaScript and building RESTful APIs.",
    },
    {
      id: "4",
      title: "Software Engineer at Tech Co",
      type: "experience",
      content: "Led development of a high-traffic e-commerce platform, improving performance by 40%.",
    },
  ]

  const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://github.com",
      tags: ["Next.js", "Prisma", "Stripe"],
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A real-time task management application with team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://github.com",
      tags: ["React", "Node.js", "Socket.io"],
    },
    {
      id: "3",
      title: "AI Chat Interface",
      description: "An AI-powered chat interface with natural language processing capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://github.com",
      tags: ["OpenAI", "Next.js", "TailwindCSS"],
    },
  ]

  return {
    about: contents.find((c) => c.type === "about")!,
    skills: contents.filter((c) => c.type === "skill"),
    experiences: contents.filter((c) => c.type === "experience"),
    projects,
  }
}

export async function saveMessage(message: Omit<Message, "id" | "createdAt">) {
  const newMessage: Message = {
    ...message,
    id: Date.now().toString(),
    createdAt: new Date(),
  }
  messages.push(newMessage)
}

export async function getMessages() {
  return messages
}

