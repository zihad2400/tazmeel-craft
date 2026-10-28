"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/siteConfig";

const products = [
  {
    num: "01",
    name: "Kuwaiti Thobe",
    desc: "Premium traditional thobe with elegant collar and refined stitching.",
  },
  {
    num: "02",
    name: "Arabian Thobe",
    desc: "Classic Arabian style designed for premium Middle Eastern markets.",
  },
  {
    num: "03",
    name: "Regular Thobe",
    desc: "Everyday comfort thobe with clean, minimal design.",
  },
  {
    num: "04",
    name: "Omani Thobe",
    desc: "Traditional Omani style with distinctive fringe detailing.",
  },
  {
    num: "05",
    name: "Kundura Thobe",
    desc: "Modern fit with traditional essence for contemporary markets.",
  },
  {
    num: "06",
    name: "Kabuli Set",
    desc: "Complete traditional two-piece ensemble for formal occasions.",
  },
  {
    num: "07",
    name: "Punjabi",
    desc: "Classic South Asian style, perfect for everyday and festive wear.",
  },
];

const carouselImages = [
  {
    src: "/images/products/kuwati-thobe.jpg",
    alt: "Kuwaiti Thobe",
    title: "Kuwaiti Thobe",
    subtitle: "Premium Traditional",
  },
  {
    src: "/images/products/arabian-thobe.webp",
    alt: "Arabian Thobe",
    title: "Arabian Thobe",
    subtitle: "Classic Collection",
  },
  {
    src: "/images/products/regular-thobe.webp",
    alt: "Regular Thobe",
    title: "Regular Thobe",
    subtitle: "Everyday Wear",
  },
  {
    src: "/images/products/omani-thobe.jpeg",
    alt: "Omani Thobe",
    title: "Omani Thobe",
    subtitle: "Traditional Style",
  },
  {
    src: "/images/products/kundura-thobe.jpg",
    alt: "Kundura Thobe",
    title: "Kundura Thobe",
    subtitle: "Modern Collection",
  },
  {
    src: "/images/products/kabuli-set.png",
    alt: "Kabuli Set",
    title: "Kabuli Set",
    subtitle: "Complete Ensemble",
  },
  {
    src: "/images/products/punjabi.jpg",
    alt: "Punjabi",
    title: "Punjabi",
    subtitle: "Festive Wear",
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);

  return (
    <section id="products" className="section-padding bg-brand-cream">
      <div className="container-custom">
        {/* ═══════ HEADER — CENTERED ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 md:mb-16 text-center max-w-3xl mx-auto px-4"
        >
          <p className="text-brand-gold tracking-[0.3em] text-[10px] sm:text-xs font-semibold mb-3">
            OUR PRODUCT RANGE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.1] mb-4 sm:mb-5">
            What We Manufacture
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-brand-gold mx-auto mb-5 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-brand-dark/70 leading-relaxed">
            We produce a wide range of traditional and contemporary garments
            with a focus on quality, craftsmanship and customization.
          </p>
        </motion.div>

        {/* ═══════ MAIN GRID ═══════ */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: Products List */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* ⭐ Timeless Text — Above Products List, Left Aligned */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-brand-dark/70 text-sm sm:text-base md:text-lg italic mb-6 sm:mb-8"
            >
              Timeless designs. Made for your brand.
            </motion.p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-0">
              {products.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group border-b border-brand-dark/10 py-5 sm:py-6"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-gold/60 leading-none shrink-0 w-12 sm:w-16 group-hover:text-brand-gold transition-colors">
                      {p.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-brand-dark group-hover:text-brand-green transition-colors">
                          {p.name}
                        </h3>
                        <ArrowRight
                          size={18}
                          className="text-brand-dark/40 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="sticky top-24">
              <div
                className="relative aspect-[3/4] rounded-xl overflow-hidden bg-brand-sand shadow-2xl group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={carouselImages[currentIndex].src}
                    alt={carouselImages[currentIndex].alt}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-brand-darker/10 to-transparent pointer-events-none" />

                {!isPaused && (
                  <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute top-0 left-0 h-1 bg-brand-gold z-30"
                  />
                )}

                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-3 py-1.5 bg-brand-gold/95 backdrop-blur-sm rounded-full shadow-lg"
                  >
                    <span className="text-[10px] sm:text-xs font-bold text-brand-dark tracking-wide">
                      {carouselImages[currentIndex].title}
                    </span>
                  </motion.div>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="px-2.5 py-1 bg-brand-darker/70 backdrop-blur-sm rounded-full border border-brand-cream/20">
                    <span className="text-[10px] sm:text-xs font-semibold text-brand-cream tracking-wider">
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(carouselImages.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-4 right-4 z-20">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <p className="text-[10px] text-brand-gold tracking-[0.25em] font-semibold mb-1">
                      {carouselImages[currentIndex].subtitle.toUpperCase()}
                    </p>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-cream">
                      {carouselImages[currentIndex].title}
                    </h4>
                  </motion.div>
                </div>

                <button
                  onClick={goToPrev}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-darker/60 hover:bg-brand-gold backdrop-blur-sm flex items-center justify-center text-brand-cream hover:text-brand-dark transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-brand-darker/60 hover:bg-brand-gold backdrop-blur-sm flex items-center justify-center text-brand-cream hover:text-brand-dark transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CUSTOM REQUIREMENTS CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-br from-brand-dark to-brand-green rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-cream mb-3 sm:mb-4">
                Custom Requirements?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-brand-cream/80 leading-relaxed">
                Share your design, specification or tech pack with us.
              </p>
            </div>

            <a
              href={getWhatsAppLink(
                "Hello Tazmeel Craft! I have custom requirements. Let's discuss."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold hover:bg-brand-goldLight text-brand-dark rounded-lg font-semibold text-sm sm:text-base transition-all shadow-lg shadow-brand-gold/30 hover:shadow-brand-gold/50 whitespace-nowrap"
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
