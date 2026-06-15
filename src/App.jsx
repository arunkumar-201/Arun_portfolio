import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
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
  title: 'AI Developer | Full Stack Developer | C++ Programmer | Open Source Contributor',
  email: 'dandaarunkumar777@gmail.com',
  githubUser: 'arunkumar-201',
  github: 'https://github.com/arunkumar-201',
  linkedin: 'https://www.linkedin.com/in/arunkumardanda/'
};

const navItems = ['About', 'Skills', 'Projects', 'Open Source', 'GitHub', 'Contact'];

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
    badge: 'Flagship Project',
    description:
      'AI-powered business operations platform designed to automate workflows, streamline business processes, improve productivity, and provide intelligent insights.',
    focus: ['Workflow automation', 'Operational intelligence', 'Productivity systems']
  },
  {
    title: 'AI Career Guidance System',
    badge: 'AI Product',
    description:
      'AI-powered career guidance platform that recommends career paths through skill analysis, resume evaluation, and personalized suggestions.',
    focus: ['Skill analysis', 'Resume evaluation', 'Personalized guidance']
  },
  {
    title: 'Adobe India Hackathon Project',
    badge: 'Hackathon Project',
    description:
      'Document intelligence solution focused on PDF understanding, outline extraction, and persona-based document analysis.',
    achievement: 'Top 2000 Participant Among 200,000+ Participants',
    focus: ['PDF understanding', 'Outline extraction', 'Persona-based analysis']
  },
  {
    title: 'MediDoc AI',
    badge: 'AI Healthcare',
    description: 'Smart health record analyzer that extracts and summarizes medical PDF information using AI.',
    focus: ['Medical PDFs', 'Summarization', 'Information extraction']
  },
  {
    title: 'Healthcare Claims Fraud Detection',
    badge: 'Analytics',
    description: 'Power BI dashboard for healthcare fraud detection and claims analysis.',
    focus: ['Power BI', 'Claims analytics', 'Fraud detection']
  }
];

const achievements = [
  'Top 2000 Participant - Adobe India Hackathon',
  'GSSoC 2026 Contributor',
  'Built 15+ Projects',
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-mint via-cyan to-coral" style={{ scaleX }} />
      <Aurora />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
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

function Hero() {
  const y = useTransform(useScroll().scrollY, [0, 650], [0, 120]);

  return (
    <section id="top" className="relative isolate min-h-[100svh] px-4 pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/8 px-3 py-2 text-sm text-white/75 shadow-panel backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_22px_rgba(95,255,210,0.9)]" />
            AI Developer building recruiter-ready proof of work
          </div>
          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Building Intelligent AI Solutions For Real-World Problems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            AI Developer, Full Stack Engineer, and Open Source Contributor focused on building impactful products and scalable intelligent systems.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">{profile.title}</p>
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
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected proof of work across AI, documents, healthcare, analytics, and business automation.">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-70px' }}
            className={`group relative overflow-hidden rounded-3xl border border-line bg-panel p-6 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan/35 ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs font-medium text-mint">{project.badge}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/8 text-white/70 transition group-hover:bg-white group-hover:text-ink">
                <ArrowUpRight size={19} />
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/68">{project.description}</p>
            {project.achievement && (
              <p className="mt-4 inline-flex rounded-2xl border border-coral/25 bg-coral/10 px-4 py-2 text-sm font-medium text-coral">{project.achievement}</p>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.focus.map((item) => (
                <span key={item} className="rounded-full border border-line bg-black/20 px-3 py-1.5 text-xs text-white/55">
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
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://gh-pinned-repos.egoist.dev/?username=${profile.githubUser}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Pinned repository request failed');
        return response.json();
      })
      .then((data) => {
        setRepos(Array.isArray(data) ? data.slice(0, 4) : []);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
    return () => controller.abort();
  }, []);

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
    <Section id="github" eyebrow="GitHub Showcase" title="Live public GitHub signals, loaded directly from Arun's profile.">
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

      <div className="mt-5 rounded-3xl border border-line bg-panel p-5 shadow-panel backdrop-blur-xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-xl font-semibold">Pinned Repositories</h3>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan hover:text-mint">
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        {status === 'loading' && <p className="text-sm text-white/55">Loading public repositories from GitHub...</p>}
        {status === 'error' && <p className="text-sm text-white/55">Pinned repository data is temporarily unavailable.</p>}
        {status === 'ready' && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {repos.map((repo) => (
              <a
                key={`${repo.owner}/${repo.repo}`}
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-line bg-black/20 p-4 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-base font-semibold text-white group-hover:text-cyan">{repo.repo}</h4>
                  <ArrowUpRight size={16} className="shrink-0 text-white/35 group-hover:text-cyan" />
                </div>
                <p className="mt-3 line-clamp-3 min-h-16 text-sm leading-6 text-white/55">{repo.description || 'Pinned public GitHub repository.'}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/45">
                  {repo.language && <span>{repo.language}</span>}
                  <span>{repo.stars} stars</span>
                  <span>{repo.forks} forks</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
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
