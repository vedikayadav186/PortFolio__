import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@assets/WhatsApp Image 2025-07-03 at 10.10.33 PM_1751561374349.jpeg";

export default function AboutSection() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Building purposeful technology that addresses real-world needs";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "9.13", color: "text-yellow-500" },
    { icon: Code2, label: "Projects", value: "5+", color: "text-green-500" },
    { icon: Briefcase, label: "Experience", value: "Intern", color: "text-blue-500" },
    { icon: MapPin, label: "Location", value: "Nashik", color: "text-purple-500" },
  ];

  return (
    <section id="about" className="py-20 bg-charcoal relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-electric-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Professional headshot */}
            <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={profileImage}
                alt="Vedika Yadav - Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-light-slate leading-relaxed">
                I'm a dedicated Information Technology student at KKWIEER with a strong academic record (CGPA: 9.13) 
                and a passion for technology innovation.
              </p>
              
              {/* Typing animation */}
              <div className="text-lg font-medium text-cyan-accent">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
              
              <p className="text-lg text-light-slate leading-relaxed">
                Recently completed an internship at ABB India Ltd., where I successfully digitalized 
                Low Voltage Systems, reducing paper usage by 80% and improving workflow efficiency.
              </p>
            </div>
            
            {/* Interactive stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="bg-navy border-slate/20 hover:border-cyan-accent/50 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`${stat.color} mb-2 flex justify-center`}
                      >
                        <stat.icon className="h-6 w-6" />
                      </motion.div>
                      <h4 className="font-bold text-xl text-white group-hover:text-cyan-accent transition-colors">
                        {stat.value}
                      </h4>
                      <p className="text-xs text-light-slate uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
