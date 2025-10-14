import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Ashes and Diamonds",
    description: "One of my favorite sites to work on. Responsible for on-going maintenance, CMS updates, and component refreshers.",
    image: "/projects/Ashes.png",
    link: "https://ashesdiamonds.com",
    tech: ["Monolithic Rails"],
    tags: ["FINE", "RAILS", "CMS"],
    demoUrl: "",
    gitHubUrl: "" // Private Repo
  }
]

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="mb-12 text-center mx-auto max-w-2xl">Here are a few projects I've worked on recently. Want to see more?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  { project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-2 text-xs font-medium border rounded-full bg-secondary/70 text-secondary"
                    >
                      {tech}
                    </span>
                  )) }
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* TODO - Update links for FINE sites vs Hobby sites */}
                
                
                {/* FINE SITES */}
                {(project.link && project.link.length > 0) && (
                  <div className="flex justify-around items-center">
                    { project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        <ExternalLink className="inline mr-1" /> Live Site
                      </a>
                    )}
                  </div>
                )}

                {/* Personal Projects */}
                {(project.demoUrl || project.gitHubUrl) && (
                  <div className="flex justify-around items-center">
                    { project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        <ExternalLink className="inline mr-1" /> Demo Site
                      </a>
                    )}
                    { project.gitHubUrl && (
                      <a 
                        href={project.gitHubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        <Github className="inline mr-1" /> Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/tkdguy85" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check me out on GitHub <ArrowRight className="inline ml-2" size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}