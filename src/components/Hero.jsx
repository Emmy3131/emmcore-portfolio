import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const technologies = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
];

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-20">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium tracking-wide text-emerald-300">
                Available for new projects
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              I build
              <span className="block text-zinc-500">
                digital products
              </span>

              <span className="block">
                that{" "}
                <span className="text-cyan-400">
                  matter.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              I'm Emmanuel Nnaemeka, a full-stack developer focused on
              building modern web applications, e-commerce platforms,
              APIs, and digital solutions for real-world businesses.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/projects"
                className="group flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-black transition-all hover:bg-cyan-300"
              >
                View My Work

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
              >
                Let's Work Together
              </Link>

            </div>

            {/* Technologies */}
            <div className="mt-12">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600">
                Core Technologies
              </p>

              <div className="flex flex-wrap gap-2">

                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}

              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-3">

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative hidden lg:block"
          >

            {/* Outer glow */}
            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[80px]" />

            {/* Main card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto max-w-md"
            >

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-cyan-500/5">

                {/* Window header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <span className="text-[10px] text-zinc-600">
                    emmcore.dev
                  </span>

                </div>

                {/* Code */}
                <div className="p-7 font-mono text-sm leading-8">

                  <p className="text-zinc-600">
                    01
                  </p>

                  <p>
                    <span className="text-purple-400">
                      const
                    </span>{" "}
                    <span className="text-cyan-300">
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-6">
                    <span className="text-zinc-500">
                      name:
                    </span>{" "}
                    <span className="text-emerald-300">
                      "Emmanuel"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-zinc-500">
                      role:
                    </span>{" "}
                    <span className="text-emerald-300">
                      "Full-Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-zinc-500">
                      passion:
                    </span>{" "}
                    <span className="text-emerald-300">
                      "Building"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-zinc-500">
                      stack:
                    </span>{" "}
                    [
                  </p>

                  <p className="pl-12 text-cyan-300">
                    "React",
                  </p>

                  <p className="pl-12 text-cyan-300">
                    "Node.js",
                  </p>

                  <p className="pl-12 text-cyan-300">
                    "MongoDB"
                  </p>

                  <p className="pl-6">
                    ]
                  </p>

                  <p>
                    {"}"};
                  </p>

                  <div className="mt-8 flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3">

                    <FaCode className="text-cyan-400" />

                    <span className="text-xs text-zinc-400">
                      Turning ideas into production-ready software.
                    </span>

                  </div>

                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 top-1/4 rounded-2xl border border-white/10 bg-[#0D0D0D]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                  Building
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Real Solutions
                </p>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 bottom-1/4 rounded-2xl border border-cyan-400/10 bg-[#0D0D0D]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                  Stack
                </p>

                <p className="mt-1 text-sm font-bold text-cyan-400">
                  Full-Stack
                </p>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
          Scroll
        </span>

        <div className="h-8 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
      </motion.div>

    </section>
  );
}

export default Hero;