import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]


export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled down
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  // Handle scroll to add shadow and background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll); // Listen for scroll events
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
  }, []);
  
  return ( 
    <nav 
      className={cn(
        "fixed w-full z-40 transition-all duration-30", "bg-background", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5 bg-background/0"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-foreground flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-primary">DG3</span> Portfolio
          </span> 
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-foreground/80 hover:text-primary/80 transition-colors duration-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE NAV */}
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-foreground/80 hover:text-primary/80 transition-colors duration-500 z-50"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        > 
          {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
        
        {/* Mobile menu overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg:background/95 backdrop-blur-md z-40 flex flex-col", 
            "items-center justify-center transition-all duration-500 md:hidden",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary/80 transition-colors duration-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}