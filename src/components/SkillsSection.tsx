import React from "react";
import { cn } from "../utilities/utils";


const Skills = [
    // Frontend
    { name: 'HTML', category: 'Frontend', level: 'Advanced' },
    { name: 'React', category: 'Frontend', level: 'Advanced' },
    { name: 'JavaScript', category: 'Frontend', level: 'Advanced' },
    { name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
    { name: 'CSS', category: 'Frontend', level: 'Intermediate' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Intermediate' },
    { name: 'Next.js', category: 'Frontend', level: 'Intermediate' },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 'Intermediate' },
    { name: 'Express.js', category: 'Backend', level: 'Intermediate' },
    { name: 'MongoDB', category: 'Backend', level: 'Intermediate' },
    { name: 'SQL', category: 'Backend', level: 'Basic' },
    { name: 'PostgreSQL', category: 'Backend', level: 'Basic' },
    { name: 'Django', category: 'Backend', level: 'Basic' },

    // Data Science
    { name: 'Python', category: 'Data Science', level: 'Intermediate' },
    { name: 'R', category: 'Data Science', level: 'Basic' },
    { name: 'Pandas', category: 'Data Science', level: 'Intermediate' },
    { name: 'NumPy', category: 'Data Science', level: 'Intermediate' },
    { name: 'Matplotlib', category: 'Data Science', level: 'Basic' },
    { name: 'SQL', category: 'Data Science', level: 'Basic' },

    // Embedded Systems
    { name: 'Rust', category: 'Embedded Systems', level: 'Basic' },

    // Tools
    { name: 'Git', category: 'Tools', level: 'Advanced' },
    { name: 'Docker', category: 'Tools', level: 'Intermediate' },
    { name: 'Figma', category: 'Tools', level: 'Basic' },
    { name: 'Postman', category: 'Tools', level: 'Basic' },
    { name: 'VS Code', category: 'Tools', level: 'Advanced' },
];

const categories = ['All', 'Frontend', 'Backend', 'Data Science', 'Embedded Systems', 'Tools'];

function SkillsSection() {
    const [activeCategory, setActiveCategory] = React.useState<string>('All');
    
    const filteredSkills = Skills.filter(skill =>
        activeCategory === 'All' || skill.category === activeCategory
    );

  return (
    <section 
     id="skills"
     className="py-4 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My
                <span className="text-primary">
                    {" "}
                    Skills
                </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-secondary/70 text-muted-foreground hover:bg-secondary"
                        )}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                            <p className="text-sm text-gray-500">{skill.category}</p>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }} 
                            />
                        </div>

                        <div className="text-right mt-2">
                            <span className="text-sm text-muted-foreground">{skill.level}</span>
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    </section>
  )
}

export default SkillsSection