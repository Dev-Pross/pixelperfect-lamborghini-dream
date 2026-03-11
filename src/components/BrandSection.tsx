import { motion } from "framer-motion";
import interiorImg from "@/assets/car-interior.jpg";

const BrandSection = () => {
  return (
    <section className="snap-section relative flex items-center overflow-hidden">
      <img
        src={interiorImg}
        alt="Supercar interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-line mb-6" />
          <h2 className="text-4xl md:text-6xl text-heading-xl text-foreground leading-tight">
            Crafted
            <br />
            Without
            <br />
            <span className="text-primary">Compromise</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-foreground text-base leading-relaxed font-body">
            Every surface is sculpted with purpose. Every angle engineered
            for aerodynamic perfection. From the carbon fiber monocoque to the
            hand-stitched Alcantara interior, no detail is overlooked.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Born in Sant'Agata Bolognese, each vehicle is a testament to
            Italian craftsmanship and uncompromising engineering excellence.
            The fusion of art and technology creates machines that don't just
            perform — they provoke.
          </p>
          <button className="btn-brutal text-xs">
            The Heritage
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;
