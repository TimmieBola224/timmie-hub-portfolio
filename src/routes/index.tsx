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
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-6 max-w-xl font-display text-lg text-muted-foreground sm:text-xl"
          >
            Web Designer <span className="text-electric">|</span> Accounting Professional{" "}
            <span className="text-electric">|</span> Entrepreneur{" "}
            <span className="text-electric">|</span> Public Speaker
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-4 max-w-xl text-base text-muted-foreground"
          >
            Combining financial knowledge, business experience, and creative design to deliver
            real value.
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
              View My Projects
              <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-muted-foreground"
          >
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <span className="mx-2 h-4 w-px bg-border" />
            <span className="inline-flex items-center gap-1.5 text-xs font-mono">
              <MapPin className="h-3.5 w-3.5" /> {CONTACT.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass relative rounded-3xl p-6 shadow-glow-lg">
            <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-gradient-brand text-5xl font-display font-bold text-primary-foreground shadow-glow">
              BT
            </div>
            <div className="mt-6 text-center">
              <div className="font-display text-xl font-semibold">Timmie Hub</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Technology · Accounting · Business
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "3+", v: "Yrs Speaking" },
                { k: "3", v: "Businesses" },
                { k: "400L", v: "Accounting" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-glass-border p-3">
                  <div className="font-display text-lg font-bold text-gradient">{s.k}</div>
                  <div className="text-[11px] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
        </motion.div>
      </div>
    </Section>
  );
}

function About() {
  const stats = [
    { k: "3+", v: "Years Public Speaking" },
    { k: "3", v: "Businesses Run" },
    { k: "2+", v: "Websites Delivered" },
    { k: "400L", v: "B.Sc Accounting" },
  ];
  return (
    <Section id="about">
      <SectionTitle eyebrow="01 // About" title="About Me" />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-2">
            <div className="grid aspect-[4/5] w-full place-items-center rounded-2xl bg-gradient-brand">
              <span className="font-display text-6xl font-bold text-primary-foreground">BTH</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl font-bold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass space-y-4 rounded-3xl p-8 leading-relaxed text-muted-foreground"
        >
          <p>
            My name is{" "}
            <span className="font-medium text-foreground">Bolarinwa Timilehin Hezekiah</span>, a
            multi-skilled professional driven by a passion for technology, business, and financial
            empowerment.
          </p>
          <p>
            I am currently studying Accounting at Federal University Wukari, Taraba State — not
            just to earn a degree, but to build the knowledge needed to help individuals and
            businesses understand finance, make money, and grow their wealth.
          </p>
          <p>
            With over 3 years of experience in public speaking, I have developed the ability to
            communicate ideas clearly, inspire audiences, and deliver value through every word.
          </p>
          <p>
            As an entrepreneur, I run a computer center, a food business, and a telecom service —
            giving me real hands-on experience in business operations, customer service, and
            financial management.
          </p>
          <p>
            Today I am combining all of these skills with{" "}
            <span className="font-semibold text-gradient">AI-powered web design</span> — building
            modern, professional websites that help businesses grow in the digital world.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="02 // Toolkit"
        title="Skills"
        sub="Four disciplines that combine into one practical, value-driven skill set."
      />
      <div className="grid gap-4 sm:grid-cols-2">
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
                  className="rounded-full border border-glass-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
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
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const list = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="03 // Work"
        title="Projects"
        sub="Selected work across web design, business, and public speaking."
      />
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {PROJECT_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              filter === c
                ? "bg-gradient-brand text-primary-foreground shadow-glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-6"
          >
            <div
              className={`aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} relative`}
            >
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-primary-foreground/80">
                  {p.category}
                </span>
                <span className="font-display text-2xl font-bold text-primary-foreground/90">
                  0{i + 1}
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
              </div>
              {"demo" in p && p.demo && (
                <a
                  href={p.demo}
                  aria-label={`${p.title} details`}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-glass-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
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
        sub="Practical services built on design, finance, speaking, and business experience."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
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
      <div className="glass mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl p-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Ready to start a project or get financial guidance?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
        >
          Contact Me / Get Started
          <Send className="h-4 w-4" />
        </a>
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
                <div className="glass ml-10 rounded-2xl p-6 sm:ml-0">
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
      <div className="grid gap-4 md:grid-cols-3">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <e.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display font-semibold">{e.title}</h3>
            <p className="text-sm text-muted-foreground">{e.org}</p>
            <p className="mt-1 font-mono text-xs text-electric">{e.year}</p>
            <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionTitle
        eyebrow="07 // Kind Words"
        title="Testimonials"
        sub="Results from business owners and clients I've worked with."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
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


const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn — Timilehin Hezekiah Bolarinwa", href: CONTACT.linkedin },
  { icon: Instagram, label: "Instagram — Timilehin Hezekiah Bolarinwa", href: CONTACT.instagram },
  { icon: Twitter, label: "Twitter/X — Timilehin Hezekiah Bolarinwa", href: CONTACT.twitter },
  { icon: MessageCircle, label: `WhatsApp — ${CONTACT.phone}`, href: CONTACT.whatsapp },
];

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Enter your name (max 100 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255)
      e.email = "Enter a valid email.";
    if (!form.subject.trim() || form.subject.length > 150)
      e.subject = "Enter a subject (max 150 chars).";
    if (!form.message.trim() || form.message.length > 1000)
      e.message = "Message required (max 1000 chars).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  }

  const inputClass =
    "w-full rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-electric";
  const labelClass =
    "mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground";

  return (
    <Section id="contact">
      <SectionTitle
        eyebrow="08 // Contact"
        title="Get In Touch"
        sub="I am available for freelance web design projects, financial consulting, public speaking engagements, and business consulting. Feel free to reach out through any of the channels below."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-xs text-muted-foreground">Email</div>
              <div className="truncate font-display text-sm font-semibold">{CONTACT.email}</div>
            </div>
          </a>
          <a
            href={CONTACT.phoneHref}
            className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground">Phone</div>
              <div className="font-display font-semibold">{CONTACT.phone}</div>
            </div>
          </a>
          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground">Location</div>
              <div className="font-display font-semibold">{CONTACT.location}</div>
            </div>
          </div>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="glass grid h-11 w-11 place-items-center rounded-xl transition-transform hover:-translate-y-0.5"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                required
                aria-invalid={!!errors.name}
                className={inputClass}
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </label>
            <label className="block">
              <span className={labelClass}>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                required
                aria-invalid={!!errors.email}
                className={inputClass}
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </label>
          </div>
          <label className="mt-4 block">
            <span className={labelClass}>Subject</span>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              maxLength={150}
              required
              aria-invalid={!!errors.subject}
              className={inputClass}
            />
            {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
          </label>
          <label className="mt-4 block">
            <span className={labelClass}>Message</span>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              required
              rows={5}
              aria-invalid={!!errors.message}
              className={`${inputClass} resize-none`}
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </label>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground" role="status">
              {status === "sent" && "✓ Thanks — your mail app should now be open."}
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
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand text-sm font-bold text-primary-foreground">
            T
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Timmie Hub. Built with intent.
          </span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="hover:text-foreground"
          >
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
