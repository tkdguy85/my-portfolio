import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
  // FRONTEND
  { name: 'HTML5', years: 5, category: ['Frontend', 'Career', 'Hobby'], proficiency: 90 },
  { name: 'CSS3 - SCSS - SASS', years: 5, category: ['Frontend', 'Career', 'Hobby'], proficiency: 90 },
  { name: 'JavaScript', years: 4, category: ['Frontend', 'Career', 'Hobby'], proficiency: 60 },
  { name: 'TypeScript', years: 3, category: ['Frontend', 'Career'], proficiency: 45 },
  { name: 'Tailwind CSS', years: 3, category: ['Frontend', 'Career'], proficiency: 75 },
  { name: 'VueJS', years: 4, category: ['Frontend', 'Career', 'Hobby'], proficiency: 55 },
  { name: 'React', years: 2, category: ['Frontend', 'Hobby'], proficiency: 45 },
  { name: 'Gatsby', years: 1, category: ['Frontend', 'Hobby'], proficiency: 25 },
  { name: 'Angular', years: 1, category: ['Frontend', 'Hobby'], proficiency: 15 },

  // BACKEND
  { name: 'Ruby on Rails', years: 4, category: ['Backend', 'Career'], proficiency: 80 },
  { name: 'FAE CMS', years: 4, category: ['Backend', 'Career'], proficiency: 80 },
  { name: 'Sanity.io', years: 1, category: ['Backend', 'Hobby'], proficiency: 30 },
  { name: 'NodeJS', years: 2, category: ['Backend', 'Career'], proficiency: 50 },
  { name: 'Python3', years: 2, category: ['Backend', 'Hobby'], proficiency: 30 },
  { name: 'PostgreSQL', years: 3, category: ['Backend', 'Career'], proficiency: 70 },
  { name: 'Git/GitHub', years: 5, category: ['Tools', 'DevOps', 'Career', 'Hobby'], proficiency: 90 },
  { name: 'MariaDB', years: 3, category: ['Backend', 'Career'], proficiency: 75 },
  { name: 'MySQL', years: 3, category: ['Backend', 'Career'], proficiency: 75 },
  { name: 'Docker', years: 2, category: ['DevOps', 'Career'], proficiency: 65 },

  // TOOLS
  { name: 'Linux', years: 2, category: ['DevOps', 'Hobby'], proficiency: 50 },
  { name: 'VSCode', years: 5, category: ['Tools', 'Career', 'Hobby'], proficiency: 95 },
  { name: 'Jenkins', years: 4, category: ['DevOps', 'Career'], proficiency: 75 },
  { name: 'Netlify', years: 3, category: ['DevOps', 'Career'], proficiency: 70 },
  { name: 'Slack', years: 4, category: ['Tools', 'Career'], proficiency: 95 },
  { name: 'Trello', years: 2, category: ['Tools', 'Hobby', 'Career'], proficiency: 80 },
  { name: 'Notion', years: 4, category: ['Tools', 'Hobby', 'Career'], proficiency: 90 },
  { name: 'Zoom', years: 5, category: ['Tools', 'Hobby', 'Career'], proficiency: 85 },
  { name: 'JIRA', years: 2, category: ['Tools', 'Hobby', 'Career'], proficiency: 90 },
  { name: 'FIGMA', years: 3, category: ['Tools', 'Hobby'], proficiency: 85 },
  { name: 'AWS', years: 1, category: ['DevOps', 'Career'], proficiency: 40 },
  { name: 'Vercel', years: 1, category: ['DevOps', 'Career'], proficiency: 50 },
]

const categories = [
  'all', 'Frontend', 'Backend', 'DevOps', 'Tools', 'Career', 'Hobby',
];

export const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState("all");
  const filteredSkills = skills.filter((skill) => {
    if (activeSkill === 'all') return true; // Show all skills if 'all' is selected
    const cats = Array.isArray(skill.category) ? skill.category : [skill.category]; // Ensure category is an array
    return cats.includes(activeSkill); // Check if skill belongs to active category
  });

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          { categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-500 capitalize",
                 activeSkill === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-primary/80 hover:text-primary-foreground"
              )}
              onClick={() => setActiveSkill(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          { filteredSkills.map((skill, key) => (
            <div 
              key={key} 
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* Skill Details */}
              <div className="text-left mb-4">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {skill.years} {skill.years === 1 ? 'year' : 'years'} exp
                </p>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full bg-background/20 rounded-full h-4 mt-4">
                <div 
                  className="bg-primary h-1 rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              {/* Proficiency Percentage */}
              <div className="text-right text-sm text-muted-foreground mt-2">
                usage - {skill.proficiency}%
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
