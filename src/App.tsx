/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ArrowRight,
  Download,
  ArrowDown,
  ExternalLink,
  Code2,
  Bot,
  Brain,
  Globe,
  Database,
  Wrench,
  Youtube,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react";
import ShaderBackground from "./components/ShaderBackground";
import { BentoCard } from "./components/BentoCard";
import { FadeUp } from "./components/FadeUp";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <div className="font-body-base text-body-base antialiased text-on-background relative">
      <ShaderBackground />
      <div className="noise-bg"></div>

      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center mt-6 mx-auto w-fit px-6 py-3 rounded-full bg-surface/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform scale-95 active:scale-90">
        <div className="flex items-center gap-6">
          <div className="font-headline-md text-[32px] font-bold text-on-surface tracking-tighter mr-4 flex items-center gap-2">
            <img
              alt="Sahil Gupta"
              className="w-8 h-8 rounded-full"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvyqXv0h2I_sJVIET44EYQgoMcAEzXbEH4Z_lVmMLZ1HXnFCoeMf5BOy5YHnD17SmmvCR7g-Fd0ERMyUDMpKpiNlPDcCCVQK0aCeVCijdCxTjOCP2rDv4QemMhNW81h3Iy2XoEv-f-3HTjGSVopuRe00yHXuJLAmyQo8hRZYqw_Qzy8_nuph8KPK4GK_2Zq_fv52zT4wdSDo2v1sAymN6Abs9Me96VPVpV8pwAQZZYwHVaKDpDtAz1i2Gk"
            />
          </div>
          <div className="hidden md:flex gap-6 items-center font-medium">
            <a className="text-primary font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full hover:bg-white/5 transition-all duration-300 px-2 py-1 rounded" href="#">Home</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 duration-300 px-2 py-1 rounded" href="#projects">Projects</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 duration-300 px-2 py-1 rounded" href="#experience">Experience</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 duration-300 px-2 py-1 rounded" href="#skills">Skills</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 duration-300 px-2 py-1 rounded" href="#content">Content</a>
          </div>
          <div className="flex gap-4 ml-4">
            <button className="text-on-surface-variant hover:text-on-surface transition-colors font-medium hover:bg-white/5 px-3 py-1 rounded">Resume</button>
            <button className="text-primary hover:text-on-secondary-container transition-colors font-medium hover:bg-white/5 px-3 py-1 rounded">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-[20px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <FadeUp delay={0}>
            <span className="font-label-sm text-[12px] font-semibold tracking-[0.2em] text-primary mb-6 uppercase block">COMPUTER SCIENCE • AI • BUILDING SINCE 2025</span>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] text-on-surface mb-6 max-w-4xl">
              <span className="font-emphasis-italic font-normal">Sahil Gupta</span><br />
              <span className="text-on-surface-variant/80 text-4xl md:text-6xl mt-2 block tracking-[-0.03em]">
                I build AI products, developer tools, and experiences that feel magical.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="text-2xl md:text-3xl text-primary-container font-medium mb-8">
              <span className="opacity-60">I am a </span>
              <span className="font-bold role-roller">
                <span className="role-roller-inner">
                  <span>AI Engineer</span>
                  <span>Full Stack Developer</span>
                  <span>Hackathon Builder</span>
                  <span>Open Source Contributor</span>
                  <span>Creator</span>
                  <span>Student</span>
                  <span>AI Engineer</span>
                </span>
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-[18px] text-on-surface-variant max-w-2xl mb-12">
              Focused on building practical AI systems, modern web applications, and developer-first products using cutting-edge technologies.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="glass-panel px-8 py-4 rounded-full text-primary font-medium hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2 group" href="#projects">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a className="px-8 py-4 rounded-full text-on-surface border border-outline-variant hover:border-primary/50 transition-all active:scale-95 flex items-center gap-2" href="#">
                <span>Download Resume</span>
                <Download className="w-5 h-5" />
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.5} className="mt-24 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-outline-variant/30 pt-12">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-on-surface mb-2"><Counter to={9} /></span>
                <span className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest">Projects Built</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-on-surface mb-2"><Counter to={5} /></span>
                <span className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest">Hackathons</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-on-surface mb-2"><Counter to={81} /></span>
                <span className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest">GitHub Commits</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-on-surface mb-2">∞</span>
                <span className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest">Learning Every Day</span>
              </div>
            </div>
          </FadeUp>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="max-w-[1200px] mx-auto px-[20px] py-24 relative z-10" id="projects">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[48px] text-on-surface font-bold mb-4 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Selected works bridging AI, Web Development, and human-centric design.</p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeUp className="lg:col-span-2 h-full">
            <BentoCard className="rounded-[32px] p-8 h-full flex flex-col justify-between glass-panel border border-white/5">
              <div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-3xl font-bold text-on-surface">Blinky</h3>
                  <div className="flex gap-2">
                    <a className="p-2 rounded-full bg-surface-variant hover:bg-primary/20 text-on-surface transition-colors" href="#"><ExternalLink className="w-4 h-4" /></a>
                    <a className="p-2 rounded-full bg-surface-variant hover:bg-primary/20 text-on-surface transition-colors" href="#"><Code2 className="w-4 h-4" /></a>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 text-lg relative z-10">AI-powered desktop assistant that watches your screen and teaches you how to use any software interactively in real-time.</p>
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">AI</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Computer Vision</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Agentic AI</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-on-surface-variant border border-white/10">Windows</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-on-surface-variant border border-white/10">Linux</span>
                </div>
              </div>
              <div className="w-full h-48 bg-surface-container-high rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden relative z-10">
                <Bot className="w-16 h-16 text-primary/30" />
              </div>
            </BentoCard>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-1 h-full">
            <BentoCard className="rounded-[32px] p-8 h-full flex flex-col justify-between glass-panel border border-white/5">
              <div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-2xl font-bold text-on-surface">ShikshaFlow</h3>
                  <div className="flex gap-2">
                    <a className="p-2 rounded-full bg-surface-variant hover:bg-primary/20 text-on-surface transition-colors" href="#"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 relative z-10">Gamified education platform featuring Duolingo-inspired XP, dynamic AI challenges, and continuous reward systems.</p>
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Next.js</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Firebase</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-on-surface-variant border border-white/10">AI</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-on-surface-variant border border-white/10">Education</span>
                </div>
              </div>
            </BentoCard>
          </FadeUp>

          <FadeUp delay={0.2} className="lg:col-span-1 h-full">
            <BentoCard className="rounded-[32px] p-8 h-full flex flex-col justify-between glass-panel border border-white/5">
              <div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-2xl font-bold text-on-surface">GNDU Attendance System</h3>
                  <div className="flex gap-2">
                    <a className="p-2 rounded-full bg-surface-variant hover:bg-primary/20 text-on-surface transition-colors" href="#"><Code2 className="w-4 h-4" /></a>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 relative z-10">Geolocation-aware university platform ensuring secure, location-verified student attendance tracking.</p>
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">React</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Maps API</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-on-surface-variant border border-white/10">Node.js</span>
                </div>
              </div>
            </BentoCard>
          </FadeUp>

          <FadeUp delay={0.3} className="lg:col-span-2 h-full">
            <BentoCard className="rounded-[32px] p-8 h-full flex flex-col justify-between glass-panel border border-white/5">
              <div className="flex flex-col md:flex-row gap-8 items-center h-full relative z-10">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold text-on-surface">Portfolio V1</h3>
                    <div className="flex gap-2">
                      <a className="p-2 rounded-full bg-surface-variant hover:bg-primary/20 text-on-surface transition-colors" href="#"><Code2 className="w-4 h-4" /></a>
                    </div>
                  </div>
                  <p className="text-on-surface-variant mb-6 text-lg">This premium animated portfolio website built with a focus on dark aesthetics, glassmorphism, and performance.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Tailwind CSS</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">JavaScript</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-on-surface-variant border border-white/10">UI/UX</span>
                  </div>
                </div>
              </div>
            </BentoCard>
          </FadeUp>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="max-w-[1200px] mx-auto px-[20px] py-24 relative z-10" id="experience">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[48px] text-on-surface font-bold mb-4 tracking-tight">The <span className="text-gradient">Journey</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Milestones and experiences shaping my path in tech.</p>
          </div>
        </FadeUp>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant/30 md:-translate-x-1/2"></div>
          <div className="space-y-12">
            
            {/* Roles */}
            {[
              { role: "Freelance Developer", date: "Present", side: "left", delay: 0, desc: "Delivering custom web solutions, AI integrations, and full-stack applications for diverse clients.", active: true },
              { role: "Content Creator", date: "Tech & AI", side: "right", delay: 0.1, desc: "Sharing knowledge, tutorials, and insights on modern web development and AI technologies." },
              { role: "Building AI Projects", date: "Continuous", side: "left", delay: 0.2, desc: "Experimenting with LLMs, computer vision, and agentic workflows to create innovative tools." },
              { role: "Hackathon Participant", date: "Multiple Events", side: "right", delay: 0.3, desc: "Rapid prototyping and collaborative problem solving under intense time constraints." },
              { role: "Open Source Contributor", date: "GitHub", side: "left", delay: 0.4, desc: "Giving back to the community by contributing code, documentation, and bug fixes." },
              { role: "Computer Science Student", date: "Foundation", side: "right", delay: 0.5, desc: "Building a strong theoretical foundation in algorithms, data structures, and software engineering principles." }
            ].map((item, idx) => (
              <FadeUp key={idx} delay={item.delay}>
                <div className={`relative flex flex-col ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center justify-between group`}>
                  <div className={`hidden md:block w-5/12 ${item.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h4 className="text-xl font-bold text-on-surface">{item.role}</h4>
                    <p className="text-primary text-sm mt-1">{item.date}</p>
                  </div>
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-colors ${item.active ? 'timeline-dot shadow-[0_0_15px_rgba(137,170,204,0.5)]' : 'bg-outline-variant group-hover:timeline-dot'}`}></div>
                  <div className={`w-full pl-12 md:pl-0 md:w-5/12 ${item.side === 'left' ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                    <h4 className="text-xl font-bold text-on-surface md:hidden">{item.role}</h4>
                    <p className="text-primary text-sm mt-1 md:hidden">{item.date}</p>
                    <p className="text-on-surface-variant text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-[1200px] mx-auto px-[20px] py-24 relative z-10" id="skills">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[48px] text-on-surface font-bold mb-4 tracking-tight">Technical <span className="text-gradient">Arsenal</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life.</p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeUp>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors h-full">
              <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <Brain className="text-primary w-6 h-6" />
                Artificial Intelligence
              </h3>
              <div className="flex flex-wrap gap-3">
                {['OpenAI APIs', 'LangChain', 'RAG', 'Agentic AI', 'Python', 'LLMs', 'Computer Vision'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant text-sm border border-white/5 hover:border-primary/50 hover:text-on-surface transition-all cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors h-full">
              <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <Globe className="text-primary w-6 h-6" />
                Web Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'Framer Motion', 'GSAP'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant text-sm border border-white/5 hover:border-primary/50 hover:text-on-surface transition-all cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors h-full">
              <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <Database className="text-primary w-6 h-6" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Firebase', 'MongoDB', 'PostgreSQL', 'Supabase'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant text-sm border border-white/5 hover:border-primary/50 hover:text-on-surface transition-all cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors h-full">
              <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <Wrench className="text-primary w-6 h-6" />
                Tools & Environment
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'GitHub', 'Linux', 'Docker', 'VS Code', 'Vercel', 'Figma'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant text-sm border border-white/5 hover:border-primary/50 hover:text-on-surface transition-all cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content & Social Section */}
      <section className="max-w-[1200px] mx-auto px-[20px] py-24 relative z-10" id="content">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[48px] text-on-surface font-bold mb-4 tracking-tight">Let's <span className="text-gradient">Connect</span></h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-white/10 mt-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-on-surface-variant">Available for internships, collaborations & hackathons</span>
            </div>
          </div>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <FadeUp delay={0}>
            <a className="bento-card p-6 rounded-[24px] flex flex-col items-center justify-center gap-4 group" href="#">
              <Youtube className="w-10 h-10 text-on-surface-variant group-hover:text-red-500 transition-colors" />
              <span className="font-medium text-on-surface relative z-10">YouTube</span>
            </a>
          </FadeUp>
          <FadeUp delay={0.1}>
            <a className="bento-card p-6 rounded-[24px] flex flex-col items-center justify-center gap-4 group" href="#">
              <Linkedin className="w-10 h-10 text-on-surface-variant group-hover:text-blue-500 transition-colors" />
              <span className="font-medium text-on-surface relative z-10">LinkedIn</span>
            </a>
          </FadeUp>
          <FadeUp delay={0.2}>
            <a className="bento-card p-6 rounded-[24px] flex flex-col items-center justify-center gap-4 group" href="#">
              <Instagram className="w-10 h-10 text-on-surface-variant group-hover:text-pink-500 transition-colors" />
              <span className="font-medium text-on-surface relative z-10">Instagram</span>
            </a>
          </FadeUp>
          <FadeUp delay={0.3}>
            <a className="bento-card p-6 rounded-[24px] flex flex-col items-center justify-center gap-4 group" href="#">
              <Twitter className="w-10 h-10 text-on-surface-variant group-hover:text-on-surface transition-colors" />
              <span className="font-medium text-on-surface relative z-10">X (Twitter)</span>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-[1200px] mx-auto px-[20px] py-[24px] flex flex-col md:flex-row justify-between items-center gap-[8px] bg-surface-container-lowest/80 backdrop-blur-md rounded-t-[32px] border-t border-outline-variant/30 mt-[160px] relative z-10">
        <div className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
          <img
            alt="Sahil Gupta"
            className="w-6 h-6 rounded-full grayscale opacity-70"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvyqXv0h2I_sJVIET44EYQgoMcAEzXbEH4Z_lVmMLZ1HXnFCoeMf5BOy5YHnD17SmmvCR7g-Fd0ERMyUDMpKpiNlPDcCCVQK0aCeVCijdCxTjOCP2rDv4QemMhNW81h3Iy2XoEv-f-3HTjGSVopuRe00yHXuJLAmyQo8hRZYqw_Qzy8_nuph8KPK4GK_2Zq_fv52zT4wdSDo2v1sAymN6Abs9Me96VPVpV8pwAQZZYwHVaKDpDtAz1i2Gk"
          />
          <span className="text-lg">Sahil Gupta</span>
        </div>
        <p className="text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">© 2026 Sahil Gupta. Crafted with precision.</p>
        <div className="flex gap-4 text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant opacity-80 hover:opacity-100 transition-opacity">
          <a className="hover:text-primary transition-colors duration-300" href="#">LinkedIn</a>
          <a className="hover:text-primary transition-colors duration-300" href="#">GitHub</a>
          <a className="hover:text-primary transition-colors duration-300" href="#">Twitter</a>
          <a className="hover:text-primary transition-colors duration-300" href="#">Resume</a>
        </div>
      </footer>
    </div>
  );
}

