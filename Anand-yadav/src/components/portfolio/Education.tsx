import { GraduationCap, Award, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const timelineList = [
  {
    type: 'internship',
    title: 'Full-Stack Developer Virtual Internship',
    institution: 'EduSkills Foundation',
    period: 'Dec 2024',
    metrics: 'Internship',
    bullets: [
      'Built responsive UI components using HTML, CSS, and JavaScript.',
      'Developed RESTful APIs and integrated them with dynamic front-ends.',
      'Completed project-based modules simulating real-world development sprints.'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Engineering (B.E.)',
    institution: 'A. P. Shah Institute of Technology (APSIT), Thane',
    field: 'Information Technology',
    period: '2023 – 2027',
    metrics: 'CGPA: 9.61 / 10',
    bullets: [
      'Focused on Core Computing Fundamentals: Algorithms, Database Management Systems (DBMS), and Software Architecture.',
      'Represented department in technical project competitions showcasing AI and web integrations.'
    ]
  },
  {
    type: 'education',
    title: 'Higher Secondary Education (Class XII)',
    institution: 'Gyanodaya Vidya Mandir',
    field: 'Science Stream',
    period: '2021 – 2023',
    metrics: 'Score: 85%',
    bullets: [
      'Built a strong foundation in analytical skills, logic, and mathematics.'
    ]
  }
];

const certifications = [
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
    date: '2025',
    description: 'Covers cloud infrastructure design, compute services, S3 bucket management, VPC networking, IAM security, and auto-scaling architecture.'
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Fundamental cloud computing models, billing concepts, primary security models, and standard container/virtualization deployments.'
  },
  {
    title: 'Google Cloud Cybersecurity Professional',
    issuer: 'Google Cloud / Coursera',
    date: '2024',
    description: 'Practical training on security controls, threat identification, cloud-specific monitoring, and standard cybersecurity configurations.'
  },
  {
    title: 'IBM Web Development Certificate',
    issuer: 'IBM',
    date: '2024',
    description: 'Front-end layout construction, JavaScript logic bindings, API integration, and standard build and deployment workflows.'
  },
  {
    title: 'Cisco Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    description: 'Advanced scripting, object-oriented concepts, exception handling, string operations, data structures, and package managers.'
  }
];

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Education = () => {
  const { elementRef, isRevealed } = useScrollReveal();

  return (
    <section
      id="education"
      ref={elementRef}
      className={`section-padding relative transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              My professional milestones, academic timeline, and technical credentials.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Left Column: Experience & Education Timeline */}
            <div className="md:col-span-6 space-y-8 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Timeline</h3>
              </div>

              <div className="relative pl-6 border-l border-border/80 space-y-8">
                {timelineList.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-[10px] h-[10px] rounded-full bg-primary ring-4 ring-background" />

                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-medium text-primary bg-primary/5 border border-primary/20 px-2.5 py-0.5 rounded-full">
                          {item.period}
                        </span>
                        <Badge className="bg-primary/10 text-primary border-none text-xs font-mono">
                          {item.metrics}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-foreground leading-snug">
                          {item.title}
                          {item.field && <span className="text-muted-foreground font-normal"> - {item.field}</span>}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.institution}
                        </p>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-primary mt-1 shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Certifications Timeline */}
            <div className="md:col-span-6 space-y-8 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
              </div>

              <div className="relative pl-6 border-l border-border/80 space-y-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-[10px] h-[10px] rounded-full bg-primary ring-4 ring-background" />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-foreground">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-mono text-muted-foreground shrink-0 bg-secondary/80 border border-border/50 px-2 py-0.5 rounded-md">
                          {cert.date}
                        </span>
                      </div>

                      <p className="text-xs text-primary/80 font-medium">
                        Issued by {cert.issuer}
                      </p>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cloud Project Highlight Callout */}
          <Card className="glass bg-card/20 border border-border/40 mt-16 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-[2rem] glow-border glow-shadow-sm">
            <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
              <div className="space-y-2">
                <h4 className="text-base font-bold text-foreground">Cloud Architecture & Deployment Focus</h4>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  Leveraging AWS Academy concepts, I build, host, and deploy production configurations: orchestrating Amazon EC2 instances, provisioning IAM security policies, serving static assets via Amazon S3, and standardizing container runtimes (Docker) for seamless scaling.
                </p>
              </div>
              <Badge className="bg-primary text-white border-none font-mono text-xs px-3 py-1 shrink-0 uppercase tracking-wider rounded-full">
                Cloud-first Dev
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;