import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import heroImg from "@/assets/hero-headlight.jpg";
import dealerBg from "@/assets/dealer-bg.jpg";
import revueltoImg from "@/assets/revuelto.jpg";
import configuratorBg from "@/assets/configurator-bg.jpg";

const CompanyOverview = () => {
  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        
        {/* BLOCK 1 — HERO */}
        <section className="relative h-screen flex flex-col justify-end overflow-hidden pb-32 px-8 md:px-16">
          <img
            src={heroImg}
            alt="EDrive Marine Mobility"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl mb-4">
              EDRIVE
            </h1>
            <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/80">
              Luxury Marine Mobility Manufacturer
            </h2>
          </motion.div>
        </section>

        {/* BLOCK 2 — INTRO STATEMENT */}
        <section className="py-40 px-8 text-center bg-black max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-xl md:text-3xl font-light leading-snug"
          >
            <p>
              EDrive is a manufacturer of luxury marine mobility vehicles, redefining premium experiences on the water through automotive-inspired design, advanced engineering and real-world operational performance.
            </p>
            <p className="text-muted-foreground text-lg md:text-2xl">
              We develop and produce high-end water vehicles that combine striking aesthetics with reliability, safety and commercial viability. Our products are created not as concepts, but as fully deployable assets designed for real operation.
            </p>
          </motion.div>
        </section>

        {/* BLOCK 3 — WHAT WE DO */}
        <section className="min-h-screen flex flex-col md:flex-row bg-black">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 relative order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">What We Do</h3>
              <div className="space-y-8 text-lg font-light leading-relaxed text-white/80">
                <p>
                  EDrive designs, engineers and manufactures a new category of luxury water vehicles, including JetCars and custom marine mobility solutions.
                </p>
                <p>
                  Each vehicle is developed as a complete system — integrating design, structural engineering, propulsion compatibility, safety architecture and operational efficiency.
                </p>
                <p>
                  Our focus is on creating products that perform consistently in demanding environments while maintaining the visual presence and exclusivity expected from a luxury brand.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto order-1 md:order-2">
            <img src={revueltoImg} alt="Detail" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
          </div>
        </section>

        {/* BLOCK 4 — HOW WE OPERATE */}
        <section className="min-h-screen flex flex-col md:flex-row bg-tiffany text-black">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h3 className="text-sm tracking-[0.2em] text-black/60 uppercase mb-8 font-bold">How We Operate</h3>
              <div className="space-y-8 text-lg font-light leading-relaxed">
                <p>
                  EDrive follows an integrated development and manufacturing model that spans the entire lifecycle of each vehicle — from concept and design to production, quality control and deployment support.
                </p>
                <p>
                  We work with certified suppliers and technical partners, applying strict internal standards to materials, assembly processes and final inspection. This approach ensures consistency, scalability and long-term reliability across every unit produced.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
            <img src={dealerBg} alt="Factory detail" className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105" />
          </div>
        </section>

        {/* BLOCK 5 — WHERE WE OPERATE & BLOCK 6 */}
        <section className="py-40 px-8 text-center bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">Where We Operate</h3>
            <p className="text-xl md:text-3xl font-light leading-snug mb-8">
              EDrive operates internationally, supporting clients and partners across the Middle East, Europe, USA, Asia and Africa, as well as select island destinations worldwide.
            </p>
            <p className="text-lg text-muted-foreground font-light mb-32">
              Our vehicles are deployed in a wide range of operational environments — including luxury resorts, marinas, private waterfront locations and investment-driven projects — adapting to different regulatory frameworks, climates and commercial models.
            </p>

            {/* BLOCK 6 — POSITIONING */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic">
              We do not create exhibition concepts.<br/>
              We manufacture operational luxury assets.
            </h2>
          </motion.div>
        </section>

        {/* BLOCK 7 — WHY EMOTION DRIVE */}
        <section className="py-32 px-8 bg-tiffany text-black">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-16 tracking-tight">Why EDrive</h3>
            <ul className="space-y-6 text-xl md:text-2xl font-light">
              {[
                "Manufacturer, not a reseller",
                "Automotive-inspired design language",
                "Engineered for real-world operation",
                "Built for both lifestyle and commercial applications",
                "Focused on long-term value, not short-term trends"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6 border-b border-black/10 pb-6"
                >
                  <span className="text-black/30 font-bold tracking-widest text-sm mt-1">0{i+1}</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <FooterSection />
    </>
  );
};

export default CompanyOverview;
