import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certifications = [
  'AWS Academy Cloud Foundations',
  'AWS Academy Cloud Architecting',
  'Google Cloud Cybersecurity Certificate',
  'IBM Web Development',
  'Cisco Python Essentials 2',
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <Card className="glass hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-semibold text-foreground mb-1">
                      Bachelor of Engineering (B.E.)
                    </h4>
                    <p className="text-primary font-medium text-sm mb-2">
                      Information Technology
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      A. P. Shah Institute of Technology (APSIT), Thane
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>2023 – 2027</span>
                      </div>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        CGPA: 9.61 / 10
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications Card */}
            <Card className="glass hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Certifications</h3>
                    <p className="text-sm text-muted-foreground">Professional Credentials</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cloud Project Highlight */}
          <Card className="glass mt-8 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Cloud Deployment Project (AWS)
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deployed a web application on AWS EC2 with basic Linux configuration and used 
                    Amazon S3 for static file hosting. Learned fundamentals of cloud infrastructure, 
                    IAM roles, and deployment workflows.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;