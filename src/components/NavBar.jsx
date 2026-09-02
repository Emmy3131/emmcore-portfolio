import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FaArrowRight,
    FaBars,
    FaXmark,
} from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    /* =========================================================
       CLOSE MOBILE MENU WHEN ROUTE CHANGES
    ========================================================= */
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    /* =========================================================
       NAVBAR SCROLL STATE
    ========================================================= */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /* =========================================================
       PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
    ========================================================= */
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
                        ? "border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                    {/* =====================================================
              LOGO
          ===================================================== */}
                    <Link
                        to="/"
                        className="group relative z-50 flex items-center gap-2"
                    >
                    
                        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-0.5 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                            <img
                                src="/images/emmanuel-profile.png"
                                alt="Emmanuel"
                                className="h-full w-full rounded-[10px] object-cover"
                            />
                        </div>
                    


                        <div className="leading-none">
                            <p className="text-sm font-black tracking-tight text-white">
                                Emmanuel<span className="text-cyan-400 pl-3">Nnaemeka</span>
                            </p>

                            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                                Full-Stack Developer
                            </p>
                        </div>
                    </Link>

                    {/* =====================================================
              DESKTOP NAV
          ===================================================== */}
                    <nav className="hidden items-center gap-1 md:flex">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative rounded-full px-4 py-2 text-xs font-semibold transition ${isActive
                                        ? "text-cyan-400"
                                        : "text-zinc-500 hover:text-white"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.name}

                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* =====================================================
              DESKTOP CTA
          ===================================================== */}
                    <Link
                        to="/contact"
                        className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-zinc-300 transition hover:border-cyan-400/30 hover:bg-cyan-400 hover:text-black md:flex"
                    >
                        Let's talk

                        <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* =====================================================
              MOBILE BUTTON
          ===================================================== */}
                    <button
                        type="button"
                        aria-label={
                            mobileOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((current) => !current)}
                        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
                    >
                        {mobileOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </header>

            {/* =========================================================
          MOBILE MENU
      ========================================================= */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* BACKDROP */}
                        <motion.button
                            type="button"
                            aria-label="Close navigation menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
                        />

                        {/* MENU */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed left-4 right-4 top-24 z-40 overflow-hidden rounded-3xl border border-white/10 bg-[#090909] shadow-2xl md:hidden"
                        >
                            <nav className="p-3">
                                {navigation.map((item, index) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setMobileOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold transition ${isActive
                                                ? "bg-cyan-400/10 text-cyan-400"
                                                : "text-zinc-500 hover:bg-white/[0.03] hover:text-white"
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span>{item.name}</span>

                                                {isActive && (
                                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                ))}

                                <div className="my-3 h-px bg-white/5" />

                                <Link
                                    to="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="group flex items-center justify-between rounded-2xl bg-cyan-400 px-4 py-4 text-sm font-bold text-black"
                                >
                                    <span>Let's talk</span>

                                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                                </Link>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;