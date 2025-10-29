"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer specializing in generative AI applications. With expertise across
                the entire technology stack, I build scalable, intelligent systems that solve real-world problems.
              </p>
              <p>
                My journey spans from crafting responsive user interfaces with React to architecting robust backend
                systems with Python and Node.js. I'm particularly fascinated by the intersection of AI and software
                engineering, where I leverage LangChain, LangGraph, and AWS Bedrock to create cutting-edge AI solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new AI frameworks,
                or sharing knowledge through my blog and technical writing.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <h3 className="font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Specialization:</span>
                  <span className="text-foreground font-medium">Gen AI & Full Stack</span>
                </li>
                <li className="flex justify-between">
                  <span>Frontend:</span>
                  <span className="text-foreground font-medium">React, Next.js, TypeScript</span>
                </li>
                <li className="flex justify-between">
                  <span>Backend:</span>
                  <span className="text-foreground font-medium">Node.js, Python, FastAPI</span>
                </li>
                <li className="flex justify-between">
                  <span>AI/ML:</span>
                  <span className="text-foreground font-medium">LangChain, LangGraph, Bedrock</span>
                </li>
                <li className="flex justify-between">
                  <span>Cloud:</span>
                  <span className="text-foreground font-medium">AWS (EC2, Lambda, S3)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
