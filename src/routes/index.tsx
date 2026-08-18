import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUp,
  Award,
  Briefcase,
  Building2,
  Calculator,
  ExternalLink,
  GraduationCap,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mic,
  Moon,
  Palette,
  Phone,
  Presentation,
  Quote,
  Rocket,
  Send,
  Sparkles,
  Sun,
  Twitter,
  Wallet,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Timmie Hub — Bolarinwa Timilehin Hezekiah | Web Design & Finance" },
      {
        name: "description",
        content:
          "Bolarinwa Timilehin Hezekiah — web designer, accounting professional, entrepreneur, and public speaker. AI-powered websites, financial consulting, training, and business setup.",
      },
      { property: "og:title", content: "Timmie Hub — Bolarinwa Timilehin Hezekiah" },
      {
        property: "og:description",
        content:
          "Combining financial knowledge, business experience, and creative design to deliver real value.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */

const CONTACT = {
  email: "bolarinwatimilehinhezekiah@gmail.com",
  phone: "+234 810 731 3932",
  phoneHref: "tel:+2348107313932",
  whatsapp: "https://wa.me/2348107313932",
  location: "Taraba State, Nigeria",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://x.com/",
};

const NAV_GROUPS = [
  { group: "Main", items: [{ id: "home", label: "Home" }, { id: "about", label: "About" }] },
  {
    group: "Expertise",
    items: [{ id: "skills", label: "Skills" }, { id: "services", label: "Services" }],
  },
  {
    group: "Work",
    items: [
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
    ],
  },
  { group: "Social Proof", items: [{ id: "testimonials", label: "Testimonials" }] },
  { group: "Contact", items: [{ id: "contact", label: "Contact" }] },
];

const NAV = NAV_GROUPS.flatMap((g) => g.items);

const SKILLS = [
  {
    icon: Palette,
    title: "Web Design",
    items: [
      "AI-Powered Web Design (Lovable)",
      "Version Control & Code Management (GitHub)",
      "HTML Fundamentals",
      "UI Design & Prototyping (Google Stitch)",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting & Finance",
    items: [
      "Financial Reporting",
      "Microsoft Excel",
      "Public Sector Accounting Knowledge",
      "Financial Literacy & Money Management",
    ],
  },
  {
    icon: Mic,
    title: "Public Speaking",
    items: ["Presentations", "Training & Teaching", "Financial Education & Coaching"],
  },
  {
    icon: Building2,
    title: "Entrepreneurship",
    items: [
      "Business Operations & Management",
      "Customer Service",
      "Computer & Tech Services",
      "Food Business Management",
      "Telecom Services",
    ],
  },
];

const PROJECT_CATEGORIES = ["All", "Web Design", "Business", "Public Speaking"] as const;

const PROJECTS = [
  {
    title: "Timmie Hub Portfolio",
    category: "Web Design",
    tagline: "Personal brand portfolio",
    description:
      "A personal portfolio website designed and built using AI-powered web design tools. Showcases my skills, services, and experience across web design, accounting, and entrepreneurship.",
    tags: ["Lovable", "Web Design", "Personal Brand"],
    demo: "#home",
    accent: "from-[oklch(0.6_0.2_255)] to-[oklch(0.45_0.2_262)]",
  },
  {
    title: "Josmay Digital Growth",
    category: "Web Design",
    tagline: "Client website — digital skills platform",
    description:
      "A client project — designed and built a modern website for Josmay Digital Growth, a platform where people learn valuable digital skills. Delivered a clean, professional, and user-friendly website to help the client establish their online presence.",
    tags: ["Client Work", "Landing Page", "Branding"],
    demo: "#contact",
    accent: "from-[oklch(0.55_0.19_258)] to-[oklch(0.68_0.15_235)]",
  },
  {
    title: "Food Business — Doughnut Sales",
    category: "Business",
    tagline: "2+ years of daily operations",
    description:
      "Running a successful doughnut business for over 2 years, managing daily operations, customer service, and sales.",
    tags: ["Operations", "Sales", "Customer Service"],
    accent: "from-[oklch(0.45_0.2_262)] to-[oklch(0.62_0.18_248)]",
  },
  {
    title: "Telecom & Data Services",
    category: "Business",
    tagline: "Affordable connectivity for the community",
    description:
      "Providing affordable telecom and data services to customers for over 2 years, building a loyal customer base.",
    tags: ["Retail", "Customer Loyalty"],
    accent: "from-[oklch(0.66_0.16_240)] to-[oklch(0.5_0.2_260)]",
  },
  {
    title: "Computer Center",
    category: "Business",
    tagline: "Local tech services hub",
    description:
      "Established and currently managing a computer center providing tech services to the local community.",
    tags: ["Tech Services", "Management"],
    accent: "from-[oklch(0.58_0.18_250)] to-[oklch(0.42_0.2_264)]",
  },
  {
    title: "Online Finance Talk",
    category: "Public Speaking",
    tagline: "Financial education session",
    description:
      "Hosted an online financial education session with colleagues, teaching practical money management and financial literacy.",
    tags: ["Speaking", "Financial Literacy"],
    accent: "from-[oklch(0.62_0.19_246)] to-[oklch(0.46_0.2_262)]",
  },
  {
    title: "One-on-One Financial Coaching",
    category: "Public Speaking",
    tagline: "Personal money coaching",
    description:
      "Provided personal financial guidance and coaching to individuals, helping them make better money decisions.",
    tags: ["Coaching", "Advisory"],
    accent: "from-[oklch(0.7_0.13_244)] to-[oklch(0.5_0.19_258)]",
  },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "I design and build modern, professional websites for businesses and individuals using AI-powered tools. Whether you need a portfolio, business website, or landing page — I will bring your vision to life.",
  },
  {
    icon: Wallet,
    title: "Financial Consulting",
    desc: "I help individuals and small businesses understand their finances, manage their money wisely, and make better financial decisions. My accounting background ensures you get reliable and practical financial guidance.",
  },
  {
    icon: Presentation,
    title: "Public Speaking & Training",
    desc: "I deliver engaging and impactful presentations and training sessions covering finance, personal development, and digital skills. Whether for a corporate event, school, or community gathering — I will inspire and educate your audience.",
  },
  {
    icon: Briefcase,
    title: "Business Setup Consulting",
    desc: "I help aspiring entrepreneurs plan, set up, and manage their businesses effectively. Drawing from my hands-on experience running multiple businesses, I provide practical guidance to help you start and grow successfully.",
  },
];

const EXPERIENCE = [
  {
    role: "Financial Secretary",
    org: "NUASA — Federal University Wukari Chapter",
    period: "2025 — Present",
    points: [
      "Managing and recording all financial transactions of the association.",
      "Maintaining accurate financial records and ensuring accountability.",
    ],
  },
  {
    role: "Assistant Financial Secretary",
    org: "NUASA — Federal University Wukari Chapter",
    period: "2024",
    points: [
      "Supported financial management and record keeping of the association.",
      "Gained hands-on experience in organizational accounting.",
    ],
  },
  {
    role: "Entrepreneur & Business Owner",
    org: "Computer Center | Doughnut Business | Telecom & Data Services",
    period: "2024 — Present",
    points: [
      "Started and managed multiple businesses from 200 level.",
      "Developed strong skills in operations, customer service, sales, and financial management.",
    ],
  },
  {
    role: "Public Speaker & Financial Coach",
    org: "Independent",
    period: "2022 — Present",
    points: [
      "Conducted online financial education sessions.",
      "Delivered one-on-one financial coaching to help people manage money better.",
    ],
  },
];

const EDUCATION = [
  {
    icon: GraduationCap,
    title: "B.Sc Accounting",
    org: "Federal University Wukari, Taraba State",
    year: "2023 — Present (400 Level)",
    desc: "Studying Accounting with a focus on financial reporting, public sector accounting, and financial management. Active member and Financial Secretary of NUASA Federal University Wukari Chapter.",
  },
  {
    icon: GraduationCap,
    title: "Secondary School Certificate",
    org: "Ondo Boys High School",
    year: "Graduated 2023",
    desc: "Completed secondary school education at one of Nigeria's reputable institutions.",
  },
  {
    icon: Award,
    title: "Public Speaking Certification",
    org: "Global Speaker Academy — Issued by Emmanuel Edoh",
    year: "2025",
    desc: "Completed a professional public speaking program, developing skills in presentation, communication, audience engagement, and impactful delivery.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Your advice really changed the way I managed my business. You taught me how to budget properly, separate business money from personal money, and reinvest my profits. Today, my business is growing steadily. I'm truly grateful!",
    name: "Okoro Ogechi",
    title: "Business Owner",
  },
  {
    quote:
      "I remember when I was struggling to make good financial decisions in my business. Your advice on saving, controlling expenses, and managing cash flow helped me a lot. Today, I'm seeing real progress and better profits. Thank you so much!",
    name: "Nkonyu Fortunate",
    title: "Business Owner",
  },
  {
    quote:
      "Your financial guidance gave me a better understanding of how to manage my business. I started keeping proper records and stopped spending my business capital unnecessarily. My business has improved tremendously, and I'm doing much better now.",
    name: "Prayer Akintunde",
    title: "Business Owner",
  },
  {
    quote:
      "I'm grateful for the financial advice you gave me when I was just starting out. Your advice on pricing, profit management, and reinvestment helped me build a stronger business. Today, my business is doing well, and I can confidently say your advice made a difference.",
    name: "Blessing Okeke",
    title: "Business Owner",
  },
  {
    quote:
      "Getting my business website built by you was one of the best decisions I made for my business. You didn't just help me create a beautiful website — you helped me understand how to present my brand professionally online and attract more customers. Since launching the website, my business has gained more visibility and credibility. I'm really grateful for your excellent work!",
    name: "Josmay Digital Growth",
    title: "Client | Web Design",
  },
];

/* ---------- Utilities ---------- */

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ---------- Backgrounds ---------- */

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
      })),
    [],
  );

  const codeSnippets = ["const build = () =>", "async function ship()", "<Portfolio />", "return <Elegance/>", "// 0 → 1", "npm run scale"];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-gradient-brand opacity-25 blur-3xl animate-aurora" />
      <div
        className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(circle, var(--violet), transparent 70%)",
          animationDelay: "-10s",
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-electric animate-float-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 8px var(--electric)",
          }}
        />
      ))}
      {/* Floating code fragments */}
      {codeSnippets.map((s, i) => (
        <span
          key={s}
          className="absolute font-mono text-xs text-muted-foreground/40 select-none"
          style={{
            left: `${(i * 17 + 8) % 90}%`,
            top: `${(i * 23 + 12) % 85}%`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

/* ---------- Reusable ---------- */

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 max-w-2xl"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

/* ---------- Sections ---------- */

function Nav({ active }: { active: string }) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <nav
          aria-label="Primary"
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "shadow-glow" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-glow">
              T
            </span>
            <span className="text-sm sm:text-base">Timmie Hub</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    active === n.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-gradient-brand opacity-20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="grid h-9 w-9 place-items-center rounded-lg border border-glass-border transition-colors hover:bg-secondary"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-lg border border-glass-border lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 rounded-2xl p-3 lg:hidden"
            >
              <ul className="grid gap-1">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-sm ${
                        active === n.id
                          ? "bg-gradient-brand text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <Section id="home" className="pt-40 sm:pt-44">
      <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-electric animate-pulse-ring" />
              <span className="relative h-2 w-2 rounded-full bg-electric" />
            </span>
            <span className="font-mono uppercase tracking-widest text-muted-foreground">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Bolarinwa Timilehin
            <br />
            <span className="text-gradient">Hezekiah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl font-display text-lg text-muted-foreground sm:text-xl"
          >
            Full-Stack Developer <span className="text-electric">|</span> Building Scalable
            Digital Experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-4 text-muted-foreground"
          >
            <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <span className="mx-2 h-4 w-px bg-border" />
            <span className="inline-flex items-center gap-1.5 text-xs font-mono">
              <MapPin className="h-3.5 w-3.5" /> Remote · Worldwide
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass relative rounded-3xl p-4 shadow-glow-lg">
            <div className="flex items-center gap-1.5 border-b border-glass-border pb-3">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">timmie.dev</span>
            </div>
            <pre className="mt-4 overflow-hidden font-mono text-[13px] leading-relaxed">
{`const timmie = {
  name: "Bolarinwa Timilehin",
  role: "Full-Stack Developer",
  stack: ["React", "Node", "Cloud", "AI"],
  currentlyBuilding: () =>
    "scalable products with taste",
};

export default timmie;`}
            </pre>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
        </motion.div>
      </div>
    </Section>
  );
}

function About() {
  const stats = [
    { k: "5+", v: "Years Experience" },
    { k: "30+", v: "Projects Shipped" },
    { k: "15+", v: "Happy Clients" },
    { k: "6", v: "Certifications" },
  ];
  return (
    <Section id="about">
      <SectionTitle eyebrow="01 // About" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm <span className="text-foreground font-medium">Bolarinwa Timilehin Hezekiah</span>{" "}
            — a full-stack engineer obsessed with turning ambitious ideas into products people love
            to use. I design and build the whole stack: performant interfaces, dependable APIs, and
            cloud infrastructure that scales without drama.
          </p>
          <p className="mt-4">
            Under the brand <span className="text-gradient font-semibold">Timmie Hub</span>, I
            partner with founders and teams to ship polished MVPs, modernize legacy systems, and
            integrate AI where it genuinely moves the needle. Clean code, thoughtful UX, and honest
            engineering — that's the standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-4xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="02 // Toolkit"
        title="Skills & Stack"
        sub="Battle-tested tools I reach for to ship reliable, fast, and delightful products."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-glass-border bg-secondary/40 px-3 py-1 text-xs font-mono text-muted-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="03 // Work"
        title="Featured Projects"
        sub="A selection of products I've designed, engineered, and shipped."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-6"
          >
            <div
              className={`aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} relative`}
            >
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-white/80">
                  Case Study
                </span>
                <span className="font-display text-2xl font-bold text-white/90">
                  0{i + 1}
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={p.github}
                  aria-label={`${p.title} GitHub`}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-glass-border transition-colors hover:bg-secondary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={p.demo}
                  aria-label={`${p.title} live demo`}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-primary-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-glass-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services">
      <SectionTitle
        eyebrow="04 // Services"
        title="How I Can Help"
        sub="Engagements tailored to your stage — from zero to scale."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass flex gap-5 rounded-2xl p-6"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionTitle eyebrow="05 // Journey" title="Experience" />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric via-violet to-transparent sm:left-1/2" />
        <div className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative grid gap-4 sm:grid-cols-2 ${
                i % 2 === 0 ? "" : "sm:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className={`sm:pr-10 ${i % 2 === 1 ? "sm:order-2 sm:pl-10 sm:pr-0" : ""}`}>
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-electric">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-mono text-xs uppercase tracking-widest">
                      {e.period}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="absolute left-4 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-brand shadow-glow sm:left-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education">
      <SectionTitle eyebrow="06 // Credentials" title="Education & Certifications" />
      <div className="grid gap-4 sm:grid-cols-2">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass flex items-start gap-4 rounded-2xl p-6"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <e.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-1 font-mono text-xs text-electric">{e.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionTitle eyebrow="07 // Kind Words" title="Testimonials" />
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass relative rounded-2xl p-6"
          >
            <Quote className="h-6 w-6 text-electric opacity-70" />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <footer className="mt-5 border-t border-glass-border pt-4">
              <div className="font-display font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.title}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}

function GitHubShowcase() {
  const weeks = 26;
  const days = 7;
  const grid = useMemo(
    () =>
      Array.from({ length: weeks }, () =>
        Array.from({ length: days }, () => Math.floor(Math.random() * 5)),
      ),
    [],
  );
  const colors = [
    "oklch(0.55 0.19 258 / 0.12)",
    "oklch(0.7 0.13 250 / 0.45)",
    "oklch(0.62 0.17 255 / 0.7)",
    "oklch(0.55 0.19 258)",
    "oklch(0.42 0.2 262)",
  ];

  return (
    <Section id="github">
      <SectionTitle
        eyebrow="08 // Open Source"
        title="GitHub Activity"
        sub="A snapshot of consistent, focused work across projects."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-display text-lg font-semibold">@timmiehub</div>
            <div className="text-xs text-muted-foreground font-mono">
              1,240+ contributions in the last year
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-glass-border px-3 py-1.5 text-xs transition-colors hover:bg-secondary"
          >
            <Github className="h-3.5 w-3.5" /> View Profile
          </a>
        </div>

        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-1">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((v, di) => (
                  <motion.span
                    key={di}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: (wi * days + di) * 0.004 }}
                    className="h-3 w-3 rounded-[3px]"
                    style={{ backgroundColor: colors[v] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-2 text-[11px] font-mono text-muted-foreground">
          <span>Less</span>
          {colors.map((c, i) => (
            <span key={i} className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: c }} />
          ))}
          <span>More</span>
        </div>
      </motion.div>
    </Section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Enter your name (max 100 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255)
      e.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.length > 1000)
      e.message = "Message required (max 1000 chars).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulated send — wire up to a server function or email service later.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <Section id="contact">
      <SectionTitle
        eyebrow="09 // Contact"
        title="Let's Build Something"
        sub="Have a project in mind? I'd love to hear about it."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a
            href="mailto:hello@timmiehub.dev"
            className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-mono">Email</div>
              <div className="font-display font-semibold">hello@timmiehub.dev</div>
            </div>
          </a>
          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-mono">Based in</div>
              <div className="font-display font-semibold">Lagos, Nigeria · Remote</div>
            </div>
          </div>
          <div className="flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="glass grid h-11 w-11 place-items-center rounded-xl transition-transform hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Name
              </span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                required
                aria-invalid={!!errors.name}
                className="w-full rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-electric"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                required
                aria-invalid={!!errors.email}
                className="w-full rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-electric"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Message
            </span>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              required
              rows={5}
              aria-invalid={!!errors.message}
              className="w-full resize-none rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-electric"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </label>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground">
              {status === "sent" && "✓ Message sent — I'll get back within 24h."}
              {status === "error" && "Something went wrong. Try again."}
            </span>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glass-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand text-primary-foreground text-sm font-bold">
            T
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Timmie Hub. Crafted with intent.
          </span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="GitHub" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="mailto:hello@timmiehub.dev" aria-label="Email" className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-brand"
    />
  );
}

/* ---------- Root Page ---------- */

function Portfolio() {
  const active = useActiveSection(NAV.map((n) => n.id));
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <ScrollProgress />
      <ParticleField />
      <Nav active={active} />
      <main ref={mainRef}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Education />
        <Testimonials />
        <GitHubShowcase />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
