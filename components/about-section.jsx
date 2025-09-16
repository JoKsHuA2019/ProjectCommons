import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Rocket, Heart } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Research Focus",
      description:
        "Explore machine learning, neural networks, and AI technologies through guided learning and projects.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Connect with mentors who can guide you through your AI learning journey with support and advice.",
      color: "secondary",
    },
    {
      icon: Rocket,
      title: "No Experience Required",
      description:
        "Whether you're a complete beginner or have some coding background, our community welcomes all skill levels.",
      color: "accent",
    },
    {
      icon: Heart,
      title: "Completely Free",
      description:
        "Access AI education and mentorship without any cost. We believe in making AI accessible to everyone.",
      color: "primary",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-red-600/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Project Commons
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're building a supportive community that connects passionate high school students with mentors and
            learning opportunities in AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card/50 to-background/50"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/10 rounded-lg flex items-center justify-center mx-auto border border-blue-600/20">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
