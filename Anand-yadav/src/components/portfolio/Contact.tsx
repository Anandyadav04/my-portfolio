import { useState } from 'react';
import { Mail, Github, MapPin, Send, Linkedin, Copy, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Contact = () => {
  const { toast } = useToast();
  const { elementRef, isRevealed } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ay108679@gmail.com');
    setCopied(true);
    toast({
      title: 'Email Copied',
      description: 'ay108679@gmail.com copied to clipboard successfully!',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxx';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxx';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_xxx';

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        toast({
          title: 'Message sent',
          description: 'Thank you for reaching out! I will respond as soon as possible.',
        });
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: 'Error sending message',
          description: 'Something went wrong. Please email ay108679@gmail.com directly.',
          variant: 'destructive',
        });
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      ref={elementRef}
      className={`section-padding bg-secondary/15 relative transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              Whether you are a recruiter, hiring manager, or developer interested in collaborating, my inbox is always open.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form Card */}
            <div className="lg:col-span-7">
              <Card className="glass bg-card/40 border border-border/40 p-6 rounded-2xl glow-border glow-shadow-sm">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Your Name</label>
                      <Input
                        id="contact-name"
                        placeholder="Aarav Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-secondary/40 border-border/50 focus:border-primary rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Your Email</label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="aarav.sharma@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-secondary/40 border-border/50 focus:border-primary rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
                      <Textarea
                        id="contact-message"
                        placeholder="Hi Anand, I would love to discuss a software engineering opportunity..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={5}
                        className="bg-secondary/40 border-border/50 focus:border-primary resize-none rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary text-white hover:opacity-90 font-medium rounded-full py-6"
                      disabled={loading}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {loading ? 'Delivering...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contacts */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Email Copy Card */}
                <Card className="glass bg-card/40 border border-border/40 hover:border-primary/20 transition-all duration-350 rounded-2xl glow-border glow-shadow-sm">
                  <CardContent className="p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Direct Email</p>
                        <a href="mailto:ay108679@gmail.com" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                          ay108679@gmail.com
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopyEmail}
                      className="w-9 h-9 rounded-lg hover:bg-secondary/80 shrink-0"
                      aria-label="Copy Email to Clipboard"
                    >
                      {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </CardContent>
                </Card>

                {/* GitHub Card */}
                <Card className="glass bg-card/40 border border-border/40 hover:border-primary/20 transition-all duration-350 rounded-2xl glow-border glow-shadow-sm">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">GitHub Hub</p>
                      <a
                        href="https://github.com/Anandyadav04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                      >
                        github.com/Anandyadav04
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Card */}
                <Card className="glass bg-card/40 border border-border/40 rounded-2xl glow-border glow-shadow-sm">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-foreground">
                        Thane, Maharashtra, India
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* LinkedIn Connect Widget */}
              <Card className="glass border-primary/20 bg-primary/5 rounded-2xl glow-shadow-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prefer social networking? Let's connect on LinkedIn to share insights and software opportunities.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10 font-medium rounded-full"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/anand-yadav-149414356"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2 text-primary" />
                      Connect via LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
