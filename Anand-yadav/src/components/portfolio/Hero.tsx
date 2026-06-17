import { useState } from 'react';
import { ArrowRight, Github, Mail, Linkedin, Terminal, Code2, Server, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'log'>('about');

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 cyber-grid"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow opacity-60" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow opacity-60" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Hero Left: Personal Statement */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Software Engineer Roles
            </div>

            <div className="flex items-center gap-4">
              {/* Circular profile avatar */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40 p-0.5 glow-ring bg-black">
                <img 
                  src="/avatar.png" 
                  alt="Anand Yadav Avatar" 
                  className="w-full h-full object-cover rounded-full scale-[1.4] origin-center" 
                />
              </div>
              <div>
                <p className="text-muted-foreground font-mono text-sm">Hello, I'm</p>
                <h2 className="text-xl font-bold text-foreground">Anand Yadav</h2>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none tracking-tight">
              Building Modern & <br />
              <span className="text-gradient">Reliable Web Apps</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              I am a Full-Stack Developer and Backend Engineer. I enjoy designing clean APIs, managing databases, and deploying user-friendly software to the cloud.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-gradient-primary text-white hover:opacity-90 transition-opacity font-medium shadow-md shadow-primary/10 rounded-full"
                onClick={() => scrollToSection('#projects')}
              >
                Explore Systems
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/80 font-medium rounded-full"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com/Anandyadav04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anand-yadav-149414356"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hero Right: Interactive Code Window Mockup */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="w-full rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden glow-border glow-shadow-sm font-mono text-[11px] text-left relative z-10">
              
              {/* Custom Header Tabs */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-border/60 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                
                {/* Tabs Switcher */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTab('about')}
                    className={`px-2 py-1 rounded transition-colors text-[10px] flex items-center gap-1 ${activeTab === 'about' ? 'bg-primary/15 text-primary border border-primary/20 font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Terminal className="h-3 w-3" /> profile.json
                  </button>
                  <button 
                    onClick={() => setActiveTab('skills')}
                    className={`px-2 py-1 rounded transition-colors text-[10px] flex items-center gap-1 ${activeTab === 'skills' ? 'bg-primary/15 text-primary border border-primary/20 font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Code2 className="h-3 w-3" /> skills.sh
                  </button>
                  <button 
                    onClick={() => setActiveTab('log')}
                    className={`px-2 py-1 rounded transition-colors text-[10px] flex items-center gap-1 ${activeTab === 'log' ? 'bg-primary/15 text-primary border border-primary/20 font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Server className="h-3 w-3" /> server.log
                  </button>
                </div>
              </div>

              {/* Terminal Viewports */}
              <div className="p-5 h-64 overflow-y-auto leading-relaxed text-muted-foreground">
                {activeTab === 'about' && (
                  <div className="space-y-1">
                    <p><span className="text-indigo-400">const</span> engineer = &#123;</p>
                    <p className="pl-4">name: <span className="text-emerald-400">"Anand Yadav"</span>,</p>
                    <p className="pl-4">positioning: <span className="text-emerald-400">"Full-Stack & Backend Developer"</span>,</p>
                    <p className="pl-4">academics: <span className="text-emerald-400">"B.E. IT | CGPA 9.0"</span>,</p>
                    <p className="pl-4">architectures: <span className="text-amber-400">["REST APIs", "WebSocket Systems", "Role-Based Auth"]</span>,</p>
                    <p className="pl-4">cloudInfra: <span className="text-amber-400">["AWS", "Google Cloud", "Docker"]</span></p>
                    <p>&#125;;</p>
                    <p className="pt-2 text-slate-500 font-normal">// Running: node profile.js</p>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-1">
                    <p className="text-yellow-500">$ ./list-skills.sh</p>
                    <p className="text-emerald-500">├── Languages</p>
                    <p className="pl-4 text-slate-400">└── JS, TS, Python, Java, C</p>
                    <p className="text-emerald-500">├── Backend & Real-Time</p>
                    <p className="pl-4 text-slate-400">└── Django, Node.js, Express, Socket.IO</p>
                    <p className="text-emerald-500">├── Databases & Auth</p>
                    <p className="pl-4 text-slate-400">└── MongoDB, MySQL, JWT Security</p>
                    <p className="text-emerald-500">└── DevOps & Cloud</p>
                    <p className="pl-4 text-slate-400">└── Docker, AWS (EC2/S3/IAM), GitHub Actions</p>
                  </div>
                )}

                {activeTab === 'log' && (
                  <div className="space-y-1 text-slate-400">
                    <p className="text-yellow-500">$ npm run start:server</p>
                    <p>[09:34:02] <span className="text-primary font-bold">INFO:</span> Initializing Socket.io networking context...</p>
                    <p>[09:34:02] <span className="text-primary font-bold">INFO:</span> Connecting to MongoDB Cluster (replica set index verified)...</p>
                    <p>[09:34:03] <span className="text-primary font-bold">INFO:</span> TensorFlow CNN model loaded in 640ms.</p>
                    <p>[09:34:03] <span className="text-emerald-500 font-bold">SUCCESS:</span> API server listening on port 8080.</p>
                    <p className="text-blue-400 animate-pulse">// Listening for client socket connection requests...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Glow backdrop shadow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur-xl opacity-20 -z-20" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;