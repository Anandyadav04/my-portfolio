import { ExternalLink, Github, Stethoscope, BookOpen, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'MediTrack',
    subtitle: 'Healthcare Web Application',
    icon: Stethoscope,
    description:
      'A Django-based healthcare management system that provides AI-based skin disease detection along with health utilities like BMI/BMR calculation, appointment booking, and medication reminders.',
    features: [
      'User authentication and role-based access',
      'AI skin disease prediction using TensorFlow & OpenCV',
      'Appointment booking system',
      'BMI & BMR calculators',
      'Medication reminders with email/SMS notifications',
      'NGO and medical resource listings',
    ],
    techStack: ['Python', 'Django', 'TensorFlow', 'OpenCV', 'SQLite/MySQL'],
    github: 'https://github.com/Anandyadav04/MediTrack.git',
    live: null,
    featured: true,
  },
  {
    title: 'StudyBitz',
    subtitle: 'Learning Management System',
    icon: BookOpen,
    description:
      'A full-stack LMS with role-based access for Students, Instructors, and Admins, built using the MERN stack.',
    features: [
      'Role-based authentication using JWT',
      'Course creation and enrollment',
      'REST APIs for course and user management',
      'State management using React Context API',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/Anandyadav04/mern-lms.git',
    live: 'https://studybitz.netlify.app',
    featured: true,
  },
  {
    title: 'Travel Management System',
    subtitle: 'Desktop Application',
    icon: Plane,
    description:
      'A desktop-based travel booking system allowing users to browse travel packages and manage bookings.',
    features: [
      'Browse travel packages',
      'Booking management',
      'User-friendly desktop interface',
    ],
    techStack: ['Java Swing', 'MySQL'],
    github: 'https://github.com/Anandyadav04/Travel-management-system.git',
    live: null,
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my work in full-stack development, AI integration, and cloud technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`glass overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  project.featured ? 'border-primary/30' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                          {project.title}
                          {project.featured && (
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                              Featured
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-primary/80 font-medium">
                          {project.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.live && (
                        <Button size="sm" className="bg-gradient-primary" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h4>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {project.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIndex) => (
                      <Badge
                        key={tIndex}
                        variant="secondary"
                        className="text-xs font-medium"
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