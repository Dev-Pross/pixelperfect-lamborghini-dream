import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import heroImg from "@/assets/hero-headlight.jpg";
import dealerBg from "@/assets/dealer-bg.jpg";

const BecomeDistributor = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          <img
            src={heroImg}
            alt="JetCar on ocean"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-4xl px-8 mt-20"
          >
            <h1 className="text-4xl md:text-6xl text-heading-xl mb-6">
              Become a Distributor
            </h1>
            <h2 className="text-xl md:text-3xl font-body font-light mb-8 max-w-2xl mx-auto">
              Represent a New Category in Luxury Water Mobility
            </h2>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] mb-12">
              Global Expansion. Select Territories Available.
            </p>
            <button 
              onClick={() => document.getElementById('dist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-filled-white text-sm"
            >
              Request Distribution Access
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <div className="w-[1px] h-12 bg-white/30" />
          </motion.div>
        </section>

        {/* SECTION 2 - Controlled Network */}
        <section className="py-32 px-8 md:px-16 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-4xl text-heading-xl mb-12">
              A Selective Global Distribution Model
            </h3>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed max-w-3xl mx-auto">
              <p>JetCar operates through a carefully structured international distribution network.</p>
              <p>We collaborate only with partners who demonstrate operational strength, market capability, and long-term strategic alignment.</p>
              <p className="text-foreground pt-6">This is not open enrollment.</p>
              <p className="text-tiffany font-medium">This is strategic expansion.</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3 - Who Qualifies */}
        <section className="py-32 px-8 md:px-16 bg-neutral-950">
          <div className="max-w-7xl mx-auto">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-heading-xl mb-20 text-center"
            >
              Who We Partner With
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Established Marine Operators", desc: "Companies with proven performance in marine or luxury vehicle sectors." },
                { title: "Premium Market Access", desc: "Direct reach into high-net-worth clientele and water sports ecosystems." },
                { title: "Operational Infrastructure", desc: "Showroom, marina, warehouse, or structured sales environment." },
                { title: "Strategic Growth Capacity", desc: "Ability to scale regionally and support long-term market development." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 border border-white/5 bg-black/50 hover:border-tiffany/50 transition-colors"
                >
                  <h4 className="text-xl font-bold mb-4 font-body">{item.title}</h4>
                  <p className="text-muted-foreground font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - The Advantage */}
        <section className="min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen">
            <img 
              src={dealerBg} 
              alt="Manufacturing Facility" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          <div className="w-full md:w-1/2 flex items-center bg-black px-8 py-24 md:px-16 xl:px-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl text-heading-xl mb-12">
                Why Represent JetCar
              </h3>
              <ul className="space-y-6 text-lg font-light text-muted-foreground mb-16">
                {[
                  "Direct Manufacturer Access",
                  "Exclusive Territory Consideration",
                  "Structured Commercial Framework",
                  "Brand & Marketing Alignment",
                  "Technical & Operational Support"
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-tiffany rounded-full flex-shrink-0" />
                    <span className="text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 border-l-2 border-tiffany bg-white/5">
                <p className="text-xl md:text-2xl font-light italic">
                  JetCar is not a product.<br/>It is a category.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - Application Form */}
        <section id="dist-form" className="py-32 px-8 bg-neutral-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-4xl text-heading-xl mb-4 text-center">
                Request Distribution Access
              </h3>
              <p className="text-muted-foreground font-light mb-16 text-lg text-center">
                Submit your company profile for evaluation.<br/>
                Approved applicants will be contacted for further strategic discussion.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    key="success"
                    className="bg-tiffany/10 border border-tiffany p-12 text-center"
                  >
                    <h3 className="text-2xl font-bold text-tiffany mb-4">Thank you for your submission.</h3>
                    <p className="text-foreground mb-2">Your company profile has been received.</p>
                    <p className="text-muted-foreground text-sm">Our Commercial Department will review your application and contact you within 5 business days.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                  >
                    {/* Contact Person */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Contact Person</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="First name *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="text" placeholder="Last name *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="email" placeholder="Email address *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="tel" placeholder="Phone number *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="text" placeholder="Position / Title *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors md:col-span-2" />
                      </div>
                    </div>

                    {/* Company Details */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Company Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Company name *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors md:col-span-2" />
                        <input type="text" placeholder="Country *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="text" placeholder="City *" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                        <input type="url" placeholder="Company website" className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors md:col-span-2" />
                      </div>
                    </div>

                    {/* Business Profile */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Business Profile</h4>
                      
                      <div className="space-y-4">
                        <label className="text-sm block">Industry / Sector *</label>
                        <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled selected>Select your industry</option>
                          <option>Marine / Watersports</option>
                          <option>Luxury Automotive</option>
                          <option>Tourism / Hospitality</option>
                          <option>Leisure / Entertainment</option>
                          <option>Real Estate / Resort Development</option>
                          <option>Retail / Premium Goods</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm block">Do you currently have showroom or marina access? *</label>
                        <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled selected>Select an option</option>
                          <option>Yes — Showroom</option>
                          <option>Yes — Marina</option>
                          <option>Yes — Both</option>
                          <option>No — but planning to establish</option>
                          <option>No</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm block">Territory of interest *</label>
                        <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled selected>Select a region</option>
                          <option>Middle East</option>
                          <option>Europe</option>
                          <option>North America</option>
                          <option>Asia</option>
                          <option>Africa</option>
                          <option>Caribbean / Island Destinations</option>
                          <option>South America</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm block">Years of operation *</label>
                        <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                          <option value="" disabled selected>Select experience</option>
                          <option>Less than 2 years</option>
                          <option>2–5 years</option>
                          <option>5–10 years</option>
                          <option>10+ years</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-6">
                      <h4 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Additional Information</h4>
                      <textarea 
                        placeholder="Tell us about your company, market presence, and why you're interested in representing eDrive JetCar." 
                        rows={4}
                        required
                        className="w-full bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors resize-none" 
                      />
                    </div>

                    {/* Consent */}
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required 
                        className="sr-only" 
                        onChange={(e) => setConsent(e.target.checked)} 
                      />
                      <div className={`w-5 h-5 flex-shrink-0 border flex items-center justify-center transition-colors mt-0.5 ${consent ? 'bg-tiffany border-tiffany' : 'border-white/30 group-hover:border-white/60'}`}>
                        {consent && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className="text-sm text-muted-foreground select-none">
                        I agree to be contacted by eDrive regarding distribution opportunities.
                        My data will be processed in accordance with applicable data protection regulations.
                      </span>
                    </label>

                    <button type="submit" className="w-full btn-filled-white py-4 text-sm">
                      Submit Company Profile
                    </button>

                    <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase text-center">
                      All submissions are reviewed by the Commercial Department.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* FINAL POWER STATEMENT */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">
              Control Your Region.<br />
              Represent the Category.
            </h2>
          </motion.div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default BecomeDistributor;
