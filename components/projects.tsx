"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Chat Application",
      description:
        "Full-stack chat application with real-time messaging and AI-powered responses using LangChain and OpenAI.",
      tech: ["React", "Node.js", "LangChain", "OpenAI", "PostgreSQL", "Socket.io"],
      link: "#",
      github: "#",
    },
    {
      title: "Document Intelligence Platform",
      description: "Enterprise solution for document processing and analysis using AWS Bedrock and RAG techniques.",
      tech: ["Next.js", "Python", "FastAPI", "AWS Bedrock", "LangGraph", "Pinecone"],
      link: "#",
      github: "#",
    },
    {
      title: "Multi-Agent Workflow System",
      description: "Sophisticated multi-agent system using LangGraph for complex task orchestration and automation.",
      tech: ["Python", "LangGraph", "FastAPI", "Redis", "PostgreSQL", "Docker"],
      link: "#",
      github: "#",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization and insights with AI-powered predictions.",
      tech: ["React", "TypeScript", "D3.js", "Node.js", "AWS EC2", "WebSocket"],
      link: "#",
      github: "#",
    },
    {
      title: "Intelligent Content Generator",
      description: "SaaS platform for AI-powered content generation with fine-tuned models and custom workflows.",
      tech: ["Next.js", "Django", "LangChain", "OpenAI", "Stripe", "AWS Lambda"],
      link: "#",
      github: "#",
    },
    {
      title: "Knowledge Base Search Engine",
      description: "Semantic search engine with vector embeddings and advanced filtering capabilities.",
      tech: ["React", "FastAPI", "LangChain", "Pinecone", "AWS S3", "TypeScript"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

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
                >
                  View <ExternalLink size={16} />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
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
