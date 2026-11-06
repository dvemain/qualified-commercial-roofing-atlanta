export const brand = {
  name: "Qualified Commercial Roofing of Atlanta",
  short: "Qualified Commercial Roofing",
  phone: "231.360.1756",
  phoneHref: "tel:+12313601756",
  email: "qualifiedinquiry@gmail.com",
  city: "Marietta, GA",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Commercial", href: "#expertise", current: true },
  { label: "Restoration", href: "#restoration" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  tag: "Greater Atlanta Commercial Roofing",
  title: "A Roofing Partner",
  titleAccent: "That Knows Commercial",
  lede: `${brand.name}, with 36 years in the commercial roofing industry bringing truth, professionalism and reliability to its customers.`,
  image: { src: "/img/hero-industrial-aerial.jpg", alt: "Aerial view of a long industrial building and its flat roof" },
};

export const clients = [
  "Cushman & Wakefield", "Level Up Construction", "Vision Mountain Homes", "Hogan Construction Group",
  "PMI Terminus", "City of Acworth", "City of Marietta", "Kittle Property Group",
  "ECI Group", "Marriott Hotels", "National Storage", "Zaxby's", "Chick-fil-A",
];

export const risks = [
  "Customer Complaints", "Missed Goals", "Wasted Time",
  "Cancellations", "Unexpected Costs", "Damaged Reputation",
];

export const services = [
  { icon: "wrench", title: "Service & Maintenance", img: "/img/service-maintenance.jpg", alt: "Roofing technician performing maintenance on a commercial roof",
    body: "Don't let servicing or maintaining your building's roof be a stress. Let our technicians take care of your roof's annual maintenance needs." },
  { icon: "crane", title: "New Construction", img: "/img/service-new-construction.jpg", alt: "Crew installing roofing on a new building",
    body: "Finding a roofing company who can balance schedules, other trades, and budget can be hard. Let our team help make your new build run smoothly." },
  { icon: "metal", title: "Metal Roofs", img: "/img/service-metal-roofs.jpg", alt: "Standing seam metal roof on a commercial building",
    body: "Standing seam, wall panels, structural steel, and many other steel roofing products." },
  { icon: "drop", title: "Leak Repairs", img: "/img/service-leak-repairs.jpg", alt: "Water-damaged ceiling from a roof leak",
    body: "Leak diagnosis is a skill which requires years of experience and training. Our team of repair technicians takes pride in stopping the leak the first time." },
  { icon: "storm", title: "Storm Damage", img: "/img/service-storm-damage.jpg", alt: "Aerial view of a building with severe storm damage to the roof",
    body: "Identifying the difference between age and storm damage is something our technicians have spent years to recognize." },
];

export const expertise = {
  title: "Qualified Commercial Roofing is certified in several commercial roofing projects",
  image: { src: "/img/expertise-flat-roof.jpg", alt: "Wide view of a large flat commercial roof" },
  items: [
    { title: "EPDM, TPO, PVC, or Modified Bitumen", body: "For over 30 years we've installed flat roofs on buildings." },
    { title: "Energy Efficient roof coatings", body: "Say goodbye to leaks for good." },
    { title: "Metal Roofing", body: "Whether it's a maintenance repair or new roof need, we're here for you." },
    { title: "Asphalt Shingles", body: "A great option for those looking for an affordable and durable roofing material." },
  ],
};

export const restoration = {
  title: "Restoration vs Replacement",
  lede: "Restore a roof for a fraction of the cost of a replacement.",
  points: [
    { title: "Life cycle cost analysis", body: "A life cycle cost analysis determines the yearly cost of your roof system." },
    { title: "Restoration is approximately 25% the cost of new", body: "Comes with a 10 year warranty." },
    { title: "Retrofit", body: "A roof over or built-up roof, adding a new layer instead of tearing off and starting from scratch, which will save you approximately 40% and will have the same life expectancy of 20+ years." },
    { title: "Coating restoration", body: "Fully reinforced coating systems will save you 30% with a life expectancy of 10–20 years." },
    { title: "Complete roof replacement", body: "We can utilize existing insulation and add to the R-Value by adding insulation or creating a slope through tapered systems." },
    { title: "Metal roofs", body: "Metal roofs can be restored or replaced with membrane through a flute fill system." },
  ],
};

export const projects = [
  { img: "/img/project-1.jpg", caption: "Industrial roof installation, Atlanta" },
  { img: "/img/project-2.jpg", caption: "Crew at work on a slope repair" },
  { img: "/img/project-3.jpg", caption: "Multi-building warehouse re-roof" },
  { img: "/img/project-4.jpg", caption: "Metal roof on a cold morning" },
];
