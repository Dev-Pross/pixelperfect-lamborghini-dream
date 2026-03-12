import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const Investors = () => {
  const [formState, setFormState] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    country: "", city: "",
    profile: "", experience: "", approach: "",
    contactTime: "", contactMethod: "", message: "", consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email submission to FMC.emotiondrive@gmail.com
    setSubmitted(true);
  };

  const sections = [
    {
      title: "How the Investment Model Works",
      text: "Investors participate by financing eDrive JetCars that are placed into approved partner locations, such as premium resorts and professional watersports operators. eDrive manages the full process, from manufacturing and delivery to placement and operational coordination, ensuring that each asset is deployed within a commercially viable environment."
    },
    {
      title: "Partner Locations",
      text: "All JetCars are placed only in partner locations that meet eDrive’s operational and brand standards. These locations are selected based on factors such as Tourist demand, Operational experience, Market positioning, and Long-term cooperation potential. This approach allows JetCars to operate within environments designed for consistent use and premium client experience."
    },
    {
      title: "Asset-Based Participation",
      text: "Each investment is linked to a physical asset, an eDrive JetCar. The asset is introduced into active operation at a partner location, where it is used as part of the daily watersports offering. This structure provides investors with transparency and a clear connection between the investment and real-world operations."
    },
    {
      title: "Revenue-Oriented Structure",
      text: "The investment model is designed to generate returns through active operation rather than passive holding. JetCars are integrated into partner locations where they are used regularly by end clients, creating ongoing revenue potential linked to tourism activity and demand."
    },
    {
      title: "Role of eDrive",
      text: "eDrive acts as the manufacturer, coordinator, and strategic partner throughout the entire process. Our role includes: Manufacturing and quality control, Placement into approved partner locations, Operational coordination, and Ongoing support and asset oversight. This allows investors to participate without being involved in daily operations."
    },
    {
      title: "Designed for Long-Term Cooperation",
      text: "The eDrive investment structure is created for long-term partnerships rather than short-term speculation. By aligning the interests of investors, operators, and the manufacturer, the model focuses on sustainability, scalability, and consistent performance across markets."
    },
    {
      title: "Transparency and Communication",
      text: "Investors receive structured communication and updates related to their assets and partner locations. eDrive prioritizes clarity, accountability, and professional reporting throughout the cooperation period."
    }
  ];

  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen">
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 px-8 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-heading-xl mb-6"
          >
            Investing with eDrive
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-3xl font-body font-light mb-8"
          >
            A Strategic Model Built on Real Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto"
          >
            eDrive offers investors a structured opportunity to participate in premium watersports operations through carefully selected partner locations. Rather than speculative concepts, our model is based on real assets, operating locations, and established demand within high-end tourism and leisure markets.
          </motion.p>
        </section>

        {/* DETAILS GRID */}
        <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-white/10 pt-6"
              >
                <h3 className="text-xl font-bold font-body mb-4">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-body mb-6">Next Steps</h3>
            <p className="text-muted-foreground mb-8">
              If you are interested in learning more about investing with eDrive, our team will be happy to provide additional information and discuss potential opportunities.
            </p>
            <button 
              onClick={() => document.getElementById('invest-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-filled-white px-12 py-4 text-sm"
            >
              Become an Investor
            </button>
          </motion.div>
        </section>

        {/* APPLICATION FORM */}
        <section id="invest-form" className="py-32 px-8 bg-neutral-950 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-heading-xl mb-4 text-center">Become an Investor</h2>
            <p className="text-muted-foreground text-center mb-16">
              Fill in the form below and our team will contact you to discuss investment opportunities with eDrive.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key="success"
                  className="bg-tiffany/10 border border-tiffany p-12 text-center rounded-sm"
                >
                  <h3 className="text-2xl font-bold text-tiffany mb-4">Thank you for your interest.</h3>
                  <p className="text-foreground">Our investment team will contact you shortly.</p>
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
                  {/* Contact Details */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="First name" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="text" placeholder="Last name" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="email" placeholder="Email address" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="tel" placeholder="Phone number" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Location</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Country" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                      <input type="text" placeholder="City" required className="bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors" />
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Investor Profile</h3>
                    
                    <div className="space-y-4">
                      <label className="text-sm block">What best describes you?</label>
                      <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select an option</option>
                        <option>Private investor</option>
                        <option>Business owner</option>
                        <option>Entrepreneur</option>
                        <option>Family office representative</option>
                        <option>Investment fund</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">Do you have prior investment experience?</label>
                      <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select an option</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">Preferred investment approach</label>
                      <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select an option</option>
                        <option>Asset-based investment</option>
                        <option>Revenue participation</option>
                        <option>Long-term partnership</option>
                        <option>Exploring options</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">When is the best time to contact you?</label>
                      <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select an option</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                        <option>Flexible</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm block">Preferred contact method</label>
                      <select required className="w-full bg-neutral-900 border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select an option</option>
                        <option>Phone call</option>
                        <option>WhatsApp</option>
                        <option>Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-6">
                    <h3 className="text-sm tracking-widest text-muted-foreground uppercase border-b border-white/10 pb-2">Message</h3>
                    <textarea 
                      placeholder="Tell us briefly about your interest and what you are looking for." 
                      rows={4}
                      className="w-full bg-transparent border border-white/20 p-4 text-sm focus:border-tiffany outline-none transition-colors resize-none" 
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" required className="mt-1 sr-only" onChange={(e) => setFormState({...formState, consent: e.target.checked})} />
                    <div className={`w-5 h-5 flex-shrink-0 border flex items-center justify-center transition-colors ${formState.consent ? 'bg-tiffany border-tiffany' : 'border-white/30 group-hover:border-white/60'}`}>
                      {formState.consent && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-sm text-muted-foreground select-none">
                      I agree to be contacted by eDrive regarding investment opportunities.
                    </span>
                  </label>

                  <button type="submit" className="w-full btn-filled-white py-4">
                    Submit request
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default Investors;
