// Company Information
export const COMPANY = {
  name: "Tariq Al Harir Foodstuff Trading L.L.C",
  shortName: "Tariq Al Harir",
  tagline: "Silk Road",
  licenseNo: "1591141",
  dcciNo: "666965",
  registerNo: "2789840",
  location: "Dubai, UAE",
} as const;

// Contact Information
export const CONTACT = {
  phone: "+971544646134",
  phoneDisplay: "+971 54 464 6134",
  email: "tariqalharirtrading@gmail.com",
  whatsapp: "https://wa.me/971544646134",
  phoneLink: "tel:+971544646134",
  emailLink: "mailto:tariqalharirtrading@gmail.com",
} as const;

// Brand Colors
export const COLORS = {
  primary: "#1a5f2a",
  primaryDark: "#0d3d16",
  accent: "#6fcf7c",
  secondary: "#c9a227",
} as const;

// Social Links
export const SOCIAL = {
  whatsapp: CONTACT.whatsapp,
  email: CONTACT.emailLink,
  phone: CONTACT.phoneLink,
} as const;
