import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";

const technologies = [
  {
    name: "React",
    description: "Frontend",
    icon: FaReact,
  },
  {
    name: "JavaScript",
    description: "Language",
    icon: FaJs,
  },
  {
    name: "Node.js",
    description: "Backend",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    description: "API",
    icon: null,
    textIcon: "Ex",
  },
  {
    name: "MongoDB",
    description: "Database",
    icon: null,
    textIcon: "M",
  },
  {
    name: "Git",
    description: "Version Control",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    description: "Collaboration",
    icon: FaGithub,
  },
  {
    name: "Tailwind",
    description: "CSS",
    icon: null,
    textIcon: "Tw",
  },
];

function TechStack() {
  return (
    <section
      id="stack"
      className="border-y border-white/5 bg-[#080808] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Technology
            </span>

            <span className="h-px w-8 bg-cyan-400" />
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Tools I use to build.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            A modern development stack focused on performance,
            maintainability and great user experiences.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-zinc-300 transition-colors group-hover:border-cyan-400/20 group-hover:text-cyan-400">
                  {Icon ? (
                    <Icon />
                  ) : (
                    <span className="font-black">
                      {technology.textIcon}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-sm font-bold text-white">
                  {technology.name}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-600">
                  {technology.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;