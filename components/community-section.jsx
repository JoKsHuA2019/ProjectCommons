"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Instagram, MessageCircle, Users, Calendar } from "lucide-react"

export function CommunitySection() {
  const openInstagram = () => {
    window.open("https://www.instagram.com/projectcommons.ai/", "_blank")
  }

  const openDiscord = () => {
    window.open("https://discord.gg/RC97gBEFNp", "_blank")
  }

  const learnMore = () => {
    const element = document.getElementById("about")
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="community" className="py-20 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-red-600/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with fellow AI enthusiasts, share your projects, and stay updated with the latest in AI research and
            community events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card5/50 to-background/50">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl flex items-center justify-center mx-auto">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Instagram</h3>
                <p className="text-muted-foreground">
                  Follow us for AI insights, student spotlights, and behind-the-scenes content from our community.
                </p>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 text-white shadow-xs hover:from-pink-600 hover:to-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50"
                onClick={openInstagram}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Follow @ProjectCommons
              </button>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card5/50 to-background/50">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl flex items-center justify-center mx-auto">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Discord</h3>
                <p className="text-muted-foreground">
                  Join our Discord server for real-time discussions, study groups, and mentorship opportunities.
                </p>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-blurple-500 via-blurple-400 to-blue-500 text-white shadow-xs hover:from-blurple-600 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple-500/50"
                onClick={openDiscord}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Discord Server
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mx-auto">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold">Growing Community</h4>
            <p className="text-sm text-muted-foreground">Passionate high school AI enthusiasts</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mx-auto">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold">Regular Events</h4>
            <p className="text-sm text-muted-foreground">Workshops, talks, and learning sessions</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mx-auto">
              <MessageCircle className="h-6 w-6 text-red-600" />
            </div>
            <h4 className="font-semibold">Community Support</h4>
            <p className="text-sm text-muted-foreground">Peer and mentor support network</p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Ready to Start Your AI Journey?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center justify-center h-10 px-6 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xs hover:from-blue-700 hover:to-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              onClick={openDiscord}
            >
              Sign Up Now
            </button>
            <button
              onClick={learnMore}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md text-sm font-medium transition-all border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
