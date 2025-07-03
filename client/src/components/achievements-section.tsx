import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, Star, Tag, GraduationCap, Upload, X } from "lucide-react";
import { useState } from "react";

export default function AchievementsSection() {
  const [uploadedImages, setUploadedImages] = useState<{[key: string]: string}>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const achievements = [
    {
      id: "abb-winner",
      title: "Winner",
      description: "ABB Live Project Competition 2025",
      date: "Jan 2025",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      id: "iic-3rd",
      title: "3rd Place",
      description: "IIC Poster & Project Competition",
      date: "Sept 2024",
      icon: Medal,
      color: "text-orange-500",
    },
    {
      id: "wolfram-award",
      title: "Wolfram Award Winner",
      description: "CS Base Climate Hack Hackathon",
      date: "June 2024",
      icon: Award,
      color: "text-cyan-accent",
    },
    {
      id: "tech-pragyan",
      title: "Top Performer",
      description: "Tech Pragyan",
      date: "Mar 2025",
      icon: Star,
      color: "text-yellow-400",
    },
    {
      id: "odoo-finalist",
      title: "Top Finalist",
      description: "Odoo x MSU FootPrints'25",
      date: "Mar 2025",
      icon: Tag,
      color: "text-green-500",
    },
    {
      id: "math-competition",
      title: "1st Rank",
      description: "Intercollege Math Competition",
      date: "2021",
      icon: GraduationCap,
      color: "text-purple-500",
    },
  ];

  const handleImageUpload = (achievementId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImages(prev => ({
          ...prev,
          [achievementId]: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (achievementId: string) => {
    setUploadedImages(prev => {
      const newImages = { ...prev };
      delete newImages[achievementId];
      return newImages;
    });
  };

  return (
    <section id="achievements" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements & Recognition
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onHoverStart={() => setHoveredCard(achievement.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group perspective-1000"
            >
              <Card className="bg-navy border-slate/20 text-center card-hover h-full relative overflow-hidden">
                {/* Animated background glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${achievement.color.replace('text-', 'from-').replace('-500', '-500/20').replace('-400', '-400/20')} to-transparent`} />
                
                <CardContent className="p-6 flex flex-col items-center relative z-10">
                  {/* Image display area */}
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-charcoal/50 border-2 border-dashed border-slate/30 relative">
                    {uploadedImages[achievement.id] ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={uploadedImages[achievement.id]} 
                          alt={achievement.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <Button
                          size="sm"
                          variant="destructive"
                          className="absolute top-1 right-1 h-6 w-6 p-0"
                          onClick={() => removeImage(achievement.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center hover:bg-charcoal/70 transition-colors">
                        <Upload className="h-6 w-6 text-slate mb-2" />
                        <span className="text-xs text-slate">Upload Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(achievement.id, e)}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  <motion.div
                    animate={{ 
                      scale: hoveredCard === achievement.id ? 1.1 : 1,
                      rotate: hoveredCard === achievement.id ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <achievement.icon className={`h-12 w-12 mb-4 ${achievement.color}`} />
                  </motion.div>
                  
                  <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-light-slate mb-2 text-center">{achievement.description}</p>
                  <motion.span 
                    className="text-cyan-accent text-xs font-medium"
                    animate={{ 
                      color: hoveredCard === achievement.id ? "#00BCD4" : "#4A90E2"
                    }}
                  >
                    {achievement.date}
                  </motion.span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
