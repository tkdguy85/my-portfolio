import { CircleArrowUp } from "lucide-react"

export const Footer = () => {
  return(
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between itemse-center">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} DG3. All rights reserved.</p>

      <a 
        href="#hero"
        className="p-3 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors duration-500 ml-auto"
      >
        <span className="sr-only">Back to top</span>
        <CircleArrowUp className="h-10 w-10 text-primary hover:text-primary/70 transition-colors duration-500" />
      </a>
    </footer>
  )
}