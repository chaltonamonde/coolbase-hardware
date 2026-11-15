import fs from 'fs';
import vm from 'vm';

const dataCode = fs.readFileSync('assets/js/data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataCode, sandbox);
const CBH = sandbox.CBH || sandbox.window.CBH;

const allProducts = CBH.products.map(p => ({
  id: p.id,
  name: p.name,
  category: p.category,
  unit: p.unit,
  price: p.price,
  inStock: p.inStock !== false,
  desc: p.description || '',
  img: p.img ? (p.img.startsWith('/') ? p.img : '/' + p.img) : '/assets/img/paint.jpg',
  specs: p.specs || {}
}));

const categories = [
  { id: 'all', label: 'All Products' },
  ...CBH.categories.map(c => ({
    id: c.id,
    label: c.label,
    icon: c.icon,
    img: c.img ? (c.img.startsWith('/') ? c.img : '/' + c.img) : null,
    description: c.description,
    color: c.color
  }))
];

const configOutput = `/**
 * Cool Base Enterprises – DuraCoat Centre
 * Central Configuration File
 * ---------------------------------------
 * Single source of truth for the scroll walkthrough video,
 * branding, copy timeline, and complete product inventory.
 */

export const WALKTHROUGH_CONFIG = {
  // Primary video path (Drop your re-encoded or original video file here)
  videoSrc: '/assets/store-walkthrough.mp4',
  
  // Optimized dense-keyframe seekable video (instant 0ms seek latency)
  optimizedVideoSrc: '/assets/store-walkthrough-optimized.mp4',

  // Poster fallback frame for instant visual render before video buffers
  posterSrc: '/assets/store-walkthrough-poster.jpg',

  // Canvas image sequence configuration (optional mode)
  canvasMode: {
    enabled: false,
    frameCount: 240,
    framePath: (index) => \`/frames/frame_\${String(index).padStart(4, '0')}.jpg\`,
  },

  scrollTrackVh: 450,
  scrubSmooth: 0.5,
  scaleRange: [1.0, 1.15],
};

export const BRAND_CONFIG = {
  clientName: 'Cool Base Enterprises',
  centreName: 'DuraCoat Centre',
  tagline: 'Ask the experts.',
  missionSubtitle: 'Architectural Coatings & Heavy Building Supplies',
  valueStatement: 'From certified master paint formulation and computerized color tinting to structural steel and site-delivered aggregates — built for builders who demand unyielding durability.',
  phone: '0708 292558',
  phoneTel: '+254708292558',
  whatsappUrl: 'https://wa.me/254708292558',
  location: 'Opposite Siaya Law Courts, Siaya Town, Kenya',
  hours: 'Mon – Sat: 7:30 AM – 6:30 PM (Sun: Closed)',
};

export const DURACOAT_CATEGORIES = ${JSON.stringify(categories, null, 2)};

export const FEATURED_PRODUCTS = ${JSON.stringify(allProducts, null, 2)};

export const HOW_IT_WORKS = ${JSON.stringify(CBH.howItWorks, null, 2)};

export const WHY_CHOOSE_US = ${JSON.stringify(CBH.whyChooseUs, null, 2)};

export const TESTIMONIALS = ${JSON.stringify(CBH.testimonials, null, 2)};

export const FAQS = ${JSON.stringify(CBH.faqs, null, 2)};
`;

fs.writeFileSync('src/config.js', configOutput, 'utf8');
console.log('src/config.js updated successfully with all 52 products & all site data!');

