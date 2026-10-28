// ═══════════════════════════════════════════
// 🔐 Tazmeel Craft — Central Business Config
// ═══════════════════════════════════════════

export const SITE_CONFIG = {
  // ─── Business Info ───
  businessName: "Tazmeel Craft",
  businessTagline: "Crafting Style With Tazmeel",

  // ─── Phone Numbers ───
  phonePrimary: {
    display: "01911548979",
    tel: "+8801911548979",
    whatsapp: "8801911548979",
  },
  phoneSecondary: {
    display: "01747066230",
    tel: "+8801747066230",
    whatsapp: "8801747066230",
  },

  // ─── Email ───
  email: "tazmeelcraft@gmail.com",

  // ─── Address ───
  address: "63/3/1 West Agargaon, Sher-e-Bangla Nagar, Dhaka",
  addressShort: "West Agargaon, Dhaka",

  // ⭐ Google Maps — Exact Business Location
  googleMapsUrl: "https://maps.app.goo.gl/WNcQMrYDxcpCxdvz9",

  // ─── Hours ───
  hours: "9AM - 9PM (Sat - Fri)",

  // ─── Social ───
  social: {
    facebook: "https://facebook.com/tazmeelcraft",
    instagram: "https://instagram.com/tazmeelcraft",
    linkedin: "https://linkedin.com/company/tazmeelcraft",
  },
};

// ═══════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════

export const getWhatsAppLink = (message = "") => {
  const base = `https://wa.me/${SITE_CONFIG.phonePrimary.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getWhatsAppLinkSecondary = (message = "") => {
  const base = `https://wa.me/${SITE_CONFIG.phoneSecondary.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getTelLink = () => `tel:${SITE_CONFIG.phonePrimary.tel}`;
export const getTelLinkSecondary = () => `tel:${SITE_CONFIG.phoneSecondary.tel}`;
export const getMailLink = () => `mailto:${SITE_CONFIG.email}`;

// ⭐ Google Maps Link
export const getMapLink = () => SITE_CONFIG.googleMapsUrl;

// ─── Formatted display ───
export const getPhoneDisplay = () => SITE_CONFIG.phonePrimary.display;
export const getWhatsAppMessage = (customMessage = "") => {
  const defaultMsg = `Hello Tazmeel Craft! I'm interested in your products. Please share more details.`;
  return customMessage || defaultMsg;
};
