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
  },
  {
    id: 2,
    name: "PAE Engineers",
    description: "An engineering firm's site that was constantly evolving. I worked through page layout redesigns and frequent content updates.",
    image: "/projects/PAE.png",
    link: "https://paeengineers.com",
    tech: ["Monolithic Rails"],
    tags: ["FINE", "RAILS", "CMS"],
    demoUrl: "",
    gitHubUrl: "" // Private Repo
  },
  {
    id: 3,
    name: "Frank Family Vineyards",
    description: "A family-owned winery's website that I helped redesign and update.",
    image: "/projects/FFV.png",
    link: "https://frankfamilyvineyards.com",
    tech: ["WordPress", "Monolithic Rails"],
    tags: ["FINE", "WORDPRESS", "E-COMMERCE"],
    demoUrl: "",
    gitHubUrl: "" // Private Repo
  },
  {
    id: 4,
    name: "Curator Hotels",
    description: "A boutique hotel chain's website that I supported several full page updates.",
    image: "/projects/Curator.png",
    link: "https://curatorhotels.com",
    tech: ["VueJS", "FAE CMS"],
    tags: ["FINE", "RAILS", "CMS", "VUEJS"],
    demoUrl: "",
    gitHubUrl: "" // Private Repo
  }, 
  {
    id: 5,
    name: "Rubicon TP",
    description: "A tech investment group that I contributed to by re-building the home features.",
    image: "/projects/Rubicon.png",
    link: "https://rubicontp.com",
    tech: ["VueJS", "FAE CMS"],
    tags: ["FINE", "RAILS", "CMS", "VUEJS"],
    demoUrl: "",
    gitHubUrl: "" // Private Repo
  },
  {
    id: 6,
    name: "Vista Point Advisors",
    description: "My personal portfolio site built with React and Tailwind CSS, showcasing my projects and skills.",
    image: "/projects/VPA.png",
    link: "https://vistapointadvisors.com",
    tech: ["VueJS", "FAE CMS"],
    tags: ["FINE", "RAILS", "CMS", "VUEJS"],
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
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
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
                  <div className="flex justify-around items-center mt-auto">
                    { project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        <ExternalLink size={20} className="inline mr-1" /> Live Site
                      </a>
                    )}
                    <p>A <a href="https://www.wearefine.com/" className="text-primary" target="_blank" rel="noopener noreferrer">FINE</a> site</p>
                  </div>
                )}

                {/* Personal Projects */}
                {(project.demoUrl || project.gitHubUrl) && (
                  <div className="flex justify-around items-center mt-auto">
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