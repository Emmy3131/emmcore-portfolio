import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaDownload,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const stats = [
  {
    value: "01+",
    label: "Years Building",
  },
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "05+",
    label: "Technologies",
  },
  {
    value: "24/7",
    label: "Learning & Building",
  },
];

const expertise = [
  {
    icon: FaCode,
    title: "Full-Stack Development",
    description:
      "Building complete web applications from responsive interfaces to secure backend APIs and databases.",
  },
  {
    icon: FaLaptopCode,
    title: "E-Commerce Solutions",
    description:
      "Creating modern shopping experiences with products, carts, checkout, payments, orders and admin systems.",
  },
  {
    icon: FaLightbulb,
    title: "Digital Solutions",
    description:
      "Turning business ideas into practical software products designed around real user needs.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Building technology
            <span className="block text-zinc-600">with purpose.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-zinc-300">
              I'm Emmanuel Nnaemeka, a full-stack developer passionate about
              building useful digital products and solving real-world
              problems with technology.
            </p>

            <p className="mt-6 leading-7 text-zinc-500">
              I work across the frontend and backend, combining clean
              interfaces with reliable APIs, databases and business logic. My
              goal is simple: build software that looks great, works properly
              and creates real value.
            </p>

            <p className="mt-6 leading-7 text-zinc-500">
              From e-commerce platforms and payment integrations to dashboards
              and custom APIs, I enjoy taking an idea from concept to a working
              product.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* More About Me */}
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 text-sm font-bold text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
              >
                More about me

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Download CV */}
              <a
                href="/Emmanuel-Nnaemeka-CV-v3.pdf"
                download="Emmanuel-Nnaemeka-CV-v3.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-sm font-bold text-cyan-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <FaDownload className="text-xs transition-transform duration-300 group-hover:translate-y-0.5" />

                Download CV
              </a>
            </div>
          </motion.div>

          {/* Expertise cards */}
          <div className="space-y-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5 text-cyan-400">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-7 text-center ${
                index !== stats.length - 1
                  ? "border-b border-white/10 md:border-b-0 md:border-r"
                  : ""
              } ${
                index === 1
                  ? "md:border-b-0"
                  : ""
              }`}
            >
              <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-600">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;