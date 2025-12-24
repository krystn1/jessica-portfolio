import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/soft_pink_abstract_data_background.png";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = ["Computer Science Student", "AI Enthusiast", "Data Scientist", "Machine Learning Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-background" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
            Available for Internships & Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-foreground">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Jessica Ogbonna
            </span>
          </h1>
          
          <div className="h-8 md:h-12">
            <span className="text-xl md:text-3xl font-mono text-muted-foreground">
              I am a {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Passionate about solving real-world problems through AI, data analysis, and algorithm design. 
            First-class Computer Science student at Covenant University.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25"
              onClick={scrollToProjects}
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 h-12 text-base border-primary/20 hover:bg-primary/5 text-foreground bg-white/50 backdrop-blur-sm"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4 text-muted-foreground">
             <a href="https://github.com/krystn1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
               <Github className="h-6 w-6" />
             </a>
             <a href="https://linkedin.com/in/jessica-ogbonna-k" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
               <Linkedin className="h-6 w-6" />
             </a>
             <a href="mailto:ogbonnajessy1@gmail.com" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
               <Mail className="h-6 w-6" />
             </a>
          </div>
        </motion.div>

        {/* Abstract/Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square">
             {/* Decorative circles */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
             <div className="absolute top-10 right-10 w-24 h-24 bg-purple-200/50 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
             <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-200/50 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s' }} />
             
             {/* Glass Card showing stats */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glass rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">JO</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Jessica Ogbonna</h3>
                  <p className="text-muted-foreground">Data & AI Specialist</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary/5 p-4 rounded-xl">
                    <p className="text-2xl font-bold text-primary">4.89</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">CGPA</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-xl">
                    <p className="text-2xl font-bold text-primary">1st</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Class Honors</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
