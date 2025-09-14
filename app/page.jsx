"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MentorshipSection } from "@/components/mentorship-section"
import { FoundersSection } from "@/components/founders-section"
import { TeamSection } from "@/components/team-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MentorshipSection />
        <FoundersSection />
        <TeamSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
