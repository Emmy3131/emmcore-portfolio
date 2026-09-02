import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] section-padding"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
            <FaEnvelope />
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Let's build something
            <span className="block text-zinc-600">
              great together.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-zinc-500">
            Whether you have an idea, a business problem or an existing
            project that needs improvement, I'd love to hear about it.
          </p>

          <Link
            to="/contact"
            className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
          >
            Start a Conversation

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactCTA;