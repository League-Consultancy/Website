import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="section-dark border-t border-white/[0.06]"
    >
      <div className="container-xl">
        {/* Main footer content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8">
                <Image
                  src="/logo-white.svg"
                  alt="LEAGUE Consultancy"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-sm font-700 tracking-[0.1em] uppercase">
                LEAGUE CONSULTANCY
              </span>
            </div>
            <p className="text-[#59616D] text-xs tracking-[0.15em] uppercase mb-5">
              AI · Software · Robotics · Engineering
            </p>
            <p className="text-[#9AA2AD] text-sm leading-relaxed max-w-sm mb-6">
              Custom technology solutions engineered across AI, software,
              computer vision, robotics, IoT and mechanical engineering.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@leagueconsultancy.com"
                className="flex items-center gap-2 text-[#9AA2AD] hover:text-[#62B8FF] text-sm transition-colors duration-200"
                aria-label="Email LEAGUE Consultancy"
              >
                <span aria-hidden="true">↗</span>
                info@leagueconsultancy.com
              </a>
              <p className="text-[#59616D] text-sm flex items-center gap-2">
                <span aria-hidden="true" className="text-[#9AA2AD]">📍</span>
                Ahmedabad · India · Worldwide
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#59616D] text-xs tracking-[0.15em] uppercase mb-5 font-600">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul role="list" className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#9AA2AD] hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Capabilities quick-nav */}
          <div>
            <p className="text-[#59616D] text-xs tracking-[0.15em] uppercase mb-5 font-600">
              Disciplines
            </p>
            <nav aria-label="Solutions navigation">
              <ul role="list" className="space-y-3">
                {[
                  { label: "AI & Intelligent Systems", href: "#solutions" },
                  { label: "Computer Vision", href: "#solutions" },
                  { label: "Software & Web", href: "#solutions" },
                  { label: "Robotics & Automation", href: "#solutions" },
                  { label: "IoT & IIoT", href: "#solutions" },
                  { label: "Mechanical Engineering", href: "#solutions" },
                  { label: "RAG & LLM Systems", href: "#solutions" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#9AA2AD] hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#59616D] text-xs">
            © 2026 LEAGUE Consultancy. All rights reserved.
          </p>
          <p className="text-[#59616D] text-xs">
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
