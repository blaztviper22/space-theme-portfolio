import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Background Effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>

        {/* Footer */}
    </div>
  )
}

export default Home