import { motion } from "framer-motion";

const specs = [
  { label: "Max Power", value: "1015", unit: "CV" },
  { label: "Max Speed", value: ">350", unit: "km/h" },
  { label: "0-100 km/h", value: "2.5", unit: "s" },
  { label: "Engine", value: "V12", unit: "Hybrid" },
];

const SpecsSection = () => {
  return (
    <section className="snap-section relative flex items-center justify-center bg-background">
      <div className="w-full max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-line mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl text-heading-xl text-foreground">
            Pure Numbers
          </h2>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mt-4 font-body">
            Revuelto Technical Specifications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-border p-8 md:p-12 text-center"
            >
              <span className="spec-value text-5xl md:text-7xl block">
                {spec.value}
              </span>
              <span className="text-foreground text-sm tracking-widest uppercase block mt-2 font-body">
                {spec.unit}
              </span>
              <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase block mt-4 font-body">
                {spec.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button className="btn-primary-brutal text-xs">
            Full Specifications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecsSection;
