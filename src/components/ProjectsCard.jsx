import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProjectCard({ project, index }) {
  const hasImage =
    project.screenshots &&
    project.screenshots.length > 0 &&
    project.screenshots[0]?.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0A0A0A]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-400/20
        hover:shadow-2xl
        hover:shadow-cyan-400/5
        section-padding
      "
    >
      {/* =====================================================
          PROJECT VISUAL
      ===================================================== */}
      <Link
        to={`/projects/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} case study`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#080808]">

          {hasImage ? (
            <>
              {/* Real project image */}
              <img
                src={project.screenshots[0].image}
                alt={`${project.title} project screenshot`}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Dark overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-cyan-400/0
                  transition-colors
                  duration-500
                  group-hover:bg-cyan-400/5
                "
              />
            </>
          ) : (
            /* =================================================
               FALLBACK VISUAL
            ================================================= */
            <>
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-[#0A0A0A] to-indigo-500/10" />

              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              {/* Browser mockup */}
              <div
                className="
                  absolute
                  left-[8%]
                  right-[8%]
                  top-[12%]
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-[#080808]
                  shadow-2xl
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                "
              >
                {/* Browser header */}
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />
                </div>

                {/* Browser content */}
                <div className="p-5">
                  <div className="mb-5 h-3 w-32 rounded-full bg-cyan-400/20" />

                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-white/5" />
                    <div className="h-20 rounded-lg bg-white/5" />
                    <div className="h-20 rounded-lg bg-white/5" />
                  </div>

                  <div className="mt-4 h-3 w-2/3 rounded-full bg-white/5" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-white/5" />
                </div>
              </div>
            </>
          )}

          {/* Category */}
          <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md">
            {project.category}
          </div>

          {/* Case study indicator */}
          <div
            className="
              absolute
              right-5
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/60
              text-zinc-300
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:border-cyan-400/30
              group-hover:bg-cyan-400
              group-hover:text-black
            "
          >
            <FaArrowUpRightFromSquare className="text-xs" />
          </div>
        </div>
      </Link>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="p-7">

        {/* Title + number */}
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <Link
              to={`/projects/${project.slug}`}
              className="group/title"
            >
              <h3 className="text-2xl font-bold tracking-tight text-white transition group-hover/title:text-cyan-400">
                {project.title}
              </h3>
            </Link>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
              {project.shortDescription || project.description}
            </p>
          </div>

          <span className="shrink-0 text-2xl font-black text-zinc-800">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies?.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-zinc-500
                transition
                group-hover:border-white/15
              "
            >
              {technology}
            </span>
          ))}

          {project.technologies?.length > 5 && (
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-zinc-700">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* =================================================
            ACTIONS
        ================================================= */}
        <div className="mt-7 flex items-center gap-3">

          {/* Case study */}
          <Link
            to={`/projects/${project.slug}`}
            className="
              group/button
              flex
              items-center
              gap-2
              rounded-full
              bg-cyan-400
              px-5
              py-2.5
              text-xs
              font-bold
              text-black
              transition
              hover:bg-cyan-300
            "
          >
            View Case Study

            <FaArrowUpRightFromSquare
              className="
                transition-transform
                duration-300
                group-hover/button:translate-x-0.5
                group-hover/button:-translate-y-0.5
              "
            />
          </Link>

          {/* Live project */}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                flex
                h-10
                items-center
                rounded-full
                border
                border-white/10
                px-4
                text-xs
                font-semibold
                text-zinc-400
                transition
                hover:border-cyan-400/30
                hover:text-cyan-400
              "
            >
              Live
            </a>
          )}

          {/* GitHub */}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-zinc-400
                transition
                hover:border-cyan-400/30
                hover:text-cyan-400
              "
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub />
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;