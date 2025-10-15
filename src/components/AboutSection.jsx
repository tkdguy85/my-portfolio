import { Code, CodeXml, Waypoints, Guitar } from "lucide-react";

// TODO - UPDATE - Add more personal details, skills, and experience

export const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-10">More About <span className="text-primary">Me</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Tech Stack */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Front End Tech</h4>
                  <p className="text-sm text-muted-foreground">
                    JavaScript, VueJS, React, HTML, CSS/SASS, Tailwind CSS and more.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CodeXml className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Back End Tech</h4>
                  <p className="text-sm text-muted-foreground">
                    <a className="text-primary underline" href="https://fae-cms.com" target="_blank" rel="noopener noreferrer">FAE CMS *</a>, Ruby on Rails, NodeJS, Docker, PostgreSQL, MariaDB, Python3 and more.
                  </p>
                  <p className="text-xs text-muted-foreground pt-4">* FAE CMS is an open source CMS framework developed by the magical folks over at <a href="https://https://www.wearefine.com/" className="text-primary underline" target="_blank" rel="noopener noreferrer">FINE</a>.</p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Waypoints className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Collaboration Tools</h4>
                  <p className="text-sm text-muted-foreground">
                    Git/GitHub, Docker, JIRA, FIGMA, Slack, Zoom, KanBan and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Guitar className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Hobbies</h4>
                  <p className="text-sm text-muted-foreground">
                    Guitars, Aviation, Space tech, Hiking, Nature & Astrophotography, PC/Console Gaming, All things science, Geography, Long walks on the beach...
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Me */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-lg text-muted-foreground">
              I'm just a chill developer with a love for all things code, functional web applications, and just trying my best to make my little corner of the internet a better place. My journey in tech began with a curiosity for how things work and has since evolved into a full-fledged career.
            </p>

            {/* TODO - Add more details about my skills and experience */}
            <p className="text-lg text-muted-foreground pt-8">
              I enjoy working in both front-end and back-end environments. In my most recent role, I was responsible for maintaining and enhancing over 90+ existing codebases. Some monolithic Rails, some with a headless CMS and VueJS front ends, and many things in between.
            </p> 
            <p className="text-lg text-muted-foreground pt-8">
              Working with fellow developers, designers, and project managers to deliver high-quality solutions that meet client needs is something I truly enjoy. I'm also the sole builder and maintainer of a very special to me site built for my lovely wife's voiceover business, which you can check out <a href="https://www.salenamvo.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">here</a>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
              <a href="#projects" className="cosmic-button">Check out my work</a>
              <a 
                href="/my-portfolio/dg3_resume.pdf" 
                target="_blank" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-500"
              >Download My CV</a>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};
