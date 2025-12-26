import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const allProjects = [
  {
    id: 1,
    title: "Movie Data System",
    category: "Data",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800",
    description: "Built a complete movie data management system with modular scripts for CRUD operations and analytics.",
    tech: ["Python", "MongoDB", "Pandas"],
    longDesc: "This project involves a robust backend system for managing movie databases. It features automated CSV report generation using Pandas, aggregation pipelines for insights (e.g., year with most movies), and modular architecture for scalability.",
    github: "https://github.com/krystn1/movie-data-management-system"
  },
  {
    id: 2,
    title: "Emotion Detection App",
    category: "AI",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    description: "Web application that detects human emotion from uploaded images or live camera capture using AI models.",
    tech: ["Python", "AI Models", "Web Deployment"],
    longDesc: "A full-stack AI application capable of real-time emotion analysis. It integrates a database to store past captures, features a user dashboard for history viewing, and is deployed on Render for easy access.",
    github: "https://github.com/krystn1/emotion-detection-app",
    live: "https://lnkd.in/dWQvhJaW"
  },
  {
    id: 3,
    title: "LLM QA System",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Question-answering tool that connects to a Large Language Model (LLM) API with both CLI and Web interfaces.",
    tech: ["LLM API", "Python", "CLI/Web"],
    longDesc: "This tool bridges the gap between users and complex LLMs. It offers a dual-interface approach (Command Line for power users, Web UI for general users) to query and receive intelligent responses from an underlying AI model.",
    github: "https://github.com/krystn1/LLM_QA_Project_Ogbonna_23CG0343108",
    live: "https://llm-qa-project-ogbonna.onrender.com"
  },
  {
    id: 4,
    title: "Covid-19 Analysis",
    category: "Data",
     image: "https://unsplash.com/photos/j2c7yf223Mk?auto=format&fit=crop&w=800&q=80",
    description: "Cleaned and analyzed a Covid-19 dataset and visualized relationships between countries and deaths.",
    tech: ["Python", "Matplotlib", "Pandas"],
    longDesc: "A data science project focused on cleaning real-world dirty data and extracting meaningful insights. Visualizations were created to show the correlation between different demographic factors and mortality rates."
  },
  {
    id: 5,
    title: "Nike E-commerce App",
    category: "Web",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    description: "Developed a simple e-commerce app for Nike shoes using Flutter demonstrating UI widgets and state.",
    tech: ["Flutter", "Dart", "Mobile"],
    longDesc: "A cross-platform mobile application showcasing modern UI/UX principles. It includes product listings, details pages, and basic cart functionality, built with Flutter's widget system.",
    github: "https://github.com/krystn1/Nike_eCommerce_app"
  },
  {
    id: 6,
    title: "Restaurant Dashboard",
    category: "Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Interactive Excel dashboards to track and visualize restaurant order trends.",
    tech: ["Excel", "Data Viz", "Analytics"],
    longDesc: "An advanced Excel project utilizing pivot tables, slicers, and dynamic charts to create a business intelligence dashboard for restaurant management to track sales and order trends."
  },
  {
    id: 7,
    title: "CampusFlow AI",
    category: "AI",
    image: "https://images.unsplash.com/photo-1555448248-71d2a0b26dd2?auto=format&fit=crop&q=80&w=800",
    description: "AI-powered automation system that extracts assignment details and deadlines from PDFs/images using OCR and NLP, with scheduled email reminders.",
    tech: ["GCP", "OCR/NLP", "Python", "Automation", "Email API"],
    longDesc: "CampusFlow AI is an intelligent task management solution that automatically extracts assignment details and deadlines from uploaded PDFs, images, and screenshots using advanced OCR and NLP techniques. The system processes this data into structured JSON format, enabling automated task creation and tracking. Leveraging scheduled background jobs (cron), it sends timely email reminders for upcoming deadlines. Designed with cloud-ready architecture, it integrates Google Cloud services for scalable automation and future expansion.",
    github: "https://github.com/krystn1/campusflow-ai"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-8"
          >
            Selected Works
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {["All", "AI", "Data", "Web"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 ${filter === cat ? 'bg-primary text-white hover:bg-primary/90' : 'hover:bg-primary/5 hover:text-primary'}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <Button 
                     size="icon" 
                     className="rounded-full bg-white text-black hover:bg-white/90"
                     onClick={() => setSelectedProject(project)}
                   >
                     <Eye className="h-5 w-5" />
                   </Button>
                   <Button size="icon" className="rounded-full bg-primary text-white hover:bg-primary/90">
                     <Github className="h-5 w-5" />
                   </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{project.category}</Badge>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-heading">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img src={selectedProject?.image} alt={selectedProject?.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {selectedProject?.longDesc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject?.tech.map((t) => (
                <Badge key={t} variant="outline" className="text-sm py-1 px-3">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 flex-1"
                onClick={() => window.open(selectedProject?.live, "_blank")}
                disabled={!selectedProject?.live} // disables if no live link
                >
                View Live <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex-1"
                onClick={() => window.open(selectedProject?.github, "_blank")}
                disabled={!selectedProject?.github} // disables if no GitHub link
                >
                Source Code <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
