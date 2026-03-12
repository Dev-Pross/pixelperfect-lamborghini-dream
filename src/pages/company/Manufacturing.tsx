import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import heroImg from "@/assets/hero-headlight.jpg";
import dealerBg from "@/assets/dealer-bg.jpg";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const blocks = [
  { title: "Hull Design & Safety Architecture", text: "eDrive hulls are engineered with a multi-section structural design that prioritizes safety and buoyancy. Each hull is divided into multiple independent internal sections and filled with specialized marine-grade foam. This construction significantly increases impact resistance and provides an additional safety layer by maintaining flotation even in the event of structural damage.", bg: "black", split: true },
  { title: "Materials & Surface Finishing", text: "eDrive vehicles are finished using high-quality gelcoat systems specifically developed for marine applications. Gelcoat provides superior resistance to UV exposure, saltwater and mechanical wear, while ensuring long-term color stability and a premium surface finish. All materials are selected for durability, marine compatibility and consistent aesthetic quality.", bg: "tiffany" },
  { title: "Production Process & Engine Integration", text: "eDrive follows a controlled production process designed to ensure precision, repeatability and ease of maintenance. Each vehicle platform is engineered with an optimized engine integration system, allowing efficient installation and secure mounting of high-quality marine engines. This standardized integration approach simplifies servicing, improves weight distribution and ensures consistent performance across all units.", bg: "black" },
  { title: "Quality Components & Onboard Systems", text: "eDrive vehicles are equipped exclusively with premium marine-grade components selected for reliability, comfort and long-term use. This includes marine-grade audio systems, non-slip marine mats for enhanced safety and comfort, and seating upholstered in water-resistant, marine-certified materials.", bg: "black" },
  { title: "Quality Control & Testing", text: "Every eDrive vehicle undergoes a structured quality control process throughout production. Inspections are performed at multiple stages, including structural integrity checks, component verification and final system validation. This ensures that each unit meets internal quality standards and is fully prepared for operational deployment.", bg: "tiffany" },
  { title: "Customization & Scalability", text: "eDrive vehicles are designed to support both customization and scalable production. Visual configurations and functional adaptations can be applied without compromising the core engineering platform, allowing efficient delivery of bespoke projects as well as multi-unit deployments for commercial operators and partners.", bg: "black" },
];

const Manufacturing = () => (
  <>
    <NavBar />
    <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-32 px-8 md:px-16 overflow-hidden">
        <img src={heroImg} alt="Manufacturing" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <motion.div {...fade} className="relative z-10"><p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">Company</p><h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-heading-xl">MANUFACTURING & TECHNOLOGY</h1><p className="text-xl text-white/60 mt-4">Engineering Luxury on Water</p></motion.div>
      </section>

      {/* ENGINEERING PHILOSOPHY */}
      <section className="py-40 px-8 bg-black"><div className="max-w-4xl mx-auto"><motion.div {...fade} className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"><p>eDrive applies an engineering-first approach to manufacturing, where safety, performance and durability are developed as an integrated system.</p><p className="text-muted-foreground">Every vehicle is designed to deliver not only visual impact, but also structural resilience, operational reliability and long-term performance in real marine environments. Technology at eDrive is not added as an option — it is embedded into the core architecture of each vehicle.</p></motion.div></div></section>

      {/* Content Blocks */}
      {blocks.map((block, i) => (
        block.split ? (
          <section key={i} className="min-h-[70vh] flex flex-col md:flex-row bg-black">
            <div className="w-full md:w-1/2 flex items-center p-8 md:p-24"><motion.div {...fade} className="max-w-xl"><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{block.title}</h3><p className="text-lg font-light text-white/80 leading-relaxed">{block.text}</p></motion.div></div>
            <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto"><img src={dealerBg} alt={block.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" /></div>
          </section>
        ) : (
          <section key={i} className={`py-32 px-8 ${block.bg === 'tiffany' ? 'bg-tiffany text-black' : 'bg-black'} ${i > 0 && block.bg === 'black' ? 'border-t border-white/5' : ''}`}>
            <div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className={`text-sm tracking-[0.2em] uppercase mb-8 ${block.bg === 'tiffany' ? 'text-black/50 font-bold' : 'text-white/50'}`}>{block.title}</h3><p className={`text-xl md:text-2xl font-light leading-relaxed ${block.bg === 'tiffany' ? '' : 'text-white/80'}`}>{block.text}</p></motion.div></div>
          </section>
        )
      ))}

      {/* CLOSING */}
      <section className="py-40 px-8 text-center bg-black border-t border-white/5"><div className="max-w-4xl mx-auto"><motion.div {...fade}><h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">Technology as a Safety & Value Asset</h3><p className="text-2xl md:text-4xl font-light leading-snug">At eDrive, technology is developed to enhance safety, reliability and long-term value.</p><p className="text-lg text-muted-foreground mt-8">Engineering decisions are driven by real operational requirements, ensuring that each vehicle delivers consistent performance, protection and confidence for both operators and passengers.</p></motion.div></div></section>
    </main>
    <FooterSection />
  </>
);

export default Manufacturing;
