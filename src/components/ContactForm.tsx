"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const INDUSTRIES = [
  "Manufacturing / Industrial",
  "Education",
  "Healthcare",
  "Government",
  "Logistics / Warehousing",
  "Startup",
  "Enterprise",
  "Other",
];

const PROJECT_TYPES = [
  "AI / Machine Learning",
  "Software / Web Application",
  "Computer Vision",
  "Robotics / Automation",
  "IoT / IIoT",
  "Mechanical Engineering",
  "RAG / LLM System",
  "Digital Twin",
  "Custom Hardware",
  "Not sure yet",
];

const TIMELINES = [
  "ASAP / urgent",
  "Within 1–3 months",
  "Within 3–6 months",
  "6 months or more",
  "Exploring for now",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
    industry: "",
    projectType: "",
    timeline: "",
    technicalRequirements: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please describe what you are trying to build";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    // Simulate form submission — replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For demo purposes, always succeed
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-[#62B8FF]/10 border border-[#62B8FF]/25 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-[#62B8FF]" aria-hidden="true" />
        </div>
        <h2 className="text-white font-700 text-2xl mb-3">Message received.</h2>
        <p className="text-[#9AA2AD] text-base max-w-md mb-8 leading-relaxed">
          Thank you for reaching out. We will review your project details and
          get back to you shortly.
        </p>
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project enquiry form"
      className="space-y-6"
    >
      {/* Row 1: Name + Company */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="form-label">
            Name <span aria-hidden="true" className="text-[#62B8FF]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className={`form-field ${errors.name ? "border-red-500/50" : ""}`}
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-400 text-xs mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or organisation"
            value={formData.company}
            onChange={handleChange}
            className="form-field"
          />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="form-label">
            Email <span aria-hidden="true" className="text-[#62B8FF]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={`form-field ${errors.email ? "border-red-500/50" : ""}`}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-400 text-xs mt-1.5">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 or international"
            value={formData.phone}
            onChange={handleChange}
            className="form-field"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="form-label">
          What are you trying to build?{" "}
          <span aria-hidden="true" className="text-[#62B8FF]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Describe your idea, problem or requirement. What are you trying to achieve?"
          value={formData.description}
          onChange={handleChange}
          className={`form-field resize-none ${errors.description ? "border-red-500/50" : ""}`}
          aria-required="true"
          aria-describedby={errors.description ? "description-error" : undefined}
        />
        {errors.description && (
          <p id="description-error" role="alert" className="text-red-400 text-xs mt-1.5">
            {errors.description}
          </p>
        )}
      </div>

      {/* Row 3: Industry + Project Type */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="industry" className="form-label">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="form-field"
          >
            <option value="">Select industry</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="projectType" className="form-label">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="form-field"
          >
            <option value="">Select type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="form-label">
          Expected timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="form-field"
        >
          <option value="">Select timeline</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Technical requirements */}
      <div>
        <label htmlFor="technicalRequirements" className="form-label">
          Technical requirements or constraints
        </label>
        <textarea
          id="technicalRequirements"
          name="technicalRequirements"
          rows={3}
          placeholder="Any specific technologies, integrations, hardware, compliance requirements or technical constraints you are aware of."
          value={formData.technicalRequirements}
          onChange={handleChange}
          className="form-field resize-none"
        />
      </div>

      {/* Additional info */}
      <div>
        <label htmlFor="additionalInfo" className="form-label">
          Additional information
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={2}
          placeholder="Anything else you would like us to know."
          value={formData.additionalInfo}
          onChange={handleChange}
          className="form-field resize-none"
        />
      </div>

      {/* NDA note */}
      <div className="flex items-start gap-3 p-4 rounded-xl border border-[#62B8FF]/15 bg-[#62B8FF]/[0.04]">
        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#62B8FF] mt-1.5 shrink-0" />
        <p className="text-[#9AA2AD] text-sm leading-relaxed">
          Your information and project details can be discussed under a
          non-disclosure agreement (NDA) before any detailed technical
          discussions begin.
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-center py-4"
        id="contact-form-submit"
        aria-disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <ArrowRight size={16} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
