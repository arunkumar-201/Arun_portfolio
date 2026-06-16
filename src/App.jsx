import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Mail,
  Menu,
  MessageSquare,
  Network,
  Rocket,
  Send,
  Sparkles,
  Star,
  Terminal,
  X
} from 'lucide-react';

const profile = {
  name: 'Arun Kumar Danda',
  title: 'AI Engineer | Full Stack Developer | Open Source Contributor | C++ Programmer',
  email: 'dandaarunkumar777@gmail.com',
  githubUser: 'arunkumar-201',
  github: 'https://github.com/arunkumar-201',
  linkedin: 'https://www.linkedin.com/in/arunkumardanda/'
};

const navItems = ['About', 'Journey', 'Skills', 'Projects', 'Open Source', 'GitHub', 'Contact'];

const professionalTitles = ['AI Developer', 'Full Stack Developer', 'Open Source Contributor', 'C++ Programmer'];

const journey = [
  {
    year: '2023',
    heading: 'Programming Foundations',
    items: ['Started Computer Science Engineering', 'Learned C++ Programming', 'Built Foundation in DSA', 'Explored Core Computer Science'],
    badges: []
  },
  {
    year: '2024',
    heading: 'Full Stack Development Journey',
    items: ['Learned HTML, CSS, JavaScript', 'Started MERN Stack Development', 'Built Full Stack Applications', 'Worked on Real-World Projects'],
    badges: []
  },
  {
    year: '2025',
    heading: 'AI Innovation & Advanced Systems',
    items: ['Built Judicial RAG Bot', 'Developed AI Mock Interview Platform', 'Participated in Adobe India Hackathon', 'Exploring AI Agents', 'Learning MCP Applications', ],
    badges: ['🏆 Adobe India Hackathon','🏆 3rd price in Webdevelopment Competition']
  },
  {
    year: '2026',
    heading: 'Open Source & AI Exploration',
    items: ['Selected as GSSoC 2026 Contributor', 'Started Open Source Contributions','Expanding Open Source Contributions', 'Built NxtBiz AI', 'Started Building AI Applications'],
    badges: [ '🌟 GSSoC Contributor']
  }
  
];

const skills = [
  { title: 'Programming Languages', icon: Code2, items: ['C++', 'JavaScript', 'Python', 'SQL'] },
  { title: 'Frontend', icon: Sparkles, items: ['React.js', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'Backend', icon: Terminal, items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Databases', icon: Database, items: ['MongoDB', 'MySQL'] },
  {
    title: 'Artificial Intelligence',
    icon: BrainCircuit,
    items: ['Generative AI', 'Prompt Engineering', 'Hugging Face', 'RAG Systems', 'NLP Fundamentals', 'AI Agents']
  },
  { title: 'Analytics', icon: BriefcaseBusiness, items: ['Power BI', 'Excel'] },
  { title: 'Developer Tools', icon: Rocket, items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  {
    title: 'Core Computer Science',
    icon: Network,
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems', 'Computer Networks']
  }
];

const projects = [
  {
title: 'NxtBiz AI',
badge: '⭐ Flagship Project',

description:
'AI-powered business operations platform designed to automate workflows, streamline business processes, improve productivity, and provide intelligent business insights.',

problem:
'Businesses struggle with fragmented workflows and manual operational processes.',

solution:
'Centralized AI-powered platform that improves workflow efficiency and operational visibility.',

impact: [
'Workflow Automation',
'Business Intelligence',
'Productivity Optimization',
'Operational Visibility'
],

highlights: [
'AI Integration',
'REST APIs',
'Dashboard Analytics',
'Scalable Architecture'
],

features: [
'Workflow Automation',
'Business Intelligence',
'Productivity Optimization',
'Dashboard Management'
],

stack: [
'React',
'Node.js',
'Express',
'MongoDB',
'AI Automation'
],

github: 'https://github.com/arunkumar-201/NxtBiz',

demo: null
  },
  {
    title: 'Adobe India Hackathon Project',
    badge: '🏆 Hackathon Project',
    description:
      'Document intelligence platform capable of PDF understanding, outline extraction, and persona-based analysis.',
    achievement: 'Top 2000 Participant Among 200,000+ Participants',
    problem: 'Large PDF documents are difficult to understand and analyze efficiently.',
    solution:
      'Document intelligence platform capable of PDF understanding, outline extraction, and persona-based analysis.',
    features: ['PDF Understanding', 'Outline Extraction', 'Persona Analysis', 'Document Intelligence'],
    stack: ['React', 'Python', 'OCR', 'NLP'],
    github: 'https://github.com/arunkumar-201/adobe-connecting-the-dots-1b',
    demo: null
  },
  {
    title: 'Judicial RAG Bot',
    badge: '⚖️ Generative AI',
    description:
      'RAG-powered legal assistant using semantic search and intelligent retrieval.',
    problem: 'Finding relevant legal information is time-consuming.',
    solution:
      'RAG-powered legal assistant using semantic search and intelligent retrieval.',
    features: ['Legal Search', 'RAG Pipeline', 'AI Summaries', 'Document Retrieval'],
    stack: ['Streamlit', 'Python', 'RAG', 'Semantic Search'],
    github: 'https://github.com/arunkumar-201/judicial_rag_bot',
    demo: 'https://judicialragbot-ka3v8jcfmrmg9twu4bbdw3.streamlit.app/'
  },
  {
    title: 'AI Mock Interview Platform',
    badge: '🤖 AI Product',
    description:
      'AI-powered mock interview system with evaluation and feedback.',
    problem: 'Interview preparation lacks personalized feedback.',
    solution: 'AI-powered mock interview system with evaluation and feedback.',
    features: ['AI Questions', 'HR Interviews', 'Technical Interviews', 'Speech Analysis', 'Performance Reports'],
    stack: ['React', 'Node.js', 'AI', 'Speech Analysis'],
    github: 'https://github.com/arunkumar-201/AI-Mock-Interview-Platform',
    demo: 'https://ai-mock-interview-platform-two-red.vercel.app/login'
  }
];

const achievements = [
  'Top 2000 Participant – Adobe India Hackathon',
  'GSSoC 2026 Contributor',
  'Built 20+ Projects',
  'Open Source Contributions',
  'MERN Stack Developer'
];

const interests = ['Generative AI', 'RAG Applications', 'AI Agents', 'MERN Stack Development', 'Open Source Contributions', 'Cloud Technologies'];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shown = window.sessionStorage.getItem('portfolio_intro_shown');
    if (!shown) {
      setShowIntro(true);
      const timeout = window.setTimeout(() => {
        window.sessionStorage.setItem('portfolio_intro_shown', 'true');
        setShowIntro(false);
      }, 2800);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTitleIndex((value) => (value + 1) % professionalTitles.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <AnimatePresence>{showIntro && <IntroOverlay />}</AnimatePresence>
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-mint via-cyan to-coral" style={{ scaleX }} />
      <Aurora />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero activeTitle={professionalTitles[activeTitleIndex]} />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <OpenSource />
      <Achievements />
      <GitHubShowcase />
      <Contact />
    </main>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-black/35 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-5">
        <a href="#top" className="group flex items-center gap-3" aria-label="Go to top">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-black text-ink transition group-hover:bg-mint">AK</span>
          <span className="hidden font-display text-sm font-semibold text-white/90 sm:block">Arun Kumar Danda</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${slug(item)}`} className="rounded-full px-4 py-2 text-sm text-white/68 transition hover:bg-white/10 hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <IconLink href={profile.github} label="GitHub">
            <Code2 size={18} />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <BriefcaseBusiness size={18} />
          </IconLink>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/8 text-white lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl border border-line bg-black/80 p-3 shadow-panel backdrop-blur-2xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${slug(item)}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

function Hero({ activeTitle }) {
  const y = useTransform(useScroll().scrollY, [0, 650], [0, 120]);

  return (
    <section
  id="top"
  className="relative isolate min-h-[100svh] overflow-hidden px-4 pt-44 sm:pt-48 lg:pt-52">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(102,217,255,0.16),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(95,255,210,0.1),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-[20rem] bg-[radial-gradient(circle_at_top,rgba(102,217,255,0.18),transparent_50%)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/8 px-3 py-2 text-sm text-white/75 shadow-panel backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_22px_rgba(95,255,210,0.9)]" />
            AI Engineer building premium product and system-level proof of work
          </div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">ARUN KUMAR DANDA</p>
        <h1 className="max-w-5xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
  Designing modern AI systems,
  <br />
  full-stack experiences,
  <br />
  and open-source infrastructure.
</h1>
         <div className="mt-8 h-[50px] flex items-center">
  <span className="text-xl font-bold uppercase tracking-[0.22em] text-cyan">
    {activeTitle}
  </span>
</div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            AI Engineer, Full Stack Developer, Open Source Contributor, and  C++ Programmer focused on premium products, AI workflows, and software reliability.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="#projects" icon={<ArrowDown size={18} />}>
              View Projects
            </PrimaryButton>
            <SecondaryButton href="/Arun_Kumar_Danda_Resume.txt" icon={<Download size={18} />} download>
              Download Resume
            </SecondaryButton>
            <SecondaryButton href="#contact" icon={<MessageSquare size={18} />}>
              Let&apos;s Connect
            </SecondaryButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <SocialPill href={profile.linkedin} icon={<BriefcaseBusiness size={17} />} label="LinkedIn" />
            <SocialPill href={profile.github} icon={<Code2 size={17} />} label="GitHub" />
            <SocialPill href={`mailto:${profile.email}`} icon={<Mail size={17} />} label="Email" />
          </div>
        </motion.div>

        <motion.div style={{ y }} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <HeroConsole />
        </motion.div>
      </div>
    </section>
  );
}

function IntroOverlay() {
  return (
    <motion.div
      key="intro-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070d]/95 px-4"
    >
      <div className="relative flex w-full max-w-3xl flex-col items-center gap-8 rounded-[3rem] border border-white/10 bg-[#071016]/95 px-8 py-10 text-center text-white shadow-[0_0_120px_rgba(59,130,246,0.2)] backdrop-blur-3xl sm:px-12 sm:py-14">
        <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
          <div className="absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan/15 blur-3xl" />
          <div className="absolute left-10 top-16 h-[220px] w-[220px] rounded-full bg-mint/15 blur-3xl" />
          <div className="absolute right-10 bottom-16 h-[260px] w-[260px] rounded-full bg-violet/15 blur-3xl" />
          <div className="absolute inset-0 opacity-40">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(95,255,210,0.12),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(102,217,255,0.08),transparent_16%)]" />
          </div>
          <div className="absolute inset-0 opacity-80">
            <div className="absolute left-[12%] top-[18%] h-1.5 w-24 rounded-full bg-white/5" />
            <div className="absolute left-[28%] top-[34%] h-0.5 w-12 rounded-full bg-white/10" />
            <div className="absolute left-[18%] top-[32%] h-3 w-3 rounded-full bg-cyan/80 blur-sm" />
            <div className="absolute right-[18%] top-[26%] h-2.5 w-2.5 rounded-full bg-mint/80 blur-sm" />
            <div className="absolute right-[24%] bottom-[24%] h-1.5 w-20 rounded-full bg-white/5" />
            <div className="absolute left-[40%] bottom-[28%] h-0.5 w-14 rounded-full bg-white/10" />
            <div className="absolute left-[46%] bottom-[38%] h-2 w-2 rounded-full bg-violet/80 blur-sm" />
            <div className="absolute left-[64%] top-[16%] h-2 w-2 rounded-full bg-white/70" />
            <div className="absolute right-[10%] top-[54%] h-2 w-2 rounded-full bg-cyan/70" />
            <div className="absolute left-[22%] bottom-[14%] h-1 w-10 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan/80">Welcome to my portfolio</p>
          <h1 className="max-w-3xl text-center font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            ARUN KUMAR DANDA
          </h1>
          <p className="max-w-3xl text-center text-sm uppercase tracking-[0.35em] text-white/60 sm:text-base">
            AI ENGINEER • FULL STACK DEVELOPER • OPEN SOURCE CONTRIBUTOR • C++ PROGRAMMER
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-full border border-white/10 bg-black/20">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.7, ease: 'easeInOut' }}
            className="h-2 rounded-full bg-gradient-to-r from-cyan via-mint to-violet"
          />
        </div>
        <p className="relative z-10 max-w-xl text-center text-sm leading-6 text-white/60">
          High-performance AI portfolio experience.
        </p>
      </div>
    </motion.div>
  );
}

function HeroConsole() {
  const stats = [
    ['Primary Focus', 'AI + Full Stack'],
    ['Core Language', 'C++'],
    ['Architecture', 'RAG, Agents, APIs'],
    ['Mindset', 'Open Source']
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-[conic-gradient(from_180deg,rgba(95,255,210,0.18),rgba(167,139,250,0.16),rgba(255,141,122,0.17),rgba(102,217,255,0.18),rgba(95,255,210,0.18))] blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/9 shadow-panel backdrop-blur-2xl">
        <div className="flex items-center gap-2 border-b border-line px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-coral" />
          <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
          <span className="h-3 w-3 rounded-full bg-mint" />
          <span className="ml-2 text-xs text-white/45">ai-engineer-profile.json</span>
        </div>
        <div className="grid gap-5 p-5 sm:p-6">
          <div className="rounded-3xl border border-line bg-black/28 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint/15 text-mint">
                  <Bot size={24} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">{profile.name}</p>
                  <p className="text-sm text-white/50">Computer Science Engineering Student</p>
                </div>
              </div>
              <span className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs text-mint">Available</span>
            </div>
            <CodeLine label="builds" value="AI products, MERN apps, document intelligence" />
            <CodeLine label="uses" value="React, Node, Python, C++, Hugging Face" />
            <CodeLine label="optimizes_for" value="impact, clarity, scalable systems" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-line bg-white/7 p-4">
                <p className="text-xs text-white/45">{label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CodeLine({ label, value }) {
  return (
    <p className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm text-white/70">
      <span className="text-cyan">{label}</span>
      <span className="text-white/35">: </span>
      <span className="text-white/80">&quot;{value}&quot;</span>
    </p>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A builder profile shaped for AI products and pragmatic engineering.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <GlassPanel>
          <p className="text-lg leading-8 text-white/72">
            I am a Computer Science Engineering student passionate about Artificial Intelligence, Generative AI, Full Stack Development, Open Source
            Software, and solving real-world problems through technology.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {interests.map((interest) => (
              <div key={interest} className="flex items-center gap-3 rounded-2xl border border-line bg-white/6 px-4 py-3 text-sm text-white/72">
                <CheckCircle2 size={17} className="shrink-0 text-mint" />
                {interest}
              </div>
            ))}
          </div>
        </GlassPanel>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <Metric label="Positioning" value="AI Developer" detail="Recruiter-focused profile for applied AI engineering." />
          <Metric label="Delivery" value="Full Stack" detail="Frontend, backend, APIs, data, and deployment-ready thinking." />
          <Metric label="Signal" value="Open Source" detail="Community contribution, issue resolution, and collaboration." />
        </div>
      </div>
    </Section>
  );
}

function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title="The path from foundational learning to AI product innovation.">
      <div className="grid gap-6 lg:grid-cols-2">
        {journey.map((step, index) => (
          <motion.article
            key={step.year}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-line bg-panel p-6 shadow-panel backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/30"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan to-mint opacity-80" />
            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan/75">{step.year}</span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{step.heading}</h3>
              <div className="mt-4 space-y-3">
                {step.items.map((item) => (
                  <div key={item} className="group flex items-start gap-3 rounded-3xl border border-white/5 bg-black/15 px-4 py-3 transition hover:border-cyan/40 hover:bg-white/5">
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-cyan shadow-[0_0_30px_rgba(102,217,255,0.12)]">
                      <CheckCircle2 size={18} />
                    </span>
                    <p className="text-sm leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
              {step.badges.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {step.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-2 text-xs font-medium text-cyan">
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A practical stack for building intelligent, usable software.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.05 }}
            className="group rounded-3xl border border-line bg-panel p-5 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/24 hover:bg-white/10"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/8 text-cyan ring-1 ring-white/10 transition group-hover:text-mint">
                <group.icon size={22} />
              </span>
              <h3 className="font-display text-base font-semibold">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-line bg-black/18 px-3 py-1.5 text-xs text-white/65">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <Section id="projects" eyebrow="Featured Projects" title="Premium AI products and high-signal engineering work.">
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-90px' }}
        className="group relative overflow-hidden rounded-[3rem] border border-line bg-panel p-8 shadow-panel backdrop-blur-3xl transition duration-300 hover:-translate-y-1 hover:border-cyan/35"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-mint/10 opacity-70" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <span className="rounded-full border border-mint/25 bg-mint/10 px-4 py-2 text-sm font-semibold text-mint">{featured.badge}</span>
            <h3 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">{featured.title}</h3>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/72">{featured.description}</p>
            <div className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan/70">Problem Statement</p>
                <p className="mt-3 text-white/70">{featured.problem}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan/70">Solution</p>
                <p className="mt-3 text-white/70">{featured.solution}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ProjectMeta label="Features" values={featured.features} />
              <ProjectMeta label="Tech Stack" values={featured.stack} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={featured.github} icon={<ArrowUpRight size={18} />}>
                View on GitHub
              </PrimaryButton>
            </div>
          </div>
          {/* <div className="hidden min-h-[220px] w-full rounded-[2rem] border border-line bg-black/20 p-6 shadow-panel lg:block">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/15 text-cyan">✨</span>
             
            </div>
          </div> */}
        </div>
      </motion.article>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {others.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-90px' }}
            transition={{ delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-line bg-panel p-6 shadow-panel backdrop-blur-3xl transition duration-300 hover:-translate-y-1 hover:border-cyan/35"
          >
            <span className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs font-medium text-mint">{project.badge}</span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm text-white/65">{project.description}</p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan/70">Problem</p>
                <p className="mt-2 text-white/70">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan/70">Solution</p>
                <p className="mt-2 text-white/70">{project.solution}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-2 text-xs text-white/55 sm:grid-cols-2">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-white/40">Features</p>
                <ul className="mt-2 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-mint">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-white/40">Tech Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.72rem] text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <SecondaryButton href={project.github} icon={<ArrowUpRight size={18} />}>
                GitHub
              </SecondaryButton>
              {project.demo && (
                <SecondaryButton href={project.demo} icon={<ArrowUpRight size={18} />}>
                  Live Demo
                </SecondaryButton>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ProjectMeta({ label, values }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-white/40">{label}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {values.map((value) => (
          <span key={value} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

function OpenSource() {
  return (
    <Section id="open-source" eyebrow="Open Source Journey" title="Contributing with authenticity, public work, and community collaboration.">
      <GlassPanel className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-lg leading-8 text-white/72">
            Selected as a GSSoC 2026 Contributor and actively contributing to open-source projects through pull requests, issue resolution, bug fixes, and
            community collaboration.
          </p>
          <p className="mt-5 text-sm leading-6 text-white/50">
            This portfolio intentionally avoids fake contribution counts. Live GitHub cards below load public data from Arun&apos;s GitHub profile and render
            only what is available from those sources.
          </p>
        </div>
        <div className="grid gap-3">
          {['Pull requests', 'Issue resolution', 'Bug fixes', 'Community collaboration'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-line bg-white/6 px-4 py-3">
              <span className="text-sm text-white/72">{item}</span>
              <CheckCircle2 size={18} className="text-mint" />
            </div>
          ))}
        </div>
      </GlassPanel>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Verified Achievements" title="Credibility signals without inflated claims.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {achievements.map((achievement) => (
          <div key={achievement} className="rounded-3xl border border-line bg-panel p-5 shadow-panel backdrop-blur-xl">
            <Star className="mb-5 text-coral" size={22} />
            <p className="text-sm font-medium leading-6 text-white/78">{achievement}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function GitHubShowcase() {
  const githubImages = useMemo(
    () => [
      {
        title: 'GitHub Stats',
        src: `https://github-readme-stats.vercel.app/api?username=${profile.githubUser}&show_icons=true&hide_border=true&theme=transparent&title_color=66d9ff&text_color=ffffff&icon_color=5fffd2`
      },
      {
        title: 'Top Languages',
        src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUser}&layout=compact&hide_border=true&theme=transparent&title_color=66d9ff&text_color=ffffff`
      },
      {
        title: 'Activity Graph',
        src: `https://github-readme-activity-graph.vercel.app/graph?username=${profile.githubUser}&theme=react-dark&hide_border=true&area=true&custom_title=Activity%20Graph`
      },
      {
        title: 'Contribution Heatmap',
        src: `https://ghchart.rshah.org/66d9ff/${profile.githubUser}`
      }
    ],
    []
  );

  return (
    <Section id="github" eyebrow="GitHub Showcase" title="Live public GitHub signals and contribution metrics.">
      <div className="grid gap-5 lg:grid-cols-2">
        {githubImages.map((image) => (
          <div key={image.title} className="overflow-hidden rounded-3xl border border-line bg-panel p-4 shadow-panel backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between px-1">
              <h3 className="font-display text-sm font-semibold text-white/78">{image.title}</h3>
              <Code2 size={17} className="text-white/40" />
            </div>
            <div className="grid min-h-40 place-items-center overflow-hidden rounded-2xl bg-black/24 p-3">
              <img className="max-h-72 w-full object-contain" src={image.src} alt={`${image.title} for ${profile.githubUser}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-line bg-black/15 p-5 shadow-panel backdrop-blur-xl">
        <p className="text-sm text-white/65">High-quality GitHub signals without inflated repository cards.</p>
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm text-cyan transition hover:bg-cyan/15">
          View Full GitHub Profile <ArrowUpRight size={16} />
        </a>
      </div> */}
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s connect about AI engineering, full stack products, and open-source work.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassPanel>
          <div className="grid gap-3">
            <ContactLink href={profile.linkedin} icon={<BriefcaseBusiness size={18} />} label="LinkedIn" value="linkedin.com/in/arunkumardanda" />
            <ContactLink href={profile.github} icon={<Code2 size={18} />} label="GitHub" value="github.com/arunkumar-201" />
            <ContactLink href={`mailto:${profile.email}`} icon={<Mail size={18} />} label="Email" value={profile.email} />
          </div>
        </GlassPanel>
        <form className="rounded-3xl border border-line bg-panel p-5 shadow-panel backdrop-blur-xl" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-white/65">Message</span>
            <textarea
              name="message"
              rows="6"
              required
              className="w-full resize-none rounded-2xl border border-line bg-black/24 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan/60"
              placeholder="Tell me what you are building or hiring for..."
            />
          </label>
          <button className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mint">
            Send Message <Send size={17} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-90px' }} className="mb-10 max-w-4xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(102,217,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_60%_80%,rgba(255,141,122,0.13),transparent_34%)]" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl animate-float" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
    </div>
  );
}

function GlassPanel({ children, className = '' }) {
  return <div className={`rounded-3xl border border-line bg-panel p-6 shadow-panel backdrop-blur-xl ${className}`}>{children}</div>;
}

function Metric({ label, value, detail }) {
  return (
    <div className="rounded-3xl border border-line bg-panel p-5 shadow-panel backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.2em] text-white/42">{label}</p>
      <p className="mt-3 font-display text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/55">{detail}</p>
    </div>
  );
}

function PrimaryButton({ href, children, icon, ...props }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:bg-mint"
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}

function SecondaryButton({ href, children, icon, ...props }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan/45 hover:bg-white/14"
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}

function SocialPill({ href, icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-white/6 px-4 py-2 text-sm text-white/68 transition hover:bg-white/12 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/8 text-white/72 transition hover:bg-white hover:text-ink"
    >
      {children}
    </a>
  );
}

function ContactLink({ href, icon, label, value }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-black/20 p-4 transition hover:border-cyan/40 hover:bg-white/8"
    >
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/8 text-cyan transition group-hover:bg-cyan group-hover:text-ink">{icon}</span>
      <span className="min-w-0">
        <span className="block text-sm text-white/45">{label}</span>
        <span className="block truncate text-sm font-medium text-white/82">{value}</span>
      </span>
    </a>
  );
}

function TypingText({ text }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex items-center gap-2">
     <span className="text-xl font-bold uppercase tracking-[0.22em] text-cyan">
        {displayed}
      </span>

      <span className="h-5 w-[2px] animate-pulse bg-cyan rounded-full" />
    </div>
  );
}

function Field({ label, name, type = 'text', autoComplete }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/65">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-line bg-black/24 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan/60"
      />
    </label>
  );
}

function slug(value) {
  return value.toLowerCase().replace(/\s+/g, '-');
}

export default App;
