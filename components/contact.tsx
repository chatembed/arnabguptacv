"use client"

import { FaLinkedin, FaGithub } from "react-icons/fa"

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
            href="https://linkedin.com/in/arnabg95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Agsdovah95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="https://medium.com/@arnabg95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            📝
            <span>Read My Blog</span>
          </a>
          <a
            href="/Arnab-Gupta-CV.pdf"
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
            aria-label="Download Resume (PDF)"
          >
            📄
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  )
}
