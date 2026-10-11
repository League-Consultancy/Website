import type { Metadata } from "next";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with LEAGUE Consultancy. Tell us about your idea, problem or project.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="section-dark tech-grid-bg section-spacing relative overflow-hidden pt-[120px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 hero-gradient pointer-events-none"
          />

          <div className="container-xl relative z-10">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left: Header + info */}
              <div className="lg:col-span-1">
                <p className="text-eyebrow mb-4">Get in touch</p>
                <h1 className="text-display-md text-white mb-6">
                  START A<br />CONVERSATION
                </h1>
                <p className="text-[#9AA2AD] text-base leading-relaxed mb-8">
                  Tell us what you are trying to build, automate, improve or
                  solve. Initial consultation is free.
                </p>

                {/* Contact info */}
                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:info@leagueconsultancy.com"
                    className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-[#11151C] hover:border-[#62B8FF]/30 transition-colors duration-200 group"
                    aria-label="Email LEAGUE Consultancy"
                  >
                    <Mail
                      size={16}
                      className="text-[#62B8FF] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[#59616D] text-xs mb-0.5 uppercase tracking-wide font-600">
                        Email
                      </p>
                      <p className="text-white text-sm font-600 group-hover:text-[#62B8FF] transition-colors duration-200">
                        info@leagueconsultancy.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-[#11151C]">
                    <MapPin
                      size={16}
                      className="text-[#62B8FF] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[#59616D] text-xs mb-0.5 uppercase tracking-wide font-600">
                        Location
                      </p>
                      <p className="text-white text-sm font-600">
                        Ahmedabad, Gujarat, India
                      </p>
                      <p className="text-[#59616D] text-xs mt-1">
                        Serving clients internationally
                      </p>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="p-5 rounded-xl border border-white/[0.06] bg-[#090B10]">
                  <p className="text-white font-700 text-sm mb-4">What to expect</p>
                  <ul className="space-y-2.5" role="list">
                    {[
                      "Free initial consultation",
                      "NDA available before detailed discussions",
                      "Fixed-price proposals",
                      "End-to-end engineering",
                      "Post-deployment support available",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#9AA2AD] text-xs">
                        <ArrowRight size={10} className="text-[#62B8FF] shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-white/[0.06] bg-[#11151C] p-7 lg:p-10">
                  <h2 className="text-white font-700 text-lg mb-1">
                    Project enquiry
                  </h2>
                  <p className="text-[#9AA2AD] text-sm mb-8 leading-relaxed">
                    Fill in the form below and we will review your project. The
                    more context you provide, the better we can evaluate the
                    engineering.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
