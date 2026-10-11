"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions", id: "solutions" },
  { label: "How We Work", href: "#how-we-work", id: "how-we-work" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Industries", href: "#industries", id: "industries" },
  { label: "About", href: "#about", id: "about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ["solutions", "how-we-work", "projects", "industries", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
        setActiveSection(targetId);
      }
      setMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    setActiveSection("");
    setMenuOpen(false);
  };

  return (
    <>
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-[#090B10]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-xl">
          <nav
            aria-label="Main navigation"
            className="flex items-center justify-between h-[72px]"
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              aria-label="LEAGUE Consultancy — Home"
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Image
                  src="/logo-white.svg"
                  alt="LEAGUE Consultancy Logo"
                  width={36}
                  height={36}
                  priority
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-sm font-700 tracking-[0.1em] uppercase text-white transition-colors duration-300">
                LEAGUE
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul
              role="list"
              className="hidden lg:flex items-center gap-8"
            >
              {navLinks.map((link) => {
                const active = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={[
                        "text-sm font-600 tracking-wide transition-colors duration-200 relative py-1",
                        active
                          ? "text-[#62B8FF]"
                          : "text-[#9AA2AD] hover:text-white",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#62B8FF] rounded-full shadow-[0_0_8px_rgba(98,184,255,0.6)]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="btn-primary text-sm"
                id="nav-cta"
              >
                Start a Conversation
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              id="mobile-menu-toggle"
            >
              {menuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed inset-0 z-50 lg:hidden transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={[
            "absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#11151C] border-l border-white/[0.06] flex flex-col transition-transform duration-500",
            menuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.svg"
                alt="LEAGUE Consultancy"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm font-700 tracking-[0.1em] uppercase text-white">
                LEAGUE
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-[#9AA2AD] hover:text-white transition-colors p-2 -mr-2"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Panel Links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <ul role="list" className="space-y-1">
              {navLinks.map((link) => {
                const active = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={[
                        "flex items-center justify-between py-4 border-b border-white/[0.04] text-base font-600 transition-colors duration-200",
                        active ? "text-[#62B8FF]" : "text-[#9AA2AD] hover:text-white",
                      ].join(" ")}
                    >
                      {link.label}
                      <ArrowRight size={16} className={active ? "text-[#62B8FF]" : "opacity-40"} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Panel CTA */}
          <div className="px-6 pb-8 space-y-3 border-t border-white/[0.04] pt-6">
            <Link
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="btn-primary w-full justify-center"
              id="mobile-nav-cta"
            >
              Start a Conversation
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <p className="text-center text-xs text-[#59616D]">
              info@leagueconsultancy.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
