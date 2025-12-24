import { motion } from "framer-motion";
import { Code2, Database, Brain, Wrench } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const skills = [
    {
      category: "Programming",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Dart", level: 70 }
      ]
    },
    {
      category: "AI & Data Science",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      items: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis (Pandas/NumPy)", level: 90 },
        { name: "Generative AI / LLMs", level: 80 },
        { name: "Prompt Engineering", level: 95 }
      ]
    },
    {
      category: "Tools & Frameworks",
      icon: <Wrench className="h-6 w-6 text-orange-500" />,
      items: [
        { name: "Flutter", level: 75 },
        { name: "Matplotlib/Seaborn", level: 85 },
        { name: "Excel (Advanced)", level: 90 },
        { name: "Microsoft Office", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
              Technical Skills & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Proficiencies
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My technical foundation is built on a strong understanding of computer science principles, 
              combined with practical experience in modern AI and data tools. I constantly learn and adapt 
              to new technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background rounded-xl border border-border">
                <h3 className="text-3xl font-bold text-primary mb-1">3+</h3>
                <p className="text-sm text-muted-foreground">Years Coding</p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border">
                <h3 className="text-3xl font-bold text-purple-600 mb-1">10+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary rounded-lg">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-secondary" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
