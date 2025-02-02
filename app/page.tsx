import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { getHomePageContent } from "@/lib/api" 

export default async function Page() {
  const { about, skills, experiences, projects } = await getHomePageContent()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-4">
            <Image src="https://avatars.githubusercontent.com/u/173600669?v=4&size=64" alt="Profile Picture" width={32} height={32} className="rounded-full" />
            <Link className="font-bold sm:inline-block" href="/">
              DDprog
            </Link>
          </div>
          <nav className="ml-auto flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
            
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">{about.content}</p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/DDDDprog" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/%E1%AD%99%EA%AB%9D%EA%AA%AE-i-%EA%AA%96%EA%AA%91-dhar-56b58934a/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/i7617850427943" target="_blank">
                  <Button variant="outline" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">X (formerly Twitter)</span>
                  </Button>
                </Link>
                <Link href="mailto:ddhar1219@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.id} className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p>{skill.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-2">{exp.title}</h3>
                  <p>{exp.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 DDprog| All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          </nav>
        </div>
      </footer>
    </div>
  )
}

