import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react";
// import { useToast } from "@/hooks/use-toast" -- Mock setup for future use


// TODO - IMPLEMENT - Message card component for displaying individual messages in the contact section --- Maybe in the future?

//? Noting this would use React Toast for success/failure messages on submission
export const MessageCard = () => {
  // const { toast } = useToast(); -- Mock setup for future use

  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Indicate form is submitting
    
    // Handle form submission logic here (e.g., send data to an API or email service)
    setTimeout(() => {
      // toast({
      //   title: "Success",
      //   description: "Your message has been sent.",
      //   variant: "success",
      // });
      console.log("Form submitted");
    }, 2000); // Simulate a network request

    setIsSubmitting(false); // Reset submitting state
  };
  
  return (
    <section>
      {/* Contact Form - To be implemented */}
      <div className="bg-card p-8 rounded-lg shadow-xs">
        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

        <form className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium mb-1 text-left"
            >
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              placeholder="Your Name"
              required 
            />
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium mb-1 text-left"
            >
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium mb-1 text-left"
            >
              Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="4"
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit} 
            className={cn(
              "cosmic-button w-full flex items-center justify-center gap-2",

            )}
          >
            Send Message
            <Send size={16} />
          </button>
        </form>

      </div>

    </section>
  )
}