import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import heroImg from "@/assets/hero-headlight.jpg";
import dealerBg from "@/assets/dealer-bg.jpg";
import revueltoImg from "@/assets/revuelto.jpg";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CompanyProfile = () => (
  <>
    <NavBar />
    <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
        <img src={heroImg} alt="EDrive" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <motion.div {...fade} className="relative z-10"><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">Company</p><h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">COMPANY PROFILE</h1><p className="text-xl text-white/60 mt-4">EDrive</p></motion.div>
      </section>

      {/* BLOCK 2 — LEGAL & CORPORATE */}
      <section className="py-40 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"><p>EDrive is an international manufacturer of luxury marine mobility vehicles, operating through a structured corporate and production framework based in the United Arab Emirates.</p><p className="text-muted-foreground">The company is built to support global manufacturing, international partnerships and multi-region deployment, providing a stable and transparent foundation for long-term cooperation with commercial operators, private clients, investors and strategic partners.</p></motion.div></div></section>

      {/* BLOCK 3 — BUSINESS MODEL */}
      <section className="min-h-[80vh] flex flex-col md:flex-row bg-black">
        <div className="w-full md:w-1/2 flex items-center p-8 md:p-24"><motion.div {...fade} className="max-w-xl"><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">Business Model</h3><div className="space-y-6 text-lg font-light text-white/80 leading-relaxed"><p>EDrive operates across multiple business models, serving both commercial and private markets worldwide.</p><p>The company delivers its products through direct sales, bulk allocations for strategic partners, distributor-based expansion and project-specific deployments for resorts, marinas, tourism developments and investment-led operations.</p><p>This flexible commercial structure allows EDrive to scale internationally while maintaining full control over product quality, brand positioning and operational standards.</p></div></motion.div></div>
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto"><img src={revueltoImg} alt="Detail" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70" /></div>
      </section>

      {/* BLOCK 4 — MANUFACTURING FOOTPRINT */}
      <section className="min-h-[80vh] flex flex-col md:flex-row bg-tiffany text-black">
        <div className="w-full md:w-1/2 flex items-center p-8 md:p-24"><motion.div {...fade} className="max-w-xl"><h3 className="text-sm tracking-[0.2em] text-black/50 uppercase mb-8 font-bold">Manufacturing Footprint</h3><div className="space-y-6 text-lg font-light leading-relaxed"><p>EDrive manages a controlled manufacturing footprint based in the United Arab Emirates, combining in-house development with certified suppliers and specialized technical partners.</p><p>Each vehicle is produced under direct supervision and follows predefined technical specifications, quality benchmarks and inspection protocols. This ensures consistency, reliability and premium execution across all units, regardless of destination or application.</p></div></motion.div></div>
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto"><img src={dealerBg} alt="Factory" className="absolute inset-0 w-full h-full object-cover opacity-90" /></div>
      </section>

      {/* BLOCK 5 — CLIENTS & APPLICATIONS */}
      <section className="py-32 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">Clients & Applications</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">EDrive vehicles are deployed across a wide range of commercial and private applications. Our clients include luxury resorts, water sports operators, hospitality groups, tourism-focused developments, private owners and investors seeking distinctive marine mobility assets with strong visual impact and scalable commercial potential.</p></motion.div></div></section>

      {/* BLOCK 6 — GLOBAL OPERATIONS */}
      <section className="py-32 px-8 bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">Global Operations</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">EDrive supports operations and deployments across the Middle East, Europe, USA, Asia and Africa, as well as select island destinations worldwide.</p><p className="text-lg text-muted-foreground mt-6">The company is experienced in adapting its products and processes to different regulatory environments, climatic conditions and operational models, enabling smooth execution across diverse global markets.</p></motion.div></div></section>

      {/* BLOCK 7 — PARTNERSHIPS & DISTRIBUTION */}
      <section className="py-32 px-8 bg-tiffany text-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-black/50 uppercase mb-8 font-bold">Partnerships & Distribution</h3><p className="text-xl md:text-2xl font-light leading-relaxed">EDrive collaborates with a curated network of distributors, operators and strategic partners across key global markets.</p><p className="text-lg mt-6">Partnerships are selected based on operational capability, market expertise and long-term alignment, allowing EDrive to expand internationally while preserving brand integrity, quality standards and performance consistency.</p></motion.div></div></section>

      {/* BLOCK 8 — GOVERNANCE */}
      <section className="py-32 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">Governance & Compliance</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">EDrive operates under defined governance and compliance frameworks, ensuring alignment with international standards, regulatory requirements and internal control processes.</p><p className="text-lg text-muted-foreground mt-6">Detailed information regarding governance principles, compliance practices and regulatory alignment is available in the dedicated Governance & Compliance section.</p></motion.div></div></section>
    </main>
    <FooterSection />
  </>
);

export default CompanyProfile;
