"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import HeroSection from "@/components/sections/hero"
import TeamSection from "@/components/sections/team"
import AboutSection from "@/components/sections/about"
import GoalsSection from "@/components/sections/goals"
import BudgetSection from "@/components/sections/budget"
import MarketSection from "@/components/sections/market"
import MarketingSection from "@/components/sections/marketing"
import ProcessSection from "@/components/sections/process"
import LaborSection from "@/components/sections/labor"
import FinanceSection from "@/components/sections/finance"
import ConclusionSection from "@/components/sections/conclusion"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <main className="flex-1 w-full ml-0 lg:ml-64 overflow-hidden">
        <section id="home" className="min-h-screen w-full">
          <HeroSection />
        </section>

        <section id="team" className="min-h-screen w-full py-12 md:py-20">
          <TeamSection />
        </section>

        <section id="about" className="min-h-screen w-full py-12 md:py-20">
          <AboutSection />
        </section>

        <section id="goals" className="min-h-screen w-full py-12 md:py-20">
          <GoalsSection />
        </section>

        <section id="budget" className="min-h-screen w-full py-12 md:py-20">
          <BudgetSection />
        </section>

        <section id="market" className="min-h-screen w-full py-12 md:py-20">
          <MarketSection />
        </section>

        <section id="marketing" className="min-h-screen w-full py-12 md:py-20">
          <MarketingSection />
        </section>

        <section id="process" className="min-h-screen w-full py-12 md:py-20">
          <ProcessSection />
        </section>

        <section id="labor" className="min-h-screen w-full py-12 md:py-20">
          <LaborSection />
        </section>

        <section id="finance" className="min-h-screen w-full py-12 md:py-20">
          <FinanceSection />
        </section>

        <section id="conclusion" className="min-h-screen w-full py-12 md:py-20">
          <ConclusionSection />
        </section>
      </main>
    </div>
  )
}
