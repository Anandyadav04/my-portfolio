import { Code2, Database, Cloud, Wrench, Shield, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'Java', 'C'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'HTML', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Django', 'Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Auth & APIs',
    icon: Shield,
    skills: ['JWT', 'bcrypt', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS (EC2, S3, IAM)', 'Google Cloud', 'Docker'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;