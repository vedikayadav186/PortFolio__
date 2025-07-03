import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 h-full w-full">
          <motion.div 
            className="bg-electric-blue rounded-full w-2 h-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="bg-cyan-accent rounded-full w-1 h-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="bg-electric-blue rounded-full w-3 h-3"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="gradient-text">Vedika</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-light-slate mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Passionate tech student with hands-on experience in web development and software project management. 
          Skilled in translating ideas into structured solutions through teamwork and strategic planning.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-electric-blue hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-2 border-cyan-accent text-cyan-accent hover:bg-cyan-accent hover:text-navy px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
