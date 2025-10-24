import { BarChart, Code, Cpu } from "lucide-react"

function AboutSection() {
  return (
    <section id="about" className="py-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web3 Application (Blockchain) and Data Analyst
            </h3>

            <p className="text-muted-foreground">
              With 1 year of experience in blockchain development and data analysis, 
              I specialize in creating dynamic and user-friendly web applications that deliver exceptional user experiences. 
              My expertise lies in blockchain development, UI/UX design, and data visualization, 
              allowing me to build interfaces that are not only visually appealing but also highly functional.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex problems,
              and I thrive in collaborative environments where innovation and creativity are encouraged.
              Let's work together to bring your ideas to life and create impactful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In touch
              </a>

              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Application Development</h4>
                    <p className="text-muted-foreground">
                    I build fast, accessible, and maintainable web applications using modern tools and component-driven design. 
                    I focus on delivering intuitive user experiences, optimizing performance, 
                    and writing clean, testable code that scales.
                    </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Embedded Application Developer</h4>
                  <p className="text-muted-foreground">
                    I specialize in developing embedded applications that require a deep understanding of hardware and software integration.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Analyzing complex datasets to extract meaningful insights and drive data-informed decision-making.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection