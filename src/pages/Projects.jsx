import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { projects } from "../Data/projects";

const categories = [
  "All",
  "E-Commerce",
  "Backend",
  "Dashboard",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const featuredProject = projects.find(
    (project) => project.id === 1
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <main>

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-white/5 pt-32">

          <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 transition hover:text-cyan-400"
              >
                <FaArrowLeft />

                Back home
              </Link>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  My Work
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Projects
                <span className="text-zinc-700">.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                A collection of digital products, applications and
                technical solutions I've built using modern web
                technologies.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ================= FEATURED ================= */}
        {featuredProject && (
          <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Featured Project
                </span>
              </div>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]"
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

                  {/* Visual */}
                  <div className="relative min-h-[400px] overflow-hidden bg-gradient-to-br from-cyan-400/10 via-[#090909] to-indigo-500/10 p-8 sm:p-12">

                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "45px 45px",
                      }}
                    />

                    <div className="relative h-full min-h-[350px] rounded-2xl border border-white/10 bg-[#050505] shadow-2xl">

                      {/* Browser */}
                      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                        <span className="ml-auto text-[9px] text-zinc-700">
                          emm-core-shops.vercel.app
                        </span>
                      </div>

                      {/* Fake interface */}
                      <div className="p-6">

                        <div className="flex items-center justify-between">
                          <div className="h-4 w-28 rounded-full bg-cyan-400/20" />

                          <div className="flex gap-2">
                            <div className="h-7 w-7 rounded-full bg-white/5" />
                            <div className="h-7 w-7 rounded-full bg-white/5" />
                          </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                          <div className="aspect-square rounded-xl bg-white/5" />
                          <div className="aspect-square rounded-xl bg-white/5" />
                          <div className="hidden aspect-square rounded-xl bg-white/5 sm:block" />
                        </div>

                        <div className="mt-6 h-3 w-2/3 rounded-full bg-white/5" />
                        <div className="mt-3 h-3 w-1/2 rounded-full bg-white/[0.03]" />

                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 sm:p-12">

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                      {featuredProject.category}
                    </span>

                    <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                      {featuredProject.title}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-zinc-500">
                      {featuredProject.description}
                    </p>

                    {/* Features */}
                    <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {featuredProject.features
                        .slice(0, 6)
                        .map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-zinc-500"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            {feature}
                          </div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {featuredProject.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium text-zinc-500"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-3">

                      {featuredProject.liveUrl !== "#" && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-xs font-bold text-black transition hover:bg-cyan-300"
                        >
                          View Live Project
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}

                      {featuredProject.githubUrl !== "#" && (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-semibold text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                        >
                          <FaGithub />
                          GitHub
                        </a>
                      )}

                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </section>
        )}

        {/* ================= ALL PROJECTS ================= */}
        <section className="border-t border-white/5 bg-[#080808] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">
                  Portfolio
                </span>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  More projects
                </h2>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeCategory === category
                        ? "bg-cyan-400 text-black"
                        : "border border-white/10 bg-white/[0.03] text-zinc-500 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

            </div>

            {/* Grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#050505]"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-cyan-400/10 to-indigo-500/10">

                    <div className="absolute inset-5 rounded-xl border border-white/10 bg-[#090909]">

                      <div className="border-b border-white/10 px-4 py-3">
                        <div className="flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-red-400/50" />
                          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                          <span className="h-2 w-2 rounded-full bg-green-400/50" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 p-4">
                        <div className="h-16 rounded-lg bg-white/5" />
                        <div className="h-16 rounded-lg bg-white/5" />
                        <div className="col-span-2 h-3 rounded-full bg-white/5" />
                      </div>

                    </div>

                    <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] text-zinc-400 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">

                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>

                      <span className="text-xs text-zinc-700">
                        0{index + 1}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {project.shortDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 4)
                        .map((technology) => (
                          <span
                            key={technology}
                            className="text-[10px] text-zinc-700"
                          >
                            #{technology.replace(/\s+/g, "")}
                          </span>
                        ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between">

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                        {project.status}
                      </span>

                      <div className="flex gap-2">

                        {project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
                            aria-label={`Open ${project.title}`}
                          >
                            <FaArrowUpRightFromSquare />
                          </a>
                        )}

                        {project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <FaGithub />
                          </a>
                        )}

                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Have an idea?
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Let's build your
                <span className="block text-zinc-600">
                  next project.
                </span>
              </h2>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
              >
                Start a Conversation

                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </div>
        </section>

      </main>

    </div>
  );
}

export default Projects;