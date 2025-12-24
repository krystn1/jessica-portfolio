import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "Nov 2023 - Present",
      title: "B.Sc. Computer Science",
      org: "Covenant University, Ogun, Nigeria",
      desc: "First class honors (4.89/5.00 CGPA). Active member of GDG and Hebron Startup Lab.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      year: "2019 - 2023",
      title: "Teaching Assistant",
      org: "Harmony International Schools",
      desc: "Developed performance tracking sheets in Excel. Supported teachers in preparing engaging resources.",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      year: "2024 - 2025",
      title: "Certifications",
      org: "Multiple Platforms",
      desc: "Python for Data Science (Udemy), Intro to Data Science (Alison), Prompt Engineering.",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm"
          >
            About Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6"
          >
            My Journey & Background
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-lg"
          >
            I am an enthusiastic and detail-oriented Computer Science student with strong skills in Python, SQL, and data analysis. 
            I love building web apps, AI-powered tools, and data dashboards. My goal is to leverage technology to solve real-world problems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
           {/* Timeline */}
           <div className="space-y-8">
             <h3 className="text-xl font-bold mb-6 font-heading">Education & Experience</h3>
             <div className="border-l-2 border-primary/20 ml-3 space-y-8 pl-8 relative">
               {timeline.map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="relative"
                 >
                   <div className="absolute -left-[41px] bg-background border-2 border-primary rounded-full p-1.5 text-primary">
                     {item.icon}
                   </div>
                   <span className="text-sm text-primary font-mono">{item.year}</span>
                   <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                   <p className="text-sm font-medium text-foreground/80">{item.org}</p>
                   <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
             </div>
           </div>

           {/* Personal Stats / Bio */}
           <div className="space-y-8">
             <h3 className="text-xl font-bold mb-6 font-heading">Why Work With Me?</h3>
             <div className="grid gap-4">
               {[
                 { title: "Problem Solver", desc: "Implemented efficient sorting algorithms to optimize computation time." },
                 { title: "Detail Oriented", desc: "4.89/5.00 CGPA reflects my commitment to excellence and precision." },
                 { title: "Tech Versatile", desc: "Fluent in Python, Java, SQL, and modern AI tools like LLMs." },
                 { title: "Collaborative", desc: "Active member of Google Developers Group (GDG) and Hebron Startup Lab." }
               ].map((stat, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="glass-card p-6 rounded-xl hover:bg-white"
                 >
                   <h4 className="font-bold text-lg mb-2">{stat.title}</h4>
                   <p className="text-muted-foreground text-sm">{stat.desc}</p>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
