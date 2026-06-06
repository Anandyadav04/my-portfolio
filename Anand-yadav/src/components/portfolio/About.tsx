import { GraduationCap, Code2, Server, Globe, MapPin, Target, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Pursuing B.E. in Information Technology at APSIT with an outstanding CGPA of 9.61/10.',
  },
  {
    icon: Server,
    title: 'API & Backend Design',
    description: 'Focused on type safety, REST & WebSocket layers, JWT session authorization, and schema indexing.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Integration',
    description: 'Connecting interactive React user interfaces to Express/Node.js or Django API systems.',
  },
  {
    icon: Globe,
    title: 'Cloud & Infrastructure',
    description: 'Orchestrating server deployment cycles on AWS (EC2/S3) and building containerized apps with Docker.',
  },
];

const About = () => {
  const { elementRef, isRevealed } = useScrollReveal();

  return (
    <section
      id="about"
      ref={elementRef}
      className={`section-padding bg-secondary/15 relative overflow-hidden transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Abstract mesh grids */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Perfectly Circular Avatar Photo Container */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-full overflow-hidden border-2 border-primary/30 p-1 glow-ring shadow-2xl bg-black">
                <img 
                  src="/avatar.png" 
                  alt="Anand Yadav" 
                  className="w-full h-full object-cover rounded-full scale-[1.4] origin-center group-hover:scale-[1.48] transition-transform duration-700" 
                />
              </div>

              {/* Offset decorative border rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-primary/10 rounded-full -z-10 animate-float hidden lg:block" />
              
              {/* Objective Badge placed below circular photo */}
              <div className="mt-8 glass bg-card/45 border-border/60 rounded-full py-2.5 px-6 flex items-center gap-2.5 shadow-lg max-w-xs">
                <Sparkles className="h-4 w-4 text-primary animate-pulse shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">Goal: Software Engineer</span>
              </div>
            </div>

            {/* Right Column: Bio Summary */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Backend Developer & Full-Stack Engineer
                </h3>
                <p className="text-sm font-mono text-primary mt-1">Based in Thane, Maharashtra, India</p>
              </div>

              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  I am currently pursuing a Bachelor of Engineering in Information Technology at 
                  <strong className="text-foreground font-semibold"> A. P. Shah Institute of Technology</strong>, 
                  Thane, maintaining a CGPA of <strong className="text-primary font-bold">9.61/10</strong>.
                </p>
                <p>
                  I love building full-stack web applications, with a strong focus on <strong className="text-foreground font-semibold">backend development, APIs, and databases</strong>. I have practical experience developing projects with the MERN stack (MongoDB, Express, React, Node) and Django.
                </p>
                <p>
                  I enjoy learning about <strong className="text-foreground font-semibold">cloud deployment, containerization with Docker, and security</strong>. My goal is to write clean, secure code and build reliable software that solves real-world problems.
                </p>
              </div>

              {/* Location / Status row */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/40 text-left">
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/80">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Location</span>
                    <span className="font-bold text-foreground text-sm">Thane, MH, IN</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/80">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Current Focus</span>
                    <span className="font-bold text-foreground text-sm">Distributed APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Highlights Grid with Rounded-2xl shapes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass bg-card/40 border border-border/40 hover:border-primary/30 transition-all duration-350 hover:-translate-y-1 rounded-[2rem] glow-border glow-shadow-sm"
              >
                <CardContent className="flex flex-col items-start gap-4 p-6 text-left">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-base">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;