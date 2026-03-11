import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-headlight.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Supercar headlight detail"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="relative z-10 px-6 sm:px-8 md:px-16 pb-16 sm:pb-20 md:pb-28 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4"
          style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }}
        >
          NEXT-GENERATION JETCAR MANUFACTURING — UAE
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col text-foreground"
        >
          <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }}>
            Create. Drive.
          </span>
          <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 200 }}>
            Dominate the water.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 sm:mt-8"
        >
          <Link
            to="/#models"
            className="inline-flex items-center gap-3 bg-black/80 rounded-[10px] px-6 py-3 sm:px-8 sm:py-4 border border-white/10 hover:border-white/30 transition-colors group"
          >
            <span className="text-white text-sm sm:text-base" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300 }}>
              DISCOVER MORE
            </span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
