"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>

              {/* Photo frame */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent p-1 rounded-2xl shadow-lg">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/professional-developer-portrait.png"
                    alt="Your professional photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold whitespace-nowrap flex items-center gap-2">
                Full Stack <span className="text-primary">Gen AI</span>{" "}
                Developer
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground text-balance">
                Building intelligent applications with MERN, Python, LangChain &
                AWS
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              I craft end-to-end AI solutions, from frontend interfaces to
              sophisticated backend systems powered by LLMs and modern cloud
              infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium cursor-pointer"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
