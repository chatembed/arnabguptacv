"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux/Zustand",
        "SWR",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "FastAPI", "Django", "Flask"],
    },
    {
      title: "Generative AI",
      skills: [
        "LangChain",
        "LangGraph",
        "AWS Bedrock",
        "Prompt Engineering",
        "RAG",
        "Guardrails",
      ],
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Pinecone",
        "ChromaDB",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "AWS Lambda", "AWS S3", "Docker", "Git", "CI/CD"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "Keras",
        "OpenAI",
        "Hugging Face",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Jira", "Postman", "VS Code", "Basecamp", "Figma"],
    },
    {
      title: "Other Skills",
      skills: [
        "Agile Methodologies",
        "Test-Driven Development",
        "RESTful APIs",
        "Socket.io",
        "System Design",
        "Cloud Architecture",
      ],
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <h3 className="font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
