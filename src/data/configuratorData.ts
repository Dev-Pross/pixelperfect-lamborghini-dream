import modelRImg from '@/assets/model-r.png';
import modelFImg from '@/assets/model-f.png';
import luminaImg from '@/assets/revuelto.jpg';
import cyberImg from '@/assets/temerario.jpg';

// ─── Types ───────────────────────────────────────────────

export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  color?: string;
  gradient?: string;
  price?: string;
}

export interface ConfigCategory {
  id: string;
  title: string;
  subtitle: string;
  options: ConfigOption[];
}

export interface ConfigTab {
  id: 'exterior' | 'interior' | 'equipments';
  label: string;
  categories: ConfigCategory[];
}

export interface ModelStats {
  length: string;
  width: string;
  depth: string;
  seating: string;
  brand: string;
  engine: string;
  cert: string;
}

export interface ConfiguratorModel {
  id: string;
  name: string;
  letter: string;
  slug: string;
  desc: string;
  image: string;
  activeColor: string;
  stats: ModelStats;
  tabs: ConfigTab[];
}

// ─── 10 Essential Categories ─────────────────────────────

// 1. BODY COLOR
const PAINT: ConfigCategory = {
  id: 'paint',
  title: 'BODY COLOR',
  subtitle: 'Choose the exterior color',
  options: [
    { id: 'rosso-corsa', name: 'Rosso Corsa', description: 'Iconic racing red with deep metallic flake', color: '#C0392B', gradient: 'linear-gradient(130.6deg, #BE292A 20.06%, #FF5850 50.47%, #BA0506 83.49%)' },
    { id: 'verde-mantis', name: 'Verde Mantis', description: 'Vibrant green with pearl effect', color: '#27AE60', gradient: 'linear-gradient(130.6deg, #19C419 20.06%, #41EA4D 50.47%, #00B71B 83.49%)' },
    { id: 'giallo-orion', name: 'Giallo Orion', description: 'Bright yellow with metallic undertone', color: '#F1C40F', gradient: 'linear-gradient(130.6deg, #D4AC0D 20.06%, #F9E154 50.47%, #B7950B 83.49%)' },
    { id: 'bianco-monocerus', name: 'Bianco Monocerus', description: 'Pure white with ceramic coating', color: '#ECF0F1', gradient: 'linear-gradient(130.6deg, #D5D8DC 20.06%, #FDFEFE 50.47%, #BDC3C7 83.49%)' },
    { id: 'nero-nemesis', name: 'Nero Nemesis', description: 'Deep black with satin finish', color: '#1C1C1C', gradient: 'linear-gradient(130.6deg, #0A0A0A 20.06%, #3D3D3D 50.47%, #000000 83.49%)' },
    { id: 'blu-nethuns', name: 'Blu Nethuns', description: 'Electric blue with shifting pearl', color: '#2980B9', gradient: 'linear-gradient(130.6deg, #1A5276 20.06%, #3498DB 50.47%, #154360 83.49%)' },
    { id: 'grigio-telesto', name: 'Grigio Telesto', description: 'Refined gray with silver metallic', color: '#7F8C8D', gradient: 'linear-gradient(130.6deg, #616A6B 20.06%, #95A5A6 50.47%, #515A5A 83.49%)' },
    { id: 'arancio-borealis', name: 'Arancio Borealis', description: 'Fiery orange with crystal effect', color: '#E67E22', gradient: 'linear-gradient(130.6deg, #CA6F1E 20.06%, #F0932B 50.47%, #A04000 83.49%)' },
  ],
};

// 2. WHEELS
const WHEELS: ConfigCategory = {
  id: 'wheels',
  title: 'WHEELS',
  subtitle: 'Configure rims and tires',
  options: [
    { id: '20-leirion-silver', name: '20" Leirion Silver', description: 'Silver polished multi-spoke design', price: 'Included' },
    { id: '20-leirion-black', name: '20" Leirion Glossy Black', description: 'Blacked-out aggressive multi-spoke', price: '+ $1,200' },
    { id: '21-taigete-diamond', name: '21" Taigete Diamond Cut', description: 'Two-tone diamond-cut lightweight forged', price: '+ $3,800' },
    { id: '21-taigete-titanium', name: '21" Taigete Titanium', description: 'Brushed titanium finish with aero inserts', price: '+ $4,200' },
    { id: '22-nath-carbon', name: '22" Nath Forged Carbon', description: 'Carbon fiber composite ultra-lightweight', price: '+ $8,500' },
  ],
};

// 3. WINDOW TINT
const WINDOW_TINT: ConfigCategory = {
  id: 'window-tint',
  title: 'WINDOW TINT',
  subtitle: 'Choose window tinting level',
  options: [
    { id: 'clear', name: 'Clear Glass', description: 'Factory standard untinted windows', color: 'rgba(200,220,240,0.3)', price: 'Included' },
    { id: 'light-tint', name: 'Light Tint (50%)', description: 'Subtle tint for UV protection and style', color: 'rgba(80,80,80,0.35)', price: '+ $400' },
    { id: 'medium-tint', name: 'Medium Tint (35%)', description: 'Balanced privacy and visibility', color: 'rgba(40,40,40,0.5)', price: '+ $600' },
    { id: 'dark-tint', name: 'Dark Tint (20%)', description: 'High privacy with excellent heat rejection', color: 'rgba(15,15,15,0.65)', price: '+ $800' },
    { id: 'limo-tint', name: 'Limo Tint (5%)', description: 'Maximum privacy, not street legal everywhere', color: 'rgba(0,0,0,0.85)', price: '+ $1,000' },
  ],
};

// 4. BODY KIT
const BODY_KIT: ConfigCategory = {
  id: 'body-kit',
  title: 'BODY KIT',
  subtitle: 'Aerodynamic styling package',
  options: [
    { id: 'stock', name: 'Stock', description: 'Factory body with clean lines', price: 'Included' },
    { id: 'sport-kit', name: 'Sport Package', description: 'Front lip, side skirts, rear diffuser', price: '+ $4,500' },
    { id: 'carbon-aero', name: 'Carbon Aero Kit', description: 'Full carbon fiber splitter, skirts, diffuser, and wing', price: '+ $12,500' },
    { id: 'widebody', name: 'Widebody Kit', description: 'Extended fenders with aggressive stance', price: '+ $18,000' },
    { id: 'track-pack', name: 'Track Package', description: 'GT wing, canards, vented hood, roll cage', price: '+ $24,000' },
  ],
};

// 5. UPHOLSTERY
const UPHOLSTERY: ConfigCategory = {
  id: 'upholstery',
  title: 'UPHOLSTERY',
  subtitle: 'Choose seat material and color',
  options: [
    { id: 'nero-ade', name: 'Nero Ade Leather', description: 'Deep black full-grain Nappa leather', color: '#1A1A1A', price: 'Included' },
    { id: 'rosso-alala', name: 'Rosso Alala Leather', description: 'Rich red Nappa leather with contrast stitching', color: '#8B0000', price: '+ $3,200' },
    { id: 'bianco-leda', name: 'Bianco Leda Leather', description: 'Pristine white leather with black piping', color: '#F5F5F5', price: '+ $3,200' },
    { id: 'blu-delphinus', name: 'Blu Delphinus Leather', description: 'Navy blue Nappa with diamond quilting', color: '#1B3A5C', price: '+ $3,600' },
    { id: 'alcantara-sport', name: 'Full Alcantara Sport', description: 'Lightweight Alcantara with carbon-back shells', color: '#2C2C2C', price: '+ $5,800' },
    { id: 'two-tone-red', name: 'Two-Tone Black/Red', description: 'Black Nappa base with red Alcantara inserts', color: '#8B0000', price: '+ $4,400' },
  ],
};

// 6. DASHBOARD
const DASHBOARD: ConfigCategory = {
  id: 'dashboard',
  title: 'DASHBOARD',
  subtitle: 'Customize the dashboard trim',
  options: [
    { id: 'piano-black', name: 'Piano Black', description: 'High-gloss lacquered black trim', price: 'Included' },
    { id: 'carbon-dash', name: 'Carbon Fiber', description: 'Exposed twill-weave carbon fiber trim panels', price: '+ $4,200' },
    { id: 'brushed-alu', name: 'Brushed Aluminum', description: 'Satin-finished aerospace-grade aluminum', price: '+ $2,800' },
    { id: 'forged-carbon', name: 'Forged Carbon', description: 'Chopped carbon fiber with random marble pattern', price: '+ $5,800' },
  ],
};

// 7. STEERING WHEEL
const STEERING: ConfigCategory = {
  id: 'steering',
  title: 'STEERING WHEEL',
  subtitle: 'Select your driving interface',
  options: [
    { id: 'sport-leather', name: 'Sport Leather', description: 'Perforated Nappa leather with contrast stitching', price: 'Included' },
    { id: 'sport-alcantara', name: 'Sport Alcantara', description: 'Full Alcantara wrap with yellow center stripe', price: '+ $1,200' },
    { id: 'carbon-race', name: 'Carbon Race', description: 'Carbon fiber top/bottom with Alcantara grips', price: '+ $4,800' },
    { id: 'flat-bottom', name: 'Flat-Bottom Track', description: 'D-shaped racing wheel with integrated display', price: '+ $3,600' },
  ],
};

// 8. AMBIENT LIGHTING
const AMBIENT: ConfigCategory = {
  id: 'ambient',
  title: 'AMBIENT LIGHTING',
  subtitle: 'Set the mood inside',
  options: [
    { id: 'white-ambient', name: 'Arctic White', description: 'Clean white LED ambient lighting throughout', color: '#FFFFFF', price: 'Included' },
    { id: 'red-ambient', name: 'Rosso Red', description: 'Warm red accent lighting for a dramatic interior', color: '#E74C3C', price: '+ $600' },
    { id: 'blue-ambient', name: 'Blu Electric', description: 'Cool blue neon-style accent glow', color: '#3498DB', price: '+ $600' },
    { id: 'green-ambient', name: 'Verde Pulse', description: 'Racing-inspired green ambient lighting', color: '#2ECC71', price: '+ $600' },
    { id: 'orange-ambient', name: 'Arancio Glow', description: 'Warm orange accent illumination', color: '#E67E22', price: '+ $600' },
    { id: 'multi-dynamic', name: 'Multi-Color Dynamic', description: '64-color dynamic system with music sync', color: 'linear-gradient(90deg, #E74C3C, #F1C40F, #2ECC71, #3498DB, #9B59B6)', price: '+ $1,800' },
  ],
};

// 9. AUDIO SYSTEM
const AUDIO: ConfigCategory = {
  id: 'audio',
  title: 'AUDIO SYSTEM',
  subtitle: 'Premium sound experience',
  options: [
    { id: 'standard-audio', name: 'Standard 8-Speaker', description: '200W system with 8 speakers and subwoofer', price: 'Included' },
    { id: 'premium-12', name: 'Premium 12-Speaker', description: '450W amplifier with 12 speakers and dual sub', price: '+ $2,800' },
    { id: 'audiophile-16', name: 'Audiophile 16-Speaker (Naim)', description: '1,200W Naim system with 16 speakers', price: '+ $6,400' },
    { id: 'concert-21', name: 'Concert Hall 21-Speaker', description: '2,000W reference system with acoustic optimization', price: '+ $12,000' },
  ],
};

// 10. PERFORMANCE
const PERFORMANCE: ConfigCategory = {
  id: 'performance',
  title: 'PERFORMANCE',
  subtitle: 'Tune your driving experience',
  options: [
    { id: 'standard-perf', name: 'Standard', description: 'Factory-tuned for balanced comfort and sport', price: 'Included' },
    { id: 'sport-exhaust', name: 'Sport Exhaust + Suspension', description: 'Titanium exhaust and lowered sport suspension', price: '+ $8,500' },
    { id: 'track-setup', name: 'Track Setup', description: 'Ceramic brakes, roll cage, racing harness, telemetry', price: '+ $18,000' },
    { id: 'ultimate-perf', name: 'Ultimate Performance', description: 'Active aero, ceramic brakes, titanium exhaust, weight reduction', price: '+ $32,000' },
  ],
};

// ─── Tab Definitions ─────────────────────────────────────

const EXTERIOR_TAB: ConfigTab = {
  id: 'exterior',
  label: 'EXTERIOR',
  categories: [PAINT, WHEELS, WINDOW_TINT, BODY_KIT],
};

const INTERIOR_TAB: ConfigTab = {
  id: 'interior',
  label: 'INTERIOR',
  categories: [UPHOLSTERY, DASHBOARD, STEERING, AMBIENT],
};

const EQUIPMENTS_TAB: ConfigTab = {
  id: 'equipments',
  label: 'PERFORMANCE',
  categories: [AUDIO, PERFORMANCE],
};

// ─── Models ──────────────────────────────────────────────

export const CONFIGURATOR_MODELS: ConfiguratorModel[] = [
  {
    id: 'MODEL R',
    name: 'THE MODEL R',
    letter: 'R',
    slug: 'model-r',
    desc: 'Designed for premium leisure and commercial use, compliant with CE standards for global operation.',
    image: modelRImg,
    activeColor: '#F6C974',
    stats: { length: '5.22 m', width: '2.06 m', depth: '1.82 m', seating: '4-5 persons', brand: 'Yamaha', engine: '1900 cc', cert: 'CE Certified' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, EQUIPMENTS_TAB],
  },
  {
    id: 'MODEL F',
    name: 'THE MODEL F',
    letter: 'F',
    slug: 'model-f',
    desc: 'Focused on high speeds and unmatched track performance, equipped with advanced aerodynamics.',
    image: modelFImg,
    activeColor: '#FFFFFF',
    stats: { length: '5.05 m', width: '2.00 m', depth: '1.75 m', seating: '2 persons', brand: 'Yamaha', engine: '1900 cc', cert: 'CE Certified' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, EQUIPMENTS_TAB],
  },
  {
    id: 'LUMINA',
    name: 'THE LUMINA',
    letter: 'L',
    slug: 'lumina',
    desc: 'Pure elegance and smooth cruising, boasting luxury interiors and an incredibly quiet electric engine.',
    image: luminaImg,
    activeColor: '#81D8D0',
    stats: { length: '5.50 m', width: '2.10 m', depth: '1.90 m', seating: '4 persons', brand: 'Lumina EV', engine: 'Dual Motor', cert: 'CE Certified' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, EQUIPMENTS_TAB],
  },
  {
    id: 'CYBERMARINE',
    name: 'THE CYBERMARINE',
    letter: 'C',
    slug: 'cybermarine',
    desc: 'Futuristic design with marine-grade materials, ready to conquer both road and water expanses.',
    image: cyberImg,
    activeColor: '#FFFFFF',
    stats: { length: '6.00 m', width: '2.20 m', depth: '2.00 m', seating: '6 persons', brand: 'CyberD', engine: 'Quad Motor', cert: 'Amphibious' },
    tabs: [EXTERIOR_TAB, INTERIOR_TAB, EQUIPMENTS_TAB],
  },
];

// Default selections
export const DEFAULT_SELECTIONS: Record<string, string> = {
  paint: 'rosso-corsa',
  wheels: '20-leirion-silver',
  'window-tint': 'clear',
  'body-kit': 'stock',
  upholstery: 'nero-ade',
  dashboard: 'piano-black',
  steering: 'sport-leather',
  ambient: 'white-ambient',
  audio: 'standard-audio',
  performance: 'standard-perf',
};
