"use client";

import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Heart,
  Clock,
  Building2,
  Package,
  Truck,
  Award,
  Shield,
  Users,
  FileText,
  Home,
  Briefcase,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import {
  SITE_CONFIG,
  getMapLink,
  getTelLink,
  getMailLink,
} from "@/lib/siteConfig";

// ⭐ Quick Links
const quickLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About Us", icon: Building2 },
  { href: "#why", label: "Why Choose Us", icon: Award },
  { href: "#products", label: "Products", icon: Package },
  { href: "#capacity", label: "Capacity", icon: Briefcase },
  { href: "#process", label: "Our Process", icon: FileText },
  { href: "#partners", label: "Partners", icon: Users },
  { href: "#contact", label: "Contact", icon: Mail },
];

// ⭐ Services
const services = [
  {
    icon: Package,
    label: "Custom Manufacturing",
    desc: "Tailored to your brand",
  },
  {
    icon: Truck,
    label: "Bulk Order Delivery",
    desc: "On-time worldwide",
  },
  {
    icon: Award,
    label: "Quality Assurance",
    desc: "Inspected at every stage",
  },
  {
    icon: Shield,
    label: "Private Label",
    desc: "Your brand, our craft",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-darker text-brand-cream/80 overflow-hidden">
      {/* ═══════ Decorative Background ═══════ */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] border-2 border-brand-gold rotate-45" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] border-2 border-brand-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-gold rounded-full" />
      </div>

      {/* Top Gold Line */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* ═══════ Section 1: Main Footer Content ═══════ */}
      <div className="relative container-custom py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ─── Column 1: Brand (5 cols) ─── */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="#home"
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <div className="relative shrink-0">
                <img
                  src="/images/brand/navlogo.png"
                  alt={SITE_CONFIG.businessName}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-xl -z-10 group-hover:bg-brand-gold/30 transition-all" />
              </div>

              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl text-brand-gold tracking-wide leading-none mb-1">
                  TAZMEEL
                </p>

                <p className="text-[10px] sm:text-xs tracking-[0.4em] text-brand-gold/70">
                  APPARELS
                </p>
              </div>
            </Link>

            <p className="text-sm sm:text-base leading-relaxed mb-4 text-brand-cream/70 max-w-md">
              Dhaka-based manufacturer of trendy, high-quality Islamic and
              modest clothing since 2020. Blending traditional and modern
              styles for a global client base.
            </p>

            <p className="text-xs sm:text-sm text-brand-gold tracking-[0.25em] mb-6 flex items-center gap-2">
              <Sparkles size={14} className="shrink-0" />
              CRAFTING STYLE WITH TAZMEEL
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-[10px] sm:text-xs text-brand-gold font-medium">
                <Award size={12} className="shrink-0" />
                Premium Quality
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-[10px] sm:text-xs text-brand-gold font-medium">
                <Building2 size={12} className="shrink-0" />
                Since 2020
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-[10px] sm:text-xs text-brand-gold font-medium">
                <Shield size={12} className="shrink-0" />
                Trusted Manufacturer
              </span>
            </div>
          </div>

          {/* ─── Column 2: Quick Links (3 cols) ─── */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h4 className="font-serif text-lg sm:text-xl text-brand-gold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-gold rounded shrink-0" />
              Quick Links
            </h4>

            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5 text-sm">
              {quickLinks.map((l) => {
                const Icon = l.icon;

                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex items-center gap-2 text-brand-cream/70 hover:text-brand-gold transition-all group py-0.5"
                    >
                      <Icon
                        size={12}
                        className="text-brand-gold/50 group-hover:text-brand-gold transition shrink-0"
                      />

                      <span className="truncate">{l.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ─── Column 3: Services (4 cols) ─── */}
          <div className="sm:col-span-1 lg:col-span-4">
            <h4 className="font-serif text-lg sm:text-xl text-brand-gold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-brand-gold rounded shrink-0" />
              Our Services
            </h4>

            <ul className="space-y-3">
              {services.map((s) => {
                const Icon = s.icon;

                return (
                  <li
                    key={s.label}
                    className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-brand-gold/5 transition-all cursor-default"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all">
                      <Icon size={16} className="text-brand-gold" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-brand-cream group-hover:text-brand-gold transition">
                        {s.label}
                      </p>

                      <p className="text-[11px] text-brand-cream/50 group-hover:text-brand-cream/70 transition">
                        {s.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ═══════ Section 2: Contact Quick Strip ═══════ */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-brand-gold/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Phone */}
            <a
              href={getTelLink()}
              className="group flex items-center gap-3 p-3 sm:p-4 bg-brand-gold/5 border border-brand-gold/15 rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all"
            >
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all">
                <Phone size={16} className="text-brand-gold" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-brand-gold/70 tracking-widest">
                  CALL US
                </p>

                <p className="text-xs sm:text-sm font-medium text-brand-cream group-hover:text-brand-gold transition truncate">
                  {SITE_CONFIG.phonePrimary.display}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={getMailLink()}
              className="group flex items-center gap-3 p-3 sm:p-4 bg-brand-gold/5 border border-brand-gold/15 rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all"
            >
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all">
                <Mail size={16} className="text-brand-gold" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-brand-gold/70 tracking-widest">
                  EMAIL US
                </p>

                <p className="text-xs sm:text-sm font-medium text-brand-cream group-hover:text-brand-gold transition truncate">
                  {SITE_CONFIG.email}
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="group flex items-center gap-3 p-3 sm:p-4 bg-brand-gold/5 border border-brand-gold/15 rounded-lg">
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                <Clock size={16} className="text-brand-gold" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-brand-gold/70 tracking-widest">
                  WORKING HOURS
                </p>

                <p className="text-xs sm:text-sm font-medium text-brand-cream truncate">
                  {SITE_CONFIG.hours}
                </p>
              </div>
            </div>

            {/* Location */}
            <a
              href={getMapLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 sm:p-4 bg-brand-gold/5 border border-brand-gold/15 rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all"
            >
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all">
                <MapPin size={16} className="text-brand-gold" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-brand-gold/70 tracking-widest">
                  VISIT US
                </p>

                <p className="text-xs sm:text-sm font-medium text-brand-cream group-hover:text-brand-gold transition inline-flex items-center gap-1">
                  Get Directions
                  <ExternalLink size={10} className="shrink-0" />
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ═══════ Section 4: Bottom Bar ═══════ */}
      <div className="relative border-t border-brand-gold/10 bg-brand-dark/50">
        <div className="container-custom py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            {/* Copyright */}
            <p className="text-brand-cream/50 text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-brand-gold font-medium">
                Tazmeel Apparels
              </span>
              . All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-brand-cream/50 flex items-center justify-center gap-1.5 text-center">
              Made with{" "}
              <Heart
                size={13}
                className="text-red-400 fill-red-400 animate-pulse shrink-0"
              />{" "}
              in Dhaka, Bangladesh
            </p>

            {/* Right side links — Admin permanently removed */}
            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className="text-brand-cream/50 hover:text-brand-gold transition"
              >
                Support
              </Link>

              <span className="text-brand-gold/30">•</span>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-brand-gold hover:text-brand-goldLight transition group"
                aria-label="Back to top"
              >
                <ArrowUp
                  size={15}
                  className="group-hover:-translate-y-1 transition-transform shrink-0"
                />
                Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
    </footer>
  );
}