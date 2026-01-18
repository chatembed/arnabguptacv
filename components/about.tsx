"use client";

import {
  Sparkles,
  Code2,
  Brain,
  Cloud,
  Coffee,
  Rocket,
  Zap,
  BookOpen,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px]">
          {/* Main Story - Large Card */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Sparkles size={20} />
                <span className="text-sm font-medium uppercase tracking-wide">
                  The Story
                </span>
              </div>
              <p className="text-foreground leading-relaxed">
                I got hooked on AI when I realized it wasn't just about models—it's
                about making them <em>useful</em>. That meant learning everything:
                the infrastructure, the APIs, the interfaces, the deployment pipelines.
              </p>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              3+ years of shipping products taught me one thing: great AI is invisible.
              Users don't care about your architecture—they care if it works.
            </p>
          </div>

          {/* Currently Building */}
          <div className="col-span-2 md:col-span-1 row-span-1 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between hover:border-primary/30 transition-colors group">
            <div className="flex items-center gap-2 text-amber-500 mb-2">
              <Rocket size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Currently
              </span>
            </div>
            <p className="text-sm text-foreground font-medium">
              Building FastAPI Scaffold cli tool to help generate production-ready FastAPI boilerplate code.
            </p>
          </div>

          {/* Philosophy */}
          <div className="col-span-2 md:col-span-1 row-span-1 bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 rounded-2xl p-5 flex flex-col justify-between hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Zap size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Philosophy
              </span>
            </div>
            <p className="text-sm text-foreground font-medium italic">
              "Build for the future. Build Scalable Systems."
            </p>
          </div>

          {/* Stats Row */}
          <div className="col-span-1 bg-card border border-border rounded-2xl p-5 flex flex-col justify-center items-center text-center hover:border-primary/30 transition-colors">
            <span className="text-3xl font-bold text-primary">3.5+</span>
            <span className="text-xs text-muted-foreground mt-1">
              Years Coding
            </span>
          </div>

          <div className="col-span-1 bg-card border border-border rounded-2xl p-5 flex flex-col justify-center items-center text-center hover:border-primary/30 transition-colors">
            <span className="text-3xl font-bold text-primary">7+</span>
            <span className="text-xs text-muted-foreground mt-1">
              Projects Shipped
            </span>
          </div>

          {/* Tech Stack Card */}
          <div className="col-span-2 row-span-2 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Code2 size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Tech Stack
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-muted-foreground">
                    Frontend
                  </span>
                </div>
                <p className="text-sm font-medium">
                  React, Next.js, TypeScript
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground">Backend</span>
                </div>
                <p className="text-sm font-medium">Python, FastAPI, Django</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs text-muted-foreground">AI/ML</span>
                </div>
                <p className="text-sm font-medium">
                  LangChain, LangGraph, Bedrock, Pipecat
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-xs text-muted-foreground">Cloud</span>
                </div>
                <p className="text-sm font-medium">AWS, GCP</p>
              </div>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-5 flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <div className="flex items-center gap-2 text-rose-500 mb-2">
              <Coffee size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Fun Fact
              </span>
            </div>
            <p className="text-sm text-foreground">
              I talk to LLMs more than I talk to people some days 🤖
            </p>
          </div>

          {/* Learning */}
          <div className="col-span-2 md:col-span-1 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <BookOpen size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Learning
              </span>
            </div>
            <p className="text-sm text-foreground">
              Diving deep into AI agents, tool-use patterns & autonomous systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
