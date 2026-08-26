import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

const projectTypes = [
  "Website",
  "E-Commerce",
  "Web Application",
  "Backend / API",
  "Admin Dashboard",
  "Other",
];

const budgets = [
  "Below ₦100,000",
  "₦100,000 – ₦250,000",
  "₦250,000 – ₦500,000",
  "₦500,000 – ₦1,000,000",
  "₦1,000,000+",
  "Not sure yet",
];

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // We'll connect this to a real form/email service later.
    setSubmitted(true);

    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        {/* =====================================================
            PAGE HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-white/5 pt-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

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
                  Contact
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Let's talk
                <span className="text-zinc-700">.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                Have an idea, a business problem or a project you want
                to build? Tell me about it and let's see how I can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            {/* LEFT SIDE */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Get in touch
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Have something
                <span className="block text-zinc-600">
                  worth building?
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-zinc-600">
                I'm open to discussing websites, e-commerce platforms,
                web applications, APIs and other digital products.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-4">
                <a
                  href="mailto:emmcoreglobalnetworks@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-cyan-400">
                      emmcoreglobalnetworks@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/2340000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <FaWhatsapp />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-cyan-400">
                      Start a conversation
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <FaLocationDot />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                      Availability
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      Available for projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">
                  Find me online
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/20 hover:text-cyan-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/20 hover:text-cyan-400"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="mailto:emmcoreglobalnetworks@gmail.com"
                    aria-label="Email"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/20 hover:text-cyan-400"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-9"
            >
              {submitted ? (
                <div className="flex min-h-[550px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-400">
                    <FaCheck />
                  </div>

                  <h2 className="mt-7 text-3xl font-black text-white">
                    Message ready.
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600">
                    Your message has been captured by the portfolio form.
                    We'll connect this form to a real email service next.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/20 hover:text-cyan-400"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                      Project inquiry
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-white">
                      Tell me about your project.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      The more details you provide, the better I can
                      understand what you're trying to build.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-semibold text-zinc-400"
                        >
                          Your name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Emmanuel"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-cyan-400/40"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-semibold text-zinc-400"
                        >
                          Email address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-cyan-400/40"
                        />
                      </div>
                    </div>

                    {/* Project type + Budget */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="mb-2 block text-xs font-semibold text-zinc-400"
                        >
                          Project type
                        </label>

                        <select
                          id="projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-zinc-300 outline-none transition focus:border-cyan-400/40"
                        >
                          <option value="" className="bg-[#090909]">
                            Select type
                          </option>

                          {projectTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-[#090909]"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="mb-2 block text-xs font-semibold text-zinc-400"
                        >
                          Estimated budget
                        </label>

                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-zinc-300 outline-none transition focus:border-cyan-400/40"
                        >
                          <option value="" className="bg-[#090909]">
                            Select budget
                          </option>

                          {budgets.map((budget) => (
                            <option
                              key={budget}
                              value={budget}
                              className="bg-[#090909]"
                            >
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold text-zinc-400"
                      >
                        Tell me about it
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={7}
                        placeholder="What are you trying to build?"
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-cyan-400/40"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
                    >
                      Send Project Inquiry

                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="text-center text-[11px] leading-5 text-zinc-700">
                      By submitting this form, you agree that your
                      information can be used to respond to your inquiry.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="border-t border-white/5 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Prefer a direct conversation?
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Email or WhatsApp works too.
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:emmcoreglobalnetworks@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-cyan-300"
              >
                <FaEnvelope />
                Send an Email
              </a>

              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/20 hover:text-cyan-400"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;