import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {/* Professional headshot placeholder */}
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-electric-blue to-cyan-accent rounded-2xl flex items-center justify-center">
              <User className="text-6xl text-white" />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-light-slate leading-relaxed">
              I'm a dedicated Information Technology student at KKWIEER with a strong academic record (CGPA: 9.13) 
              and a passion for building purposeful technology that addresses real-world needs.
            </p>
            <p className="text-lg text-light-slate leading-relaxed">
              Currently working as a Project Intern at ABB India Ltd., where I've successfully digitalized 
              Low Voltage Systems, reducing paper usage by 80% and improving workflow efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-navy border-slate/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="h-4 w-4 text-cyan-accent" />
                    <h4 className="font-semibold text-cyan-accent">Education</h4>
                  </div>
                  <p className="text-sm text-light-slate">B.Tech IT, CGPA: 9.13</p>
                </CardContent>
              </Card>
              
              <Card className="bg-navy border-slate/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-cyan-accent" />
                    <h4 className="font-semibold text-cyan-accent">Location</h4>
                  </div>
                  <p className="text-sm text-light-slate">Nashik, Maharashtra</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
