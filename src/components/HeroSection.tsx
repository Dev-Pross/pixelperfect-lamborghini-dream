import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background Video - Flipped horizontally as per original design matrix(-1,0,0,1,0,0) */}
      <video
        key="main-hero-vid"
        src="/2FinalVerse_h264.mp4"
        autoPlay
        loop
        muted={true}
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[25%_center] md:object-[30%_center] lg:object-left"
        style={{ transform: 'scaleX(-1)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent z-[5]" />
      <div className="relative z-10 px-6 sm:px-8 md:px-16 pb-16 sm:pb-20 md:pb-28 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
        >
          NEXT-GENERATION JETCAR MANUFACTURING — UAE
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col text-foreground"
        >
          <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
            Create. Drive.
          </span>
          <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 200 }}>
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
            <span className="text-white text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}>
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
