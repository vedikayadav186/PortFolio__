import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Star, Tag, GraduationCap } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Winner",
      description: "ABB Live Project Competition 2025",
      date: "Jan 2025",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "3rd Place",
      description: "IIC Poster & Project Competition",
      date: "Sept 2024",
      icon: Medal,
      color: "text-orange-500",
    },
    {
      title: "Wolfram Award Winner",
      description: "CS Base Climate Hack Hackathon",
      date: "June 2024",
      icon: Award,
      color: "text-cyan-accent",
    },
    {
      title: "Top Performer",
      description: "Tech Pragyan",
      date: "Mar 2025",
      icon: Star,
      color: "text-yellow-400",
    },
    {
      title: "Top Finalist",
      description: "Odoo x MSU FootPrints'25",
      date: "Mar 2025",
      icon: Tag,
      color: "text-green-500",
    },
    {
      title: "1st Rank",
      description: "Intercollege Math Competition",
      date: "2021",
      icon: GraduationCap,
      color: "text-purple-500",
    },
  ];

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
              key={achievement.title + achievement.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-navy border-slate/20 text-center card-hover h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <achievement.icon className={`h-12 w-12 mb-4 ${achievement.color}`} />
                  <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-light-slate mb-2 text-center">{achievement.description}</p>
                  <span className="text-cyan-accent text-xs">{achievement.date}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
