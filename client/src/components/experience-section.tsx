import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        {/* Experience */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-8">
            <Building2 className="h-6 w-6 text-cyan-accent" />
            <h3 className="text-2xl font-semibold text-cyan-accent">Professional Experience</h3>
          </div>
          
          <Card className="bg-charcoal border-slate/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">Project Intern</h4>
                  <p className="text-electric-blue font-medium">ABB India Ltd.</p>
                </div>
                <span className="text-light-slate">Aug 2024 – Jan 2025</span>
              </div>
              <p className="text-light-slate mb-4">
                Digitalized Low Voltage Systems, reducing paper usage by 80% and improving workflow efficiency 
                through project tracking and design updates applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-navy text-white">Power Apps</Badge>
                <Badge variant="secondary" className="bg-navy text-white">Power Automate</Badge>
                <Badge variant="secondary" className="bg-navy text-white">SharePoint</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-8">
            <GraduationCap className="h-6 w-6 text-cyan-accent" />
            <h3 className="text-2xl font-semibold text-cyan-accent">Education</h3>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-charcoal border-slate/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">B.Tech in Information Technology</h4>
                    <p className="text-electric-blue">KKWIEER</p>
                    <p className="text-cyan-accent font-semibold">CGPA: 9.13</p>
                  </div>
                  <span className="text-light-slate">Nov 2022 - Present</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold">HSC</h4>
                  <p className="text-electric-blue">GES H.P.T. Arts and R.Y.K. Science College</p>
                  <p className="text-cyan-accent font-semibold">88.83%</p>
                  <span className="text-light-slate text-sm">March 2022</span>
                </CardContent>
              </Card>
              
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold">SSC</h4>
                  <p className="text-electric-blue">Y.D. Bytco Girls High School</p>
                  <p className="text-cyan-accent font-semibold">93.60%</p>
                  <span className="text-light-slate text-sm">March 2020</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
