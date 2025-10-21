import Navbar from "../components/Navbar"
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


        {/* Footer */}
    </div>
  )
}

export default Home