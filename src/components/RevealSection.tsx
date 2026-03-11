import { motion } from "framer-motion";
import carReveal from "@/assets/car-reveal.jpg";

const RevealSection = () => {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden">
      <motion.img
        src={carReveal}
        alt="Supercar full reveal"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="relative z-10 flex flex-col items-end w-full max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-heading-xl text-foreground leading-none">
            REVUELTO
          </h1>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mt-4 font-body">
            The vision of the future
          </p>
          <div className="section-line ml-auto mt-6" />
          <div className="mt-8 flex gap-4 justify-end">
            <button className="btn-brutal text-xs">Discover</button>
            <button className="btn-primary-brutal text-xs">Configure</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevealSection;
