import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Dallas</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Gordon <span className="text-primary opacity-0 animate-fade-in-delay-1">III</span></span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold my-10 text-glow">Welcome to My Portfolio</h2>

        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">I'm a SoCal based full stack web developer that specializes in maintaining code. I love working in both a larger collaborative environment as well as just off to the side, in my own little playground. Peep my projects and learn more about me below. Thanks for stopping by!</p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a 
            href="#projects" 
            className="cosmic-button"
          >
            View My Work
          </a>
        </div>

        <a href="#about">   
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">C'mon down</span>
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </a>
      </div>
    </section>
  )  
}