import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import heroImg from "@/assets/hero-headlight.jpg";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Certifications = () => (
  <>
    <NavBar />
    <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
        <img src={heroImg} alt="Certifications" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <motion.div {...fade} className="relative z-10"><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">Company</p><h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">CERTIFICATIONS</h1><p className="text-xl text-white/60 mt-4">Built for International Deployment</p></motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="py-40 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"><p>eDrive vehicles are developed and manufactured in compliance with international regulatory and certification requirements.</p><p className="text-muted-foreground">Certification is an integral part of product readiness, supporting legal deployment, registration and operation across global markets.</p></motion.div></div></section>

      {/* CE CERTIFICATION */}
      <section className="py-32 px-8 bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">CE Certification</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">eDrive JetCars are CE certified in accordance with applicable European safety, health and environmental standards.</p><p className="text-lg text-muted-foreground mt-6">CE certification confirms compliance with essential regulatory requirements and supports deployment within the European Union and other markets recognizing CE conformity.</p><div className="mt-12 inline-block px-6 py-3 border border-tiffany text-tiffany text-sm tracking-widest uppercase">CE Certified</div></motion.div></div></section>

      {/* CERTIFICATE OF ORIGIN */}
      <section className="py-32 px-8 bg-tiffany text-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-black/50 uppercase mb-8 font-bold">Certificate of Origin</h3><p className="text-xl md:text-2xl font-light leading-relaxed">eDrive JetCars are 100% manufactured in the European Union.</p><p className="text-lg mt-6">For international deliveries, eDrive provides a Certificate of Origin, confirming EU manufacturing origin and supporting customs clearance, import procedures and regional compliance requirements for clients and partners.</p></motion.div></div></section>

      {/* REGIONAL DEPLOYMENT */}
      <section className="py-32 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">Regional Deployment Support</h3><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">In addition to CE certification and Certificate of Origin, eDrive supports region-specific documentation requirements where applicable.</p><p className="text-lg text-muted-foreground mt-6">This ensures smoother deployment and regulatory alignment across different countries and operational regions.</p></motion.div></div></section>

      {/* CLOSING */}
      <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><p className="text-2xl md:text-4xl font-light italic leading-snug">Certification at eDrive is not an option — it is a foundation for global operation, scalability and long-term trust.</p></motion.div></div></section>
    </main>
    <FooterSection />
  </>
);

export default Certifications;
