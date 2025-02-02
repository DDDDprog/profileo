import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import ProjectList from "./components/project-list"
import MessageList from "./components/message-list"
import ContentList from "./components/content-list"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default function AdminPage() {
  const headersList = headers()
  const authHeader = headersList.get("authorization")

  if (!authHeader) {
    redirect("/")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectList />
            <Link href="/admin/new-project">
              <Button className="mt-4">Add New Project</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Home Page Content</CardTitle>
          </CardHeader>
          <CardContent>
            <ContentList />
            <Link href="/admin/new-content">
              <Button className="mt-4">Add New Content</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <MessageList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

