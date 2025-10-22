import { ArrowDown } from "lucide-react"

function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delayed-1">
                    {" "}
                    Berthem
                </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delayed-2">
                    {" "}
                    Benitez Jr.
                </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delayed-3">
                I create stellar web experiences with modern technologies.
                Specializing in web application development and UI/UX design, I build interfaces
                that are both beautiful, functional, and innovative.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delayed-4">
                <a href="#projects" className="cosmic-button">
                    View my Work
                </a>
            </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}

export default HeroSection