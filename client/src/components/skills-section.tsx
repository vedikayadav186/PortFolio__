import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Award } from "lucide-react";
import { useState } from "react";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", icon: "⚛️", level: 85 },
        { name: "HTML5", icon: "🌐", level: 95 },
        { name: "CSS3", icon: "🎨", level: 90 },
        { name: "JavaScript", icon: "📜", level: 80 },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", icon: "🐍", level: 85 },
        { name: "PHP", icon: "🐘", level: 75 },
        { name: "MongoDB", icon: "🍃", level: 80 },
        { name: "MySQL", icon: "🗄️", level: 85 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Firebase", icon: "🔥", level: 80 },
        { name: "Power Apps", icon: "⚡", level: 90 },
        { name: "Bootstrap", icon: "🅱️", level: 85 },
        { name: "Git", icon: "📊", level: 75 },
      ],
    },
  ];

  const certifications = [
    {
      title: "Android App Development Using Kotlin",
      organization: "Spoken Tutorial Project, IIT Bombay",
      description: "Mobile app architecture, layout structuring, and UI flows",
      date: "March 15th, 2025",
    },
    {
      title: "Data Science using Python",
      organization: "Brainovision Solutions India Pvt. Ltd.",
      description: "Data analysis and machine learning concepts",
      date: "Feb 19-23, 2024",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Certifications
        </motion.h2>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-charcoal border-slate/20 h-full relative overflow-hidden">
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute inset-[1px] bg-charcoal rounded-lg" />
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center space-x-2 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="h-6 w-6 text-cyan-accent" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-cyan-accent">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name} 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <motion.span 
                              className="text-lg"
                              animate={{ 
                                scale: hoveredSkill === skill.name ? 1.3 : 1,
                                rotate: hoveredSkill === skill.name ? [0, -10, 10, 0] : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-cyan-accent text-sm font-semibold">{skill.level}%</span>
                        </div>
                        
                        {/* Animated progress bar */}
                        <div className="w-full bg-navy rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-8">
            <Award className="h-6 w-6 text-cyan-accent" />
            <h3 className="text-2xl font-semibold text-cyan-accent">Certifications & Training</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-charcoal border-slate/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                    <p className="text-electric-blue text-sm mb-2">{cert.organization}</p>
                    <p className="text-light-slate text-sm mb-2">{cert.description}</p>
                    <Badge variant="outline" className="text-cyan-accent border-cyan-accent">
                      {cert.date}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
