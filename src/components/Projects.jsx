import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { projects } from "../Data/projects";
import ProjectCard from "./ProjectsCard";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Things I've
              <span className="block text-zinc-600">
                built.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-zinc-500">
              A selection of projects where I've turned ideas into
              functional digital products using modern technologies.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 text-sm font-bold text-white transition hover:text-cyan-400"
          >
            View all projects

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Third project */}
        {featuredProjects[2] && (
          <div className="mt-6 lg:w-1/2">
            <ProjectCard
              project={featuredProjects[2]}
              index={2}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;