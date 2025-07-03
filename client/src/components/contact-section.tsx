import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github } from "lucide-react";
import { downloadResume } from "@/lib/utils";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vdyadav370822@kkwagh.edu.in",
      href: "mailto:vdyadav370822@kkwagh.edu.in",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 90282 28545",
      href: "tel:+919028228545",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "vedikayadav186",
      href: "https://github.com/vedikayadav186",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="text-lg text-light-slate mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new opportunities and innovative projects. 
          Let's build something amazing together!
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-charcoal border-slate/20">
                <CardContent className="p-6">
                  <contact.icon className="h-8 w-8 text-cyan-accent mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="text-light-slate text-sm hover:text-cyan-accent transition-colors"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-light-slate text-sm">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild
            className="bg-electric-blue hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <a href="mailto:vdyadav370822@kkwagh.edu.in">
              Send Email
            </a>
          </Button>
          
          <Button 
            variant="outline"
            onClick={downloadResume}
            className="border-2 border-cyan-accent text-cyan-accent hover:bg-cyan-accent hover:text-navy px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
