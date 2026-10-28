"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  SITE_CONFIG,
  getWhatsAppLink,
  getWhatsAppMessage,
} from "@/lib/siteConfig";

export default function Hero() {
  const waLink = getWhatsAppLink(getWhatsAppMessage());

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* ═══════ BACKGROUND ═══════ */}
      <div className="absolute inset-0">
        <img
          src="/images/brand/green-fabric.jpg"
          alt="Premium fabric texture"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(1.5) brightness(0.7) contrast(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-darker/85 to-brand-darker/95" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,162,39,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* ═══════ LOGO — BIG SIZE ═══════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="flex items-center justify-center order-1 lg:order-1"
          >
            {/* ⭐ BIG SIZE Container */}
            <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[580px] xl:h-[580px]">

              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-brand-gold/30"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-brand-gold shadow-lg shadow-brand-gold/80" />
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[12%] rounded-full border-2 border-brand-gold/40"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-goldLight shadow-lg shadow-brand-goldLight/80" />
              </motion.div>

              {/* Inner Ring */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[18%] rounded-full border-2 border-brand-gold/50"
              />

              {/* ⭐ Center Circle — BIG */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(201,162,39,0.4), inset 0 0 40px rgba(201,162,39,0.15)",
                    "0 0 80px rgba(201,162,39,0.8), inset 0 0 60px rgba(201,162,39,0.25)",
                    "0 0 40px rgba(201,162,39,0.4), inset 0 0 40px rgba(201,162,39,0.15)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[24%] rounded-full bg-brand-darker border-2 sm:border-[4px] border-brand-gold flex items-center justify-center overflow-hidden"
              >
                {/* ⭐ Logo — BIG SCALE */}
                <motion.img
                  src="/images/brand/tazmeel-logo.png"
                  alt={SITE_CONFIG.businessName}
                  className="w-full h-full object-cover scale-[1.55]"
                  animate={{
                    scale: [1.55, 1.63, 1.55],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                {/* Center glow */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-brand-gold/40 blur-2xl pointer-events-none"
                />
              </motion.div>

              {/* Outer Glow */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[26%] rounded-full bg-brand-gold/25 blur-3xl"
              />
            </div>
          </motion.div>

          {/* ═══════ CONTENT ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2 text-center lg:text-left w-full min-w-0"
          >

            {/* Crafting Style With */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brand-gold text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-2 sm:mb-3 leading-tight"
              style={{ fontFamily: "var(--font-italianno)" }}
            >
              Crafting Style With
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-green-400 tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.18em] text-[9px] xs:text-[10px] sm:text-xs md:text-xs lg:text-sm font-semibold mb-5 sm:mb-6 lg:mb-7"
            >
              ISLAMIC & MODEST GARMENTS MANUFACTURER
            </motion.p>

            {/* TAZMEEL CRAFT */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-roboto text-brand-cream font-black mb-4 sm:mb-5 lg:mb-6 w-full"
              style={{
                fontSize: "clamp(1.25rem, 3.8vw, 3.5rem)",
                letterSpacing: "0.01em",
                lineHeight: "1.1",
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                fontWeight: 900,
                wordBreak: "break-word",
              }}
            >
              TAZMEEL CRAFT
            </motion.h1>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-brand-cream/90 text-xs xs:text-sm sm:text-base md:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10"
            >
              <span>{SITE_CONFIG.addressShort}</span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-gold inline-block" />
              <span>Since 2020</span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12"
            >
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-xs xs:text-sm sm:text-base tracking-wide transition-all duration-300 bg-brand-gold hover:bg-brand-goldLight text-brand-dark border-2 border-brand-gold shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/50 hover:scale-105"
              >
                Explore Products
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 xs:px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-xs xs:text-sm sm:text-base tracking-wide transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] text-white border-2 border-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 hover:scale-105"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-xs xs:text-sm sm:text-base tracking-wide transition-all duration-300 border-2 border-brand-gold bg-brand-gold/10 backdrop-blur-sm text-brand-gold hover:bg-brand-gold hover:text-brand-dark hover:shadow-xl hover:shadow-brand-gold/40 hover:scale-105"
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 justify-center lg:justify-start"
            >
              <span className="flex items-center gap-1.5 sm:gap-2 text-brand-gold text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em]">
                <span className="text-brand-gold">✦</span>
                PREMIUM QUALITY
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-brand-gold text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em]">
                <span className="text-brand-gold">✦</span>
                CUSTOM DESIGNS
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-brand-gold text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em]">
                <span className="text-brand-gold">✦</span>
                BULK ORDERS
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
