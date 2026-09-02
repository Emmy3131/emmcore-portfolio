import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaServer,
  FaMobileScreen,
  FaRocket,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

/*
============================================================
SKILLS
============================================================
*/

const skills = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Building responsive, interactive and accessible interfaces with modern frontend technologies.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Creating reliable APIs, authentication systems and server-side business logic.",
  },
  {
    icon: FaDatabase,
    title: "Database Design",
    description:
      "Designing and working with structured data and databases for scalable applications.",
  },
  {
    icon: FaMobileScreen,
    title: "Responsive Design",
    description:
      "Making applications work beautifully across desktops, tablets and mobile devices.",
  },
];

/*
============================================================
TECHNOLOGIES
============================================================
*/

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
];

/*
============================================================
DEVELOPMENT PRINCIPLES
============================================================
*/

const principles = [
  "Write clean and maintainable code",
  "Build around real user needs",
  "Keep interfaces simple and intuitive",
  "Prioritize performance and responsiveness",
  "Design systems that can grow with the product",
  "Continuously learn and improve",
];

/*
============================================================
ABOUT PAGE
============================================================
*/

function About() {
  return (
    <div className="overflow-hidden bg-[#050505] text-white">
      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-white/5 pt-20 sm:pt-25">
          {/* Background glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

          <div className="pointer-events-none absolute -right-40 top-40 h-[350px] w-[350px] rounded-full bg-indigo-500/[0.04] blur-[120px]" />

          {/* Grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl"
            >
              {/* Back */}

              <Link
                to="/"
                className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 transition hover:text-cyan-400"
              >
                ← Back home
              </Link>

              {/* Label */}

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  About Me
                </span>
              </div>

              {/* Heading */}

              <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Developer.
                <span className="block text-zinc-700">
                  Builder. Problem solver.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                I'm Emmanuel Nnaemeka, a full-stack developer focused on
                creating modern digital products that solve real-world
                problems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="relative pt-10 sm:pt-15">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

              {/* =================================================
                  TEXT — LEFT
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                    My Story
                  </span>
                </div>

                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  I don't just write code.
                  <span className="block text-zinc-600">
                    I build solutions.
                  </span>
                </h2>

                <div className=" space-y-5 text-sm leading-7 text-zinc-500">
                  <p>
                    My interest in technology comes from a simple idea:
                    software should make things easier, faster and more
                    useful.
                  </p>

                  <p>
                    As a developer, I enjoy taking an idea and turning it
                    into a working product. That means thinking about the
                    user interface, backend architecture, database,
                    security and the overall experience.
                  </p>

                  <p>
                    My work has led me to build e-commerce platforms,
                    APIs, dashboards, payment systems and other practical
                    web applications.
                  </p>

                  <p>
                    I'm continuously improving my skills and exploring
                    better ways to build software that is reliable,
                    maintainable and enjoyable to use.
                  </p>
                </div>

                {/* CTA */}

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-cyan-300"
                >
                  Let's work together

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* =================================================
                  PROFILE IMAGE — RIGHT
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="relative lg:justify-self-end"
              >
                {/* Outer glow */}

                <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/[0.04] blur-3xl" />

                {/* Image container */}

                <div className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] shadow-2xl">

                  {/* Grid overlay */}

                  <div
                    className="pointer-events-none absolute inset-0 z-10 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Profile image */}

                  <img
                    src="/images/emmanuel-profile.png"
                    alt="Emmanuel Nnaemeka - Full-Stack Developer"
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Dark gradient */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                  {/* Top label */}

                  <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md">
                    Emmanuel Nnaemeka
                  </div>

                  {/* Bottom information */}

                  <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                          Currently
                        </p>

                        <p className="mt-2 text-sm font-semibold text-white">
                          Building digital products
                        </p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                        <FaRocket />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating status */}

                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#0b0b0b] px-5 py-4 shadow-2xl sm:block">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                    </span>

                    <span className="text-xs font-semibold text-zinc-400">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ====================================================== */}

        <section className="border-y border-white/5 bg-[#080808] pt-10 sm:pt-15">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                What I Do
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Skills that turn
                <span className="block text-zinc-600">
                  ideas into products.
                </span>
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.article
                    key={skill.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-3xl border border-white/10 bg-[#050505] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                      <Icon />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-white">
                      {skill.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      {skill.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT APPROACH
        ====================================================== */}

        <section className="pt-10 sm:pt-15">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-2">

              {/* Left */}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                    My Approach
                  </span>
                </div>

                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Simple principles.
                  <span className="block text-zinc-600">
                    Strong products.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
                  Good software isn't only about writing more code.
                  It's about understanding the problem, choosing the
                  right tools and building something that people can
                  actually use.
                </p>
              </motion.div>

              {/* Right */}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <div
                      key={principle}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/20"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-400">
                        <FaCheck />
                      </div>

                      <span className="text-sm text-zinc-400 transition group-hover:text-zinc-300">
                        {principle}
                      </span>

                      <span className="ml-auto text-xs text-zinc-800">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGIES
        ====================================================== */}

        <section className="border-y border-white/5 bg-[#080808] pt-10 sm:pt-15">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="text-center">

              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Technology Stack
                </span>

                <span className="h-px w-8 bg-cyan-400" />
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Technologies I work with.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-600">
                A growing toolkit for building modern web applications
                and digital products.
              </p>
            </div>

            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
              {technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                  }}
                  className="rounded-full border border-white/10 bg-[#050505] px-5 py-3 text-xs font-semibold text-zinc-400 transition hover:border-cyan-400/20 hover:text-cyan-400"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CURRENT FOCUS
        ====================================================== */}

        <section className="pt-10 sm:pt-15">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090909] p-8 sm:p-12"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/5 blur-[100px]" />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div className="max-w-2xl">

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <FaRocket />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                      Current Focus
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
                    Building better digital experiences.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    I'm currently focused on improving my full-stack
                    development skills, building real products and
                    creating solutions that combine strong engineering
                    with thoughtful design.
                  </p>
                </div>

                <Link
                  to="/projects"
                  className="group inline-flex shrink-0 items-center gap-3 text-sm font-bold text-white transition hover:text-cyan-400"
                >
                  Explore my work

                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="border-t border-white/5 py-10 sm:py-15">
          <div className="mx-auto max-w-4xl px-6 text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Let's create something
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Have a project
                <span className="block text-zinc-600">
                  worth building?
                </span>
              </h2>

              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
              >
                Get in touch

                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;