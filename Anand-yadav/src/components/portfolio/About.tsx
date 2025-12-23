import { GraduationCap, MapPin, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.E. Information Technology at APSIT, Thane with CGPA 9.61',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Thane, Maharashtra, India',
    },
    {
      icon: Target,
      title: 'Goal',
      description: 'Seeking internship opportunities in backend development',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am currently pursuing a Bachelor of Engineering in Information Technology at 
                <span className="text-primary font-medium"> A. P. Shah Institute of Technology</span>, 
                Thane, with a CGPA of <span className="text-primary font-medium">9.61</span>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I have built multiple real-world projects involving role-based authentication, 
                REST APIs, database integration, and cloud deployment. My interests include 
                backend development, scalable web applications, and learning cloud and DevOps fundamentals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am actively seeking internship opportunities to apply my skills in real-world environments 
                and contribute to impactful projects.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="glass hover:shadow-lg transition-shadow"
                >
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;