"use client"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Database, Cpu } from "lucide-react"

export function MentorshipSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Getting Started",
      description: "Learn the basics of AI concepts, machine learning fundamentals, and Python programming.",
      duration: "Self-paced",
      level: "Beginner",
    },
    {
      icon: Code,
      title: "Project-Based Learning",
      description: "Work on hands-on projects to explore different areas of AI and machine learning.",
      duration: "Ongoing",
      level: "All Levels",
    },
    {
      icon: Database,
      title: "Research Exploration",
      description: "Learn about current AI research and explore topics that interest you most.",
      duration: "Flexible",
      level: "Intermediate+",
    },
    {
      icon: Cpu,
      title: "Community Learning",
      description: "Connect with peers and mentors to learn together and share knowledge.",
      duration: "Ongoing",
      level: "All Levels",
    },
  ]

  const scrollToCommunity = () => {
    document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="mentorship" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Learning Opportunities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore different ways to learn about AI, from beginner-friendly introductions to collaborative projects
            with peers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="border-border/50 hover:border-secondary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <program.icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{program.duration}</span>
                  <span>{program.level}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-lg font-medium transition-all bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg transform hover:scale-105 duration-200 border-0"
            onClick={scrollToCommunity}
          >
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  )
}
