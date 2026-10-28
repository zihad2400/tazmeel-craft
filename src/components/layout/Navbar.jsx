"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Home, MessageCircle } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import {
  SITE_CONFIG,
  getWhatsAppLink,
  getTelLink,
  getWhatsAppMessage,
} from "@/lib/siteConfig";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useSmoothScroll(80);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sections = [
        "home", "about", "why", "products",
        "capacity", "process", "partners", "workflow", "contact",
      ];
      const scrollPos = scrollY + 150;

      let current = "#home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = `#${section}`;
            break;
          }
        }
      }
      setActive(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollState();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const waLink = getWhatsAppLink(getWhatsAppMessage());
  const telLink = getTelLink();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || open
            ? "bg-brand-dark/98 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom flex items-center justify-between py-3 sm:py-4">
          <Link
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2 sm:gap-3 shrink-0 group"
          >
            <img
              src="/images/brand/navlogo.png"
              alt={SITE_CONFIG.businessName}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="leading-tight">
              <p className="font-serif text-base sm:text-lg font-semibold text-brand-cream tracking-wide">
                TAZMEEL
              </p>
              <p className="text-brand-gold text-[10px] sm:text-xs tracking-[0.25em]">
                CRAFT
              </p>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((l) => {
              const Icon = l.icon;
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setActive(l.href)}
                    className={`relative flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "text-brand-dark bg-brand-gold shadow-lg shadow-brand-gold/30"
                        : "text-brand-cream/90 hover:text-brand-gold hover:bg-brand-gold/10"
                    }`}
                  >
                    {Icon && <Icon size={14} />}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={telLink}
              className="flex items-center gap-2 text-brand-gold text-sm hover:text-brand-goldLight transition px-3 py-2 rounded-full hover:bg-brand-gold/10"
              title="Call us"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">
                {SITE_CONFIG.phonePrimary.display}
              </span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 text-sm hover:text-green-300 transition px-3 py-2 rounded-full hover:bg-green-500/10"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <Link
              href="#contact"
              className="btn btn-sm bg-brand-gold hover:bg-brand-goldLight text-brand-dark border-none rounded-full px-5 xl:px-6 font-semibold h-9 min-h-0 ml-2"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-brand-cream p-2 -mr-2 rounded-lg hover:bg-brand-gold/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-brand-dark pt-20 pb-8 overflow-y-auto">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-40 h-40 border-2 border-brand-gold rotate-45" />
            <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-brand-gold rounded-full" />
          </div>

          <div className="container-custom relative z-10">
            <ul className="flex flex-col gap-2 mb-6">
              {links.map((l, i) => {
                const Icon = l.icon;
                const isActive = active === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 py-3 px-4 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? "bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/30"
                          : "text-brand-cream hover:text-brand-gold hover:bg-brand-gold/10"
                      }`}
                      style={{
                        animation: `slideIn 0.3s ease-out ${i * 0.05}s both`,
                      }}
                    >
                      {Icon && <Icon size={18} />}
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-6 border-t border-brand-gold/20 space-y-3">
              <a
                href={telLink}
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 w-full py-3 bg-brand-gold/10 border border-brand-gold/30 rounded-lg text-brand-gold hover:bg-brand-gold/20 transition"
              >
                <Phone size={20} />
                <span className="font-medium">
                  {SITE_CONFIG.phonePrimary.display}
                </span>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
              >
                <MessageCircle size={20} />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>

              <Link
                href="#contact"
                onClick={closeMenu}
                className="btn w-full bg-brand-gold hover:bg-brand-goldLight text-brand-dark border-none rounded-full py-3 h-12 min-h-0 font-semibold"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-6 text-center text-xs text-brand-cream/50">
              <p>{SITE_CONFIG.addressShort} · Since 2020</p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
