import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #0a0e27 0%, #1a1d29 50%, #0a0e27 100%)",
              "linear-gradient(135deg, #162447 0%, #1e2749 50%, #0a0e27 100%)",
              "linear-gradient(135deg, #0a0e27 0%, #2d1b69 50%, #1a1d29 100%)",
              "linear-gradient(135deg, #0a0e27 0%, #1a1d29 50%, #0a0e27 100%)"
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Subtle color waves */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(0, 188, 212, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Animated matrix-like background */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(40)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute bg-gradient-to-b from-transparent via-electric-blue to-transparent"
            style={{
              left: `${(i * 2.5) % 100}%`,
              top: `${Math.random() * 100}%`,
              width: '2px',
              height: `${Math.random() * 40 + 20}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0, 1, 0],
              y: ['-100%', '0%', '100%'],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <motion.div 
            key={`cyan-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-cyan-accent to-transparent"
            style={{
              left: `${(i * 3.3) % 100}%`,
              top: `${Math.random() * 100}%`,
              width: '1px',
              height: `${Math.random() * 30 + 15}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleY: [0, 1, 0],
              y: ['100%', '0%', '-100%'],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating particles and orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-electric-blue/40' : i % 3 === 1 ? 'bg-cyan-accent/40' : 'bg-purple-500/30'}`}
            style={{
              width: Math.random() * 8 + 3 + 'px',
              height: Math.random() * 8 + 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Large floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-electric-blue/20' : 'bg-cyan-accent/20'} blur-sm`}
            style={{
              width: Math.random() * 60 + 40 + 'px',
              height: Math.random() * 60 + 40 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Professional geometric overlay with tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 border border-electric-blue/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-16 h-16 border border-cyan-accent/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        

        
        {/* Circuit-like patterns */}
        <motion.div
          className="absolute top-40 left-1/2 w-px h-16 bg-electric-blue/20"
          animate={{ 
            scaleY: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-40 left-1/2 w-16 h-px bg-electric-blue/20"
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
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
