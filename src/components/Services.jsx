import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { services } from "../Data/services";

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] section-padding"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
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
              What I Do
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Digital solutions
            <span className="block text-zinc-600">
              built for impact.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
            I help turn ideas and business requirements into practical,
            modern software products.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative bg-[#080808] p-7 transition-colors duration-300 hover:bg-[#0D0D0D] sm:p-9"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-zinc-700">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                    <Icon />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-14">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                    {service.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="mt-8 flex items-center gap-2 text-xs font-bold text-zinc-700 transition-colors group-hover:text-cyan-400">
                  Explore service
                  <FaArrowUpRightFromSquare />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;