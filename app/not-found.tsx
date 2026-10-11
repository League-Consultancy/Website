import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="section-dark min-h-screen flex flex-col justify-center tech-grid-bg">
        <div className="container-xl text-center py-24">
          <p className="text-eyebrow mb-4">404</p>
          <h1 className="text-display-xl text-white mb-6">PAGE NOT<br />FOUND.</h1>
          <p className="text-body-lg max-w-md mx-auto mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary" id="not-found-home">
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Home
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
