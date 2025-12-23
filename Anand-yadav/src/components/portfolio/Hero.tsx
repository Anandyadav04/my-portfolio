import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient">Anand Yadav</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Full-Stack Developer | <span className="text-primary">MERN</span> • <span className="text-primary">Django</span> • <span className="text-primary">Cloud</span>
          </p>

          {/* Intro */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            I am a B.E. Information Technology student with hands-on experience in building 
            full-stack web applications using MERN and Django. I focus on backend development, 
            REST APIs, authentication, and cloud deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/Anandyadav04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:ay108679@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;