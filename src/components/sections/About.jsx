"use client";
import { motion } from "framer-motion";
import { Target, Eye, Leaf, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Target,
    num: "1",
    title: "Our Vision",
    text: "Lead the sector through innovation and high-quality apparel production standards.",
  },
  {
    icon: Eye,
    num: "2",
    title: "Our Mission",
    text: "Deliver quality, value-added products at a competitive price point with smooth delivery.",
  },
  {
    icon: Leaf,
    num: "3",
    title: "Eco-Friendly Process",
    text: "Environment-conscious processes that satisfy clients and the community.",
  },
  {
    icon: Sparkles,
    num: "4",
    title: "Value Addition",
    text: "Clothing that offers cultural value and aesthetics, beyond wearability.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-cream">
      <div className="container-custom">

        {/* ═══════ HEADER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4">
            WHO WE ARE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.1] mb-4 sm:mb-5">
            About Tazmeel Craft
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-brand-gold mx-auto" />
        </motion.div>

        {/* ═══════ MAIN GRID — 2 Columns Perfect Align ═══════ */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">

          {/* ═══════ LEFT: Description + 2 Images ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-brand-dark/80 mb-5 sm:mb-6">
              Established in{" "}
              <strong className="text-brand-dark font-bold">2020</strong>,
              Tazmeel Craft is a Dhaka-based manufacturer of trendy,
              high-quality Islamic and modest clothing. We blend traditional
              and modern styles, delivering dependable apparel to a diverse
              client base.
            </p>

            {/* 2 Images — Flex Grow to fill remaining height */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
              <div className="relative rounded-lg overflow-hidden bg-brand-dark shadow-xl group h-full min-h-[200px] sm:min-h-[260px]">
                <img
                  src="/images/brand/siwak-collar.jpg"
                  alt="SIWAK premium detail"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden bg-brand-dark shadow-xl group h-full min-h-[200px] sm:min-h-[260px]">
                <img
                  src="/images/brand/black-thobe-embroidery.webp"
                  alt="Black thobe with gold embroidery"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* ═══════ RIGHT: 2×2 Cards Grid ═══════ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-4 sm:p-5 md:p-6 bg-white border border-brand-gold/15 rounded-lg hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 group flex flex-col h-full min-h-[180px] sm:min-h-[200px]"
                >
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-brand-gold/40 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors shrink-0">
                      <Icon className="text-brand-gold" size={16} strokeWidth={1.8} />
                    </div>
                    <span className="font-serif text-lg sm:text-xl text-brand-gold/40 group-hover:text-brand-gold/70 transition-colors">
                      {c.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg md:text-xl text-brand-dark mb-2 sm:mb-3 leading-tight">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed flex-1">
                    {c.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
