import { Mail, Phone, MapPin, Linkedin, Instagram, Github} from "lucide-react"


export const ContactSection = () => {
  return (
    <section
     id="contact"
     className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together? Feel free to reach out below! <br/> I am currently open to new opportunities and collaborations.
        </p>

        <div className="flex mx-auto max-w-2xl flex-col items-center text-left">
          <div className="space-y-8">
            <div className="space-y-6 justify-center">
              
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:dallasgordon3@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-500"
                  >
                    dallasgordon3@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start space-x-4">            
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>        
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+17087693893" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-500"
                  >
                    +1 (708) 769-3893
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Oceanside, CA, 92056 USA</p>
                </div>
              </div>              
            </div>

            {/* Social Media */}
            <div className="pt-8 text-center">
              <h3 className="text-2xl font-medium mb-4"> Socials</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/tkdguy85/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a 
                  href="https://www.instagram.com/tkdguy85/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a 
                  href="https://github.com/tkdguy85" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}