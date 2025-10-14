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
            <span className="opacity-0 animate-fade-in">Hello I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Dallas</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Gordon III</span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold my-4 text-glow">Welcome to My Portfolio</h2>
        
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">I'm Dallas, a passionate developer specializing in creating beautiful and functional web applications. Explore my projects and get to know more about me!</p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a 
            href="#projects" 
            className="cosmic-button"
          >
            View My Work
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">C'mon down</span>
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>

        {/* Decorative floating elements */}
        {/* <div className="absolute top-10 left-10 w-16 h-16 bg-primary rounded-full opacity-20 animate-float"></div> */}
        {/* <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary rounded-full opacity-20 animate-float animation-delay-2000"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-accent rounded-full opacity-20 animate-float animation-delay-4000"></div> */}
      </div>
    </section>
  )  
}