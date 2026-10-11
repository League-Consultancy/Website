"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLightPage =
    pathname === "/contact" ||
    pathname === "/industries" ||
    pathname === "/how-we-work";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  const logoSrc = isLightPage && !scrolled ? "/logo-black.svg" : "/logo-white.svg";

  return (
    <>
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#090B10]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : isLightPage
            ? "bg-transparent"
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
              aria-label="LEAGUE Consultancy — Home"
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Image
                  src={logoSrc}
                  alt="LEAGUE Consultancy Logo"
                  width={36}
                  height={36}
                  priority
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span
                className={[
                  "text-sm font-700 tracking-[0.1em] uppercase transition-colors duration-300",
                  isLightPage && !scrolled ? "text-[#090B10]" : "text-white",
                ].join(" ")}
              >
                LEAGUE
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul
              role="list"
              className="hidden lg:flex items-center gap-8"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "text-sm font-600 tracking-wide transition-colors duration-200 relative",
                        active
                          ? "text-[#62B8FF]"
                          : isLightPage && !scrolled
                          ? "text-[#11151C] hover:text-[#62B8FF]"
                          : "text-[#9AA2AD] hover:text-white",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-[#62B8FF] rounded-full"
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
                href="/contact"
                className="btn-primary text-sm"
                id="nav-cta"
              >
                Start a Conversation
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={[
                "lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200",
                isLightPage && !scrolled
                  ? "text-[#090B10] hover:bg-black/10"
                  : "text-white hover:bg-white/10",
              ].join(" ")}
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
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "flex items-center justify-between py-4 border-b border-white/[0.04] text-base font-600 transition-colors duration-200",
                        active ? "text-[#62B8FF]" : "text-[#9AA2AD] hover:text-white",
                      ].join(" ")}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {link.label}
                      <ArrowRight size={16} className="opacity-40" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Panel CTA */}
          <div className="px-6 pb-8 space-y-3">
            <Link
              href="/contact"
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
