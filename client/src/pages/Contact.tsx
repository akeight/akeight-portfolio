import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:allysonkeightley@outlook.com',
      label: 'allysonkeightley@outlook.com'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/akeight',
      label: 'github.com/akeight'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/allyson-keightley',
      label: 'linkedin.com/in/allysonkeightley'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">Let's Connect</h1>
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new opportunities, collaborations, or just chatting about tech and product.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md hover:shadow-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-muted-foreground">{link.label}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6"
            >
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Currently Available
              </h3>
              <p className="text-sm text-muted-foreground">
                Seeking SWE and PM internship opportunities for Summer 2025. 
                Open to freelance projects and open source collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I typically respond within 24-48 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;