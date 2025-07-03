import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full w-full p-8">
          {[...Array(24)].map((_, i) => (
            <motion.div 
              key={i}
              className={`${i % 3 === 0 ? 'bg-electric-blue' : 'bg-cyan-accent'} rounded-full`}
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 8 + 4 + 'px',
              }}
              animate={{ 
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: Math.random() * 3 + 2, 
                repeat: Infinity,
                delay: Math.random() * 2 
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-cyan-accent/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-electric-blue/20 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-8 h-8 bg-cyan-accent/30 transform rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <motion.span 
            className="gradient-text"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(90deg, #4A90E2, #00BCD4, #4A90E2, #00BCD4)",
              backgroundSize: "400% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Vedika
          </motion.span>
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
