import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaArrowUpRightFromSquare,
    FaGithub,
    FaCheck,
    FaCode,
} from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { projects } from "../Data/projects";

function ProjectDetails() {
    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return (
            <div className="min-h-screen bg-[#050505] text-white">

                <main className="flex min-h-screen items-center justify-center px-6 pt-20">
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                            404
                        </p>

                        <h1 className="mt-4 text-4xl font-black">
                            Project not found.
                        </h1>

                        <Link
                            to="/projects"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black"
                        >
                            <FaArrowLeft />
                            Back to projects
                        </Link>
                    </div>
                </main>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white">

            <main>

                {/* =====================================================
            HERO
        ===================================================== */}
                <section className="relative overflow-hidden border-b border-white/5 pt-32">
                    <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[150px]" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">

                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 transition hover:text-cyan-400"
                        >
                            <FaArrowLeft />
                            Back to projects
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="mt-10 max-w-5xl"
                        >
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-cyan-400" />

                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                    {project.category}
                                </span>
                            </div>

                            <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                                {project.title}
                                <span className="text-zinc-700">.</span>
                            </h1>

                            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-500 sm:text-lg">
                                {project.description}
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                {project.liveUrl !== "#" && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-cyan-300"
                                    >
                                        View Live Project
                                        <FaArrowUpRightFromSquare />
                                    </a>
                                )}

                                {project.githubUrl !== "#" && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                                    >
                                        <FaGithub />
                                        View GitHub
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =====================================================
            PROJECT OVERVIEW
        ===================================================== */}
                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                    Overview
                                </span>

                                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                                    Building something
                                    <span className="block text-zinc-600">
                                        useful.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500">
                                    {project.overview}
                                </p>

                                <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-500">
                                    {project.outcome}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl border border-white/10 bg-[#090909] p-7"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-700">
                                    Project information
                                </p>

                                <div className="mt-7 space-y-5">

                                    <div className="flex items-center justify-between border-b border-white/5 pb-5">
                                        <span className="text-sm text-zinc-600">
                                            Type
                                        </span>

                                        <span className="text-sm font-semibold text-white">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between border-b border-white/5 pb-5">
                                        <span className="text-sm text-zinc-600">
                                            Status
                                        </span>

                                        <span className="text-sm font-semibold text-emerald-400">
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-zinc-600">
                                            Technologies
                                        </span>

                                        <span className="text-right text-sm font-semibold text-white">
                                            {project.technologies.length} technologies
                                        </span>
                                    </div>

                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
            FEATURES
        ===================================================== */}
                <section className="border-y border-white/5 bg-[#080808] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                Features
                            </span>

                            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                                What was built.
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {project.features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.04,
                                    }}
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#050505] p-5"
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-400">
                                        <FaCheck />
                                    </div>

                                    <span className="text-sm text-zinc-400">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}
                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                <FaCode />
                            </div>

                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                                    Technology
                                </span>

                                <h2 className="mt-1 text-2xl font-black">
                                    Built with modern tools.
                                </h2>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-xs font-semibold text-zinc-400 transition hover:border-cyan-400/20 hover:text-cyan-400"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                    </div>
                </section>

                {/* =====================================================
            CHALLENGES
        ===================================================== */}
                {/* <section className="border-y border-white/5 bg-[#080808] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-2">

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Challenges
                </span>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Problems worth
                  <span className="block text-zinc-600">
                    solving.
                  </span>
                </h2>
              </div>

              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={challenge}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-[#050505] p-5"
                  >
                    <span className="text-xs font-bold text-cyan-400">
                      0{index + 1}
                    </span>

                    <p className="text-sm leading-6 text-zinc-500">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section> */}

                {/* =====================================================
            SCREENSHOTS
        ===================================================== */}
                {(project.screenshots || []).length > 0 && (
                    <section className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">

                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                    Screenshots
                                </span>

                                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                                    Inside the project.
                                </h2>
                            </div>

                            <div className="mt-12 grid gap-8 md:grid-cols-2">

                                {(project.screenshots || []).map((screenshot, index) => (
                                    <motion.article
                                        key={screenshot.title || index}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.08,
                                        }}
                                    >
                                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]">

                                            <div className="aspect-video bg-white/[0.02]">
                                                <img
                                                    src={screenshot.image}
                                                    alt={screenshot.title || "Project screenshot"}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>

                                        </div>

                                        <h3 className="mt-5 text-lg font-bold">
                                            {screenshot.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-zinc-600">
                                            {screenshot.description}
                                        </p>
                                    </motion.article>
                                ))}

                            </div>
                        </div>
                    </section>
                )}

                {/* =====================================================
            CTA
        ===================================================== */}
                <section className="border-t border-white/5 py-28 sm:py-36">
                    <div className="mx-auto max-w-4xl px-6 text-center">

                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                            Next project
                        </p>

                        <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                            Have an idea
                            <span className="block text-zinc-600">
                                worth building?
                            </span>
                        </h2>

                        <Link
                            to="/contact"
                            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
                        >
                            Start a conversation

                            <FaArrowUpRightFromSquare className="transition-transform group-hover:translate-x-1" />
                        </Link>

                    </div>
                </section>

            </main>

        </div>
    );
}

export default ProjectDetails;