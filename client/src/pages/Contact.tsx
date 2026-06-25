import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GiantHeading } from '../components/GiantHeading';
import { AnimatedUnderline } from '../components/fancy/underline-animation';
import { ScrollReveal } from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Validation Error', {
        description: 'Please fill in all fields correctly.',
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'mwpavkqr';
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent!', {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Error Sending Message', {
        description:
          'Failed to send message. Please try again or email me directly at allysonkeightley@outlook.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'Email', href: 'mailto:allysonkeightley@outlook.com', label: 'allysonkeightley@outlook.com' },
    { name: 'GitHub', href: 'https://github.com/akeight', label: 'github.com/akeight' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/allyson-keightley', label: 'linkedin.com/in/allysonkeightley' },
  ];

  return (
    <div className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <header className="mb-16 space-y-5">
          <span className="eyebrow">Contact</span>
          <GiantHeading as="h1" text="Let's connect." />
        </header>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: info */}
          <div className="space-y-12">
            <p className="max-w-md text-lg text-muted-foreground">
              I'm always open to discussing new opportunities, collaborations, or just chatting
              about tech and product.
            </p>

            <div className="space-y-1">
              {socialLinks.map((link, index) => (
                <ScrollReveal
                  as="div"
                  key={link.name}
                  delay={index * 0.05}
                  className="border-t border-foreground/10 py-5"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {link.name}
                    </span>
                    <span className="text-base font-medium md:text-lg">
                      <AnimatedUnderline group>{link.label}</AnimatedUnderline>
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-surface-elevated p-6">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Availability
              </h3>
              <p className="text-sm text-muted-foreground">
                Available for SWE and PM internship opportunities for Fall 2026. Open to freelance
                projects and hackathons.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder="Your name"
                required
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder="your@email.com"
                required
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                required
                className={errors.message ? 'border-destructive' : ''}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send message
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              I typically respond within 24–48 hours
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
