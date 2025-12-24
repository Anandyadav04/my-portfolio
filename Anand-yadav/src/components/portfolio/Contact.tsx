import { useState } from 'react';
import { Mail, Github, MapPin, Send , Linkedin} from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ay108679@gmail.com',
    href: 'mailto:ay108679@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Anandyadav04',
    href: 'https://github.com/Anandyadav04',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Thane, Maharashtra',
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: 'Message sent',
          description: 'Thanks for reaching out! I will get back to you soon.',
        });

        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: 'Failed to send message',
          description: 'Please try again later.',
          variant: 'destructive',
        });
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Feel free to reach out for internships, collaboration, or project discussions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />

                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />

                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary"
                    disabled={loading}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="glass hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith('http') ? '_blank' : undefined
                            }
                            rel={
                              item.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Call to Action */}
              <Card className="glass border-primary/30">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    Open to internship opportunities and exciting projects!
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                  <a
                    href="https://www.linkedin.com/in/anand-yadav-149414356"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Let's Connect
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
