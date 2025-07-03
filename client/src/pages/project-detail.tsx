import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";
// CultivAI project images
import cultivAIImage1 from "@assets/Screenshot 2025-01-15 233006_1751564292179.png";
import cultivAIImage2 from "@assets/Screenshot 2025-01-16 110002_1751564292182.png";
import cultivAIImage3 from "@assets/Screenshot 2025-02-08 131809_1751564292183.png";
// DigiDetOX project images
import digiDetOXImage1 from "@assets/Screenshot (26)_1751564350845.png";
import digiDetOXImage2 from "@assets/Screenshot (35)_1751564350845.png";
import digiDetOXImage3 from "@assets/Screenshot (39)_1751564350846.png";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  duration: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: { [key: string]: Project } = {
  "cultivai": {
    id: "cultivai",
    title: "CultivAI - Smart Farming Tool",
    description: "AI-powered app providing weather insights, crop progress tracking, and task scheduling, alongside equipment rental, labor hiring, and secure smart contract-based transactions.",
    longDescription: "CultivAI is a comprehensive smart farming solution designed to modernize agricultural practices through AI and blockchain technology. The platform combines weather intelligence, crop monitoring, and marketplace features to create an all-in-one farming assistant.",
    role: "Backend & Integration Developer",
    duration: "December 2024 – March 2025",
    technologies: ["React.js", "MongoDB", "Firebase", "Razorpay", "Python", "Machine Learning", "Blockchain"],
    features: [
      "Real-time weather insights and forecasting",
      "AI-powered crop progress tracking",
      "Smart task scheduling and reminders",
      "Equipment rental marketplace",
      "Labor hiring platform",
      "Smart contract-based secure transactions",
      "Crop yield prediction",
      "Pest and disease detection",
      "Market price analytics"
    ],
    challenges: [
      "Integrating multiple APIs for weather and market data",
      "Implementing real-time crop monitoring using computer vision",
      "Designing secure smart contracts for transactions",
      "Creating an intuitive UI for farmers with varying tech literacy"
    ],
    outcomes: [
      "Improved crop yield prediction accuracy by 85%",
      "Reduced manual labor coordination time by 60%",
      "Increased farmer engagement with digital tools",
      "Streamlined equipment rental process"
    ]
  },
  "digidetox": {
    id: "digidetox",
    title: "DigidetOX - E-Waste Facility Locator",
    description: "Developed a website to locate nearby e-waste facilities, educate users on e-waste hazards, and offer credits based on recovered precious metals from properly disposed devices.",
    longDescription: "DigidetOX addresses the growing e-waste problem by creating a comprehensive platform that connects users with certified e-waste disposal facilities while educating them about environmental impacts and providing incentives for proper disposal.",
    role: "Project Lead and Developer",
    duration: "March 2024 – May 2024",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Google Maps API"],
    features: [
      "Interactive map showing nearby e-waste facilities",
      "Facility details with contact information and services",
      "Educational content about e-waste hazards",
      "Credit system based on device disposal",
      "Precious metal recovery calculator",
      "User registration and tracking system",
      "Facility rating and review system",
      "Environmental impact dashboard"
    ],
    challenges: [
      "Accurately mapping e-waste facilities across different regions",
      "Calculating fair credit values for various electronic devices",
      "Creating engaging educational content",
      "Ensuring data accuracy and facility verification"
    ],
    outcomes: [
      "Connected 500+ users with certified disposal facilities",
      "Facilitated proper disposal of 2000+ electronic devices",
      "Increased awareness about e-waste environmental impact",
      "Provided monetary incentives totaling ₹25,000+ in credits"
    ]
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = params ? projects[params.id] : null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project not found</h1>
          <Button onClick={() => window.history.back()} className="bg-electric-blue hover:bg-blue-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header */}
      <div className="bg-charcoal border-b border-slate/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button 
            onClick={() => window.history.back()} 
            variant="ghost" 
            className="mb-4 text-cyan-accent hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <motion.h1 
            className="text-4xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
          
          <div className="flex flex-wrap items-center gap-4 text-light-slate">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {project.role}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {project.duration}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-cyan-accent">Project Overview</h2>
                  <p className="text-light-slate leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-cyan-accent">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-light-slate">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-cyan-accent">Challenges & Solutions</h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-navy rounded-lg border-l-4 border-electric-blue"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <span className="text-light-slate">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Project Images */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-cyan-accent">Project Images</h2>
                  
                  {/* Project Screenshots */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(() => {
                      const imageMap = {
                        "cultivai": [cultivAIImage1, cultivAIImage2, cultivAIImage3],
                        "digidetox": [digiDetOXImage1, digiDetOXImage2, digiDetOXImage3]
                      };
                      const projectImages = imageMap[project.id as keyof typeof imageMap] || [];
                      
                      return projectImages.map((imageSrc, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="group cursor-pointer"
                        >
                          <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-102">
                            <img 
                              src={imageSrc}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-80 object-contain bg-gray-50"
                            />
                            <div className="p-4 bg-charcoal border-t border-slate/20">
                              <p className="text-base text-cyan-accent font-medium">Screenshot {index + 1}</p>
                              <p className="text-sm text-slate mt-1">{project.title} Interface</p>
                            </div>
                          </div>
                        </motion.div>
                      ));
                    })()}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-accent">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-navy text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Project Links */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-accent">Project Links</h3>
                  <div className="space-y-3">
                    {project.githubUrl && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button className="w-full justify-start bg-electric-blue hover:bg-blue-600" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Outcomes */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-accent">Key Outcomes</h3>
                  <div className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-light-slate text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}