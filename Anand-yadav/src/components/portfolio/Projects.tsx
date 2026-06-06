import { useState } from 'react';
import { ExternalLink, Github, Stethoscope, BookOpen, MessageSquare, ShieldCheck, Layers, Cpu, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    id: 'meditrack',
    title: 'MediTrack',
    subtitle: 'AI Healthcare Platform',
    category: 'ai',
    icon: Stethoscope,
    glow: 'hover:border-teal-500/30 hover:shadow-teal-500/5',
    description:
      'A healthcare management system built using Django and SQLite, integrating machine learning modules for prediction and scheduling automation.',
    achievements: [
      'Built a healthcare management system using Django and SQLite.',
      'Integrated a TensorFlow model for skin disease prediction.',
      'Added appointment booking, automated reminders, and a patient dashboard.'
    ],
    techStack: ['Django', 'Python', 'TensorFlow', 'OpenCV', 'SQLite', 'MySQL'],
    github: 'https://github.com/Anandyadav04/MediTrack.git',
    live: null,
    featured: true,
  },
  {
    id: 'chatlance',
    title: 'ChatLance',
    subtitle: 'Real-Time Collaboration & Messenger Hub',
    category: 'web',
    icon: MessageSquare,
    glow: 'hover:border-indigo-500/30 hover:shadow-indigo-500/5',
    description:
      'A production-oriented real-time messaging application designed to demonstrate robust backend architectures, WebSockets, and secure state handling.',
    achievements: [
      'Scaled low-latency real-time chat, active presence status, and typing indicator events using Socket.IO.',
      'Implemented token-based JWT sessions with secure HTTP-only cookies and bcrypt password hashing.',
      'Engineered structured message schemas in MongoDB with indexes optimized for fast historical queries.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Anandyadav04/chatLance.git',
    live: null,
    featured: true,
  },
  {
    id: 'studybitz',
    title: 'StudyBitz',
    subtitle: 'StudyBitz Learning Portal (MERN)',
    category: 'web',
    icon: BookOpen,
    glow: 'hover:border-violet-500/30 hover:shadow-violet-500/5',
    description:
      'A complete role-based learning portal (LMS) built with the MERN stack for Student, Instructor, and Admin access.',
    achievements: [
      'Developed a role-based LMS with JWT authentication and protected routes.',
      'Designed REST APIs for course management, progress tracking, and user profiles.',
      'Used MongoDB and React Context API for efficient data handling.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Context API', 'Tailwind CSS'],
    github: 'https://github.com/Anandyadav04/mern-lms.git',
    live: 'https://studybitz.netlify.app',
    featured: true,
  },
  {
    id: 'ai-analysis',
    title: 'RiskRead',
    subtitle: 'AI Ingredient Analyzer',
    category: 'ai',
    icon: ShieldCheck,
    glow: 'hover:border-amber-500/30 hover:shadow-amber-500/5',
    description:
      'A Flask web application that scans packaged food labels, extracts ingredient names using OCR, and evaluates allergen safety risks.',
    achievements: [
      'Created a Flask web app that analyzes product labels for ingredient safety.',
      'Used OpenCV and Tesseract OCR to extract text from images.',
      'Classified ingredients by risk level and suggested healthier alternatives.'
    ],
    techStack: ['Python', 'Flask', 'OpenCV', 'Tesseract OCR', 'Machine Learning', 'Pandas'],
    github: 'https://github.com/Anandyadav04/ai-ingredient-analysis.git',
    live: null,
    featured: false,
  },
];

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Projects = () => {
  const { elementRef, isRevealed } = useScrollReveal();
  const [filter, setFilter] = useState<'all' | 'web' | 'ai'>('all');

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section
      id="projects"
      ref={elementRef}
      className={`section-padding bg-secondary/15 relative overflow-hidden transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              A curated selection of systems I have engineered, showcasing backend scalability, real-time networking, and machine learning models.
            </p>
          </div>

          {/* Interactive Project Filter Tabs */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-card/40 border-border/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 ${
                filter === 'web'
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-card/40 border-border/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              Full-Stack & Real-Time ({projects.filter(p => p.category === 'web').length})
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 ${
                filter === 'ai'
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-card/40 border-border/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              AI & Python ({projects.filter(p => p.category === 'ai').length})
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`glass bg-card/40 border border-border/40 hover:shadow-xl transition-all duration-500 flex flex-col justify-between glow-border glow-shadow-sm ${project.glow} ${
                  project.featured && filter === 'all' ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-left">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                          <project.icon className="h-6 w-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                        </div>
                        <div>
                          <CardTitle className="text-xl md:text-2xl flex flex-wrap items-center gap-2 font-bold">
                            {project.title}
                            {project.featured && (
                              <Badge className="text-[9px] uppercase tracking-wider bg-primary/15 text-primary border border-primary/20 font-mono hover:bg-primary/25">
                                Featured
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-primary/95 font-medium mt-1 text-xs md:text-sm">
                            {project.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                      
                      {/* Project Links */}
                      <div className="flex gap-2 shrink-0">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-border hover:bg-secondary/80 font-medium rounded-full text-xs"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3.5 w-3.5 mr-1.5" />
                            Source
                          </a>
                        </Button>
                        {project.live && (
                          <Button size="sm" className="bg-gradient-primary text-white hover:opacity-90 font-medium rounded-full text-xs" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 text-left">
                    <p className="text-muted-foreground text-base leading-relaxed">{project.description}</p>

                    {/* Technical Achievements */}
                    <div className="space-y-2.5">
                      <h4 className="font-bold text-sm text-foreground uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-primary" />
                        Implementation Highlights:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.achievements.map((achievement, aIndex) => (
                          <li
                            key={aIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-primary mt-1 shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <CardContent className="pt-4 border-t border-border/20 mt-4 bg-muted/10 rounded-b-2xl">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIndex) => (
                      <Badge
                        key={tIndex}
                        variant="outline"
                        className="text-[9px] font-mono border-border/80 bg-card/70 text-muted-foreground px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Projects;