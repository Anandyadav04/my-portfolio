import { Code2, Server, Layout, GitBranch, Cloud } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'from-blue-500/10 to-indigo-500/10 text-blue-500',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-pink-500/10 to-rose-500/10 text-pink-500',
    skills: ['React.js', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    color: 'from-emerald-500/10 to-teal-500/10 text-emerald-500',
    skills: ['Node.js', 'Express.js', 'Django', 'MongoDB', 'MySQL', 'Socket.IO'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-cyan-500/10 to-blue-500/10 text-cyan-500',
    skills: ['AWS', 'Docker', 'Vercel / Netlify'],
  },
  {
    title: 'Tools & Security',
    icon: GitBranch,
    color: 'from-amber-500/10 to-orange-500/10 text-amber-500',
    skills: ['Git & GitHub', 'Postman', 'REST APIs', 'JWT Auth'],
  },
];

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Skills = () => {
  const { elementRef, isRevealed } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={elementRef}
      className={`section-padding relative overflow-hidden transition-all duration-1000 transform ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Background visual element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skillset</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              A comprehensive view of the programming languages, backend frameworks, databases, and DevOps tools I leverage to build production-grade applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="glass bg-card/30 rounded-2xl p-6 border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all duration-300 glow-border glow-shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${group.color}`}>
                    <group.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/80 border border-border/50 text-secondary-foreground hover:border-primary/45 hover:text-primary transition-all duration-200"
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