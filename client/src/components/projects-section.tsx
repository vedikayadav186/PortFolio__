import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sprout, Recycle } from "lucide-react";
import { useLocation } from "wouter";

export default function ProjectsSection() {
  const [, navigate] = useLocation();
  
  const projects = [
    {
      id: "cultivai",
      title: "CultivAI - Smart Farming Tool",
      description: "AI-powered app providing weather insights, crop progress tracking, and task scheduling, alongside equipment rental, labor hiring, and secure smart contract-based transactions.",
      role: "Backend & Integration Developer",
      duration: "December 2024 – March 2025",
      technologies: ["React.js", "MongoDB", "Firebase", "Razorpay", "Python"],
      icon: Sprout,
    },
    {
      id: "digidetox",
      title: "DigidetOX - E-Waste Facility Locator",
      description: "Developed a website to locate nearby e-waste facilities, educate users on e-waste hazards, and offer credits based on recovered precious metals from properly disposed devices.",
      role: "Project Lead and Developer",
      duration: "March 2024 – May 2024",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      icon: Recycle,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-navy border-slate/20 card-hover h-full relative overflow-hidden">
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-cyan-accent to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ 
                       background: "linear-gradient(90deg, transparent, rgba(74, 144, 226, 0.2), transparent)",
                       animation: "shimmer 2s infinite"
                     }} 
                />
                <div className="absolute inset-[1px] bg-navy rounded-lg" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-4">
                    <project.icon className="h-6 w-6 text-cyan-accent mr-3" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  
                  <p className="text-light-slate mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-cyan-accent mb-2">Role: {project.role}</p>
                    <p className="text-sm text-light-slate">{project.duration}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-charcoal text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-electric-blue hover:bg-blue-600 transition-all"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
