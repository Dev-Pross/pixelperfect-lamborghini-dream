import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dealerBg from "@/assets/dealer-bg.jpg";

const DealerSection = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={dealerBg}
        alt="Supercar on mountain road"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <p className="section-label mb-4">Dealer Locator</p>
        <h2 className="text-heading-xl text-3xl md:text-5xl text-foreground mb-8">
          Find Your Dealer
        </h2>
        <Link to="/dealerships" className="btn-outline-white">
          Find your dealer
        </Link>
      </motion.div>
    </section>
  );
};

export default DealerSection;
