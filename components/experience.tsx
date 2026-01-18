"use client";

import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const jobs = [
  {
    company: "Rezolve AI",
    role: "Full Stack Gen AI Developer", // Update this with your actual role
    startDate: "December 2025",
    endDate: "Present",
    duration: "Current",
    isCurrent: true,
    description:
      "Building next-generation AI solutions.", // Update with your actual work
    highlights: [
      "AI/ML Development",
      "Full Stack",
      // Add more highlights
    ],
  },
  {
    company: "Weavers Web Solution Pvt Ltd",
    role: "Software Developer", // Update this with your actual role
    startDate: "June 2022",
    endDate: "November 2025",
    duration: "3.5 years",
    isCurrent: false,
    description:
      "Developed and maintained web applications and backend systems.", // Update with your actual work
    highlights: [
      "Web Development",
      "Backend Systems",
      // Add more highlights
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        {/* Bento Grid for Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-colors ${
                job.isCurrent
                  ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 hover:border-primary/50"
                  : "bg-background border border-border hover:border-primary/30"
              }`}
            >
              {/* Current badge */}
              {job.isCurrent && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Current Role
                  </span>
                </div>
              )}

              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pt-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-primary font-medium mt-1">{job.role}</p>
                  </div>
                  <div className="shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        job.isCurrent
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Briefcase size={24} />
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>
                      {job.startDate} — {job.endDate}
                    </span>
                  </div>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                    {job.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {job.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${
                        job.isCurrent
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline connector - visual element */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <ArrowRight size={16} />
            <span>Building the future with AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}

