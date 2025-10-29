"use client"

import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 space-y-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              📝 Read My Blog
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              📄 Download Resume
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              💼 View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
