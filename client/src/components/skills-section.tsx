import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Award } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "📜" },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "PHP", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🗄️" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: [
        { name: "Firebase", icon: "🔥" },
        { name: "Power Apps", icon: "⚡" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Git", icon: "📊" },
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
            >
              <Card className="bg-charcoal border-slate/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <category.icon className="h-5 w-5 text-cyan-accent" />
                    <h3 className="text-xl font-semibold text-cyan-accent">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2">
                        <span>{skill.icon}</span>
                        <span className="text-white">{skill.name}</span>
                      </div>
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
