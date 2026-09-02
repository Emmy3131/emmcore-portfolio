import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";

function Contact() {
  const [copied, setCopied] = useState(false);

  /*
  ============================================================
  CONTACT INFORMATION
  ============================================================
  Replace the WhatsApp number and social links with your
  actual details.
  */

  const email = "emmcoreglobalnetworks@gmail.com";

  const whatsappNumber = "+2348038599808";

  const whatsappMessage = encodeURIComponent(
    "Hello Emmanuel, I came across your portfolio and I'd like to discuss a project with you."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const linkedinUrl = "https://www.linkedin.com/in/YOUR-LINKEDIN/";
  const githubUrl = "https://github.com/YOUR-GITHUB";

  /*
  ============================================================
  COPY EMAIL
  ============================================================
  */

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  /*
  ============================================================
  CONTACT OPTIONS
  ============================================================
  */

  const contacts = [
    {
      title: "Email Me",
      description: "Best for project inquiries and business discussions.",
      value: email,
      href: `mailto:${email}`,
      icon: FaEnvelope,
      action: "Send Email",
    },
    {
      title: "WhatsApp",
      description: "Let's have a quick conversation about your idea.",
      value: "Start a conversation",
      href: whatsappUrl,
      icon: FaWhatsapp,
      action: "Message Me",
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally and see what I'm working on.",
      value: "Connect professionally",
      href: linkedinUrl,
      icon: FaLinkedinIn,
      action: "View Profile",
    },
    {
      title: "GitHub",
      description: "Explore my code, projects and development work.",
      value: "Explore my repositories",
      href: githubUrl,
      icon: FaGithub,
      action: "View GitHub",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[140px]" />

        <div className="absolute -right-40 top-[35%] h-[350px] w-[350px] rounded-full bg-indigo-500/[0.05] blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Get in touch
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Let's build
            <span className="block text-zinc-500">
              something
            </span>

            <span className="text-cyan-400">
              meaningful.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            Have an idea, a project, or an opportunity you'd like
            to discuss? Reach out directly. I'm always open to
            interesting conversations and meaningful collaborations.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT GRID
        ==================================================== */}

        <div className="mt-20 grid gap-5 sm:grid-cols-2">

          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={
                  contact.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  contact.href.startsWith("mailto:")
                    ? undefined
                    : "noreferrer"
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-8"
              >
                {/* Hover glow */}

                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.14]" />

                {/* Icon */}

                <div className="relative flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-400 transition duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <Icon size={22} />
                  </div>

                  <FaArrowUpRightFromSquare
                    className="text-zinc-700 transition duration-500 group-hover:text-cyan-400"
                    size={16}
                  />
                </div>

                {/* Content */}

                <div className="relative mt-8">
                  <h2 className="text-xl font-bold text-white">
                    {contact.title}
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                    {contact.description}
                  </p>

                  <div className="mt-6 text-sm font-medium text-zinc-400 transition group-hover:text-cyan-400">
                    {contact.value}
                  </div>

                  <div className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-cyan-400">
                    {contact.action}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* ===================================================
            EMAIL COPY CARD
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600">
              Direct email
            </p>

            <p className="mt-2 break-all text-sm font-medium text-zinc-300 sm:text-base">
              {email}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            {copied ? (
              <>
                <FaCheck />
                Copied
              </>
            ) : (
              <>
                <FaCopy />
                Copy Email
              </>
            )}
          </button>
        </motion.div>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.02] to-indigo-500/[0.06] p-8 sm:p-12 lg:p-16"
        >
          {/* Decorative glow */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Have a project in mind?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let's turn your idea into something real.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
              Whether you're starting from scratch, improving an
              existing product, or need a developer to bring your
              vision to life, I'd love to hear about it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-cyan-300"
              >
                <FaEnvelope />
                Start a Conversation
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaWhatsapp />
                WhatsApp Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            AVAILABILITY
        ==================================================== */}

        <div className="mt-10 flex items-center justify-center gap-3 text-center">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
          </span>

          <p className="text-sm text-zinc-500">
            Available for selected freelance projects and collaborations
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
