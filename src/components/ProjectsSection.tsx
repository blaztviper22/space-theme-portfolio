import { ArrowRight, GitBranch } from "lucide-react";
import bluffImg from "../assets/bluff.jpg";
import caosEngineImg from "../assets/caos-engine-app.jpg";
import taloonImg from "../assets/talon-page.jpg";


const projects = [
    {
        id: 1,
        title: "Bluff",
        description: "A blockchain-based decentralized application (dApp) that enables users to play a game of bluffing with cryptocurrency wagers. Built using Solidity for smart contracts, React for the frontend, and Hardhat for development and testing.",
        image: bluffImg,
        tags: ["Solidity", "React", "Hardhat", "Ethereum", "Web3"],
        githubUrl: "https://github.com/HansLove/Bluff_casino_front.git",
    },
    {
        id: 2,
        title: "Caos Engine",
        description: "A online crypto mining platform that allows users to mine various cryptocurrencies using their web browsers. Built with Node.js for the backend, React for the frontend, and WebSocket for real-time mining statistics.",
        image: caosEngineImg,
        tags: ["Node.js", "React", "WebSocket", "Cryptocurrency"],
        githubUrl: "https://github.com/HansLove/CaosEngine-Front.git",
    },
    {
        id: 3,
        title: "Taloon Studio back office",
        description: "A web based to manage all api's of Taloon Studio web 3 projects. Built with React for the frontend and Express.js for the backend, manages web3 integrations and smart contracts exclusively for Taloon studio.",
        image: taloonImg,
        tags: ["React", "Express.js", "Web3"],
        githubUrl: "https://github.com/HansLove/taloon-back-office-frontend.git",
    },
]

function ProjectsSection() {
  return (
    <section 
     id="projects"
     className="py-4 px-4 relative bg-secondary/30"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {" "}
        Featured <span className="text-primary"> Projects</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        A showcase of my favorite projects built with modern web 3 technologies
        and certificates. Each project highlights my skills in blockchain development,
        smart contracts, and decentralized applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-40">
        {projects.map((project, key) => (
          <div 
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            key={key}>
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground ">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitBranch size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://github.com/blaztviper22" 
          target="_blank" 
          className="cosmic-button w-fit items-center mx-auto gap-2 inline-flex"
        >
          <span>Check my GitHub</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection