import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaArrowUp,
} from "react-icons/fa6";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-[#050505]">

            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

                <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-0.5 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                                <img
                                    src="/images/emmanuel-profile.png"
                                    alt="Emmanuel"
                                    className="h-full w-full rounded-[10px] object-cover"
                                />
                            </div>

                            <span className="text-lg font-bold text-white">
                                Emmanuel <span className="text-cyan-400 pl-1"> Nnaemeka</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-600">
                            Full-stack developer building modern digital products,
                            e-commerce platforms, APIs and practical business
                            solutions.
                        </p>

                        <div className="mt-6 flex gap-3">

                            <a
                                href="#"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
                            >
                                <FaLinkedinIn />
                            </a>

                            <Link
                                to="/contact"
                                aria-label="Contact"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
                            >
                                <FaEnvelope />
                            </Link>

                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                            Navigation
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3">
                            <Link
                                to="/"
                                className="text-sm text-zinc-600 transition hover:text-cyan-400"
                            >
                                Home
                            </Link>

                            <Link
                                to="/projects"
                                className="text-sm text-zinc-600 transition hover:text-cyan-400"
                            >
                                Projects
                            </Link>

                            <Link
                                to="/about"
                                className="text-sm text-zinc-600 transition hover:text-cyan-400"
                            >
                                About
                            </Link>

                            <Link
                                to="/contact"
                                className="text-sm text-zinc-600 transition hover:text-cyan-400"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                            Services
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            <span className="text-sm text-zinc-600">
                                Web Development
                            </span>

                            <span className="text-sm text-zinc-600">
                                E-Commerce
                            </span>

                            <span className="text-sm text-zinc-600">
                                Backend & APIs
                            </span>

                            <span className="text-sm text-zinc-600">
                                Digital Solutions
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/5 pt-7 sm:flex-row sm:items-center">

                    <p className="text-xs text-zinc-700">
                        © {currentYear} Emmanuel. All rights reserved.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="group flex items-center gap-2 text-xs font-semibold text-zinc-600 transition hover:text-cyan-400"
                    >
                        Back to top

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition group-hover:border-cyan-400/20">
                            <FaArrowUp />
                        </span>
                    </button>

                </div>
            </div>
        </footer>
    );
}

export default Footer;