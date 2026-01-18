"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Builders Hut",
      description:
        "Builders Hut is a powerful command-line tool that scaffolds production-ready FastAPI projects in seconds. Stop wasting time on boilerplate—start building features immediately with a clean, scalable project structure.",
      tech: ["React", "Node.js", "LangChain", "OpenAI", "PostgreSQL", "Socket.io"],
      link: "https://github.com/Agsdovah95/builders-hut/blob/main/README.md",
      github: "https://github.com/Agsdovah95/builders-hut",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                  target="_blank"
                >
                  View <ExternalLink size={16} />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
