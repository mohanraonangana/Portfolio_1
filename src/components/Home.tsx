import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDownCircleIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  // Subtle spotlight following cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const spotlight = useTransform([mouseX, mouseY], ([x, y]) => `radial-gradient(400px 400px at ${x}px ${y}px, hsl(var(--primary)/0.12), transparent 60%)`);

  // Animated Counter component
  const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [display, setDisplay] = useState(0);
    useEffect(() => {
      let frame: number;
      const duration = 900;
      const start = performance.now();
      const animate = (t: number) => {
        const progress = Math.min(1, (t - start) / duration);
        setDisplay(Math.floor(value * progress));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [value]);
    return (
      <div className="text-2xl font-bold text-foreground">
        <span ref={ref}>{display}</span>
        {suffix && <span>{suffix}</span>}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-28 relative">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight as unknown as string }}
      />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Hi, I’m Mohanrao</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Entry‑level developer learning the fundamentals of web development. I’m building small projects to
              strengthen my basics in React,and Java/Spring Boot.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                <RocketLaunchIcon className="h-5 w-5" /> View Projects
              </a>
              <a
                href="#stack"
                className="inline-flex items-center gap-2 bg-secondary px-5 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors"
              >
                <ArrowDownCircleIcon className="h-5 w-5" /> Tech Stack
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md font-medium hover:bg-card transition-colors"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative md:max-w-sm md:ml-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-foreground/10 blur-2xl rounded-full" />
              <div className="relative w-72 h-72 rounded-2xl glass ring-gradient overflow-hidden">
                <img
                  src="/assets/profile.jpg.jpg"
                  alt="Mohanrao Nangana"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                <div className="absolute -inset-1 rounded-3xl pointer-events-none" style={{
                  background:
                    'conic-gradient(from 180deg at 50% 50%, hsl(var(--primary)/0.25), transparent, hsl(var(--primary)/0.25))'
                }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-20 max-w-5xl mx-auto px-4" id="about">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 space-y-4 text-muted-foreground text-lg"
        >
          <p>
            I’m at the beginning of my journey. I focus on clear fundamentals: HTML/CSS layouts, JavaScript
            basics, component‑based UIs in React, and core Java concepts.
          </p>
          <p>
            My goal right now is to learn by doing—cloning simple apps, reading docs, and improving a little each week.
            I’m actively looking for entry‑level roles or internships where I can learn from a team and contribute.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-base">
            <li className="bg-card border border-border rounded-md px-4 py-2">Practicing responsive layouts and accessibility basics</li>
            <li className="bg-card border border-border rounded-md px-4 py-2">Learning React hooks, props/state, and component patterns</li>
            <li className="bg-card border border-border rounded-md px-4 py-2">Exploring Java, Spring Boot, and REST fundamentals</li>
            <li className="bg-card border border-border rounded-md px-4 py-2">Building small projects and improving consistently</li>
          </ul>
        </motion.div>
      </section>

      {/* Tech Marquee */}
      <section className="mt-12">
        <div className="marquee">
          <div className="marquee-content">
            {['React','Spring Boot','Node.js','AWS','Docker','MongoDB','MySQL','Framer Motion','TailwindCSS'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-card border border-border text-sm text-muted-foreground">{t}</span>
            ))}
            {['React','Spring Boot','Node.js','AWS','Docker','MongoDB','MySQL','Framer Motion','TailwindCSS'].map((t) => (
              <span key={t+"-dup"} className="px-3 py-1 rounded-full bg-card border border-border text-sm text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="stack">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-foreground"
        >
          Tech Stack
        </motion.h2>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            'React',
            'Node.js',
            'Spring Boot',
            'MySQL',
            'MongoDB',
            'Docker',
            'AWS',
          ].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-lg px-4 py-3 text-center text-sm font-medium text-foreground"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <CodeBracketIcon className="h-5 w-5" /> Open to internships and roles
          </a>
        </div>
      </section>

      {/* Featured Project */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-2xl font-bold">Featured: Campus Placement Management</h3>
            <p className="mt-2 text-muted-foreground">A full-featured app for students, companies, and admins with scheduling, analytics, and more.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React','Node.js','MongoDB','Express'].map((t) => (
                <span key={t} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
              ))}
            </div>
            <a href="/projects" className="inline-block mt-6 text-primary hover:text-primary/80">Explore projects →</a>
          </div>
          <motion.div
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative min-h-48 bg-gradient-to-br from-primary/15 to-foreground/10"
          />
        </motion.div>
      </section>

      {/* Quick Stats Section with animated counters and blobs */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div aria-hidden className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-56 h-56 rounded-full bg-primary/10 blur-3xl animate-[blob_14s_infinite]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-foreground/10 blur-3xl animate-[blob_18s_infinite]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ label: 'Projects', value: 10, suffix: '+' }, { label: 'Certifications', value: 5, suffix: '+' }, { label: 'Hackathons', value: 3, suffix: '' }, { label: 'Cups of Coffee', value: 99, suffix: '+' }].map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass rounded-xl p-5 text-center"
            >
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


