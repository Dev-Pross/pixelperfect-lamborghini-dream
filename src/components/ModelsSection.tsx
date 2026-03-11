import { motion } from "framer-motion";
import carModel1 from "@/assets/car-model-1.jpg";
import carModel2 from "@/assets/car-model-2.jpg";

const models = [
  {
    name: "HURACÁN",
    subtitle: "Tecnica",
    image: carModel1,
    power: "640",
    speed: "325",
    acceleration: "3.2",
  },
  {
    name: "URUS",
    subtitle: "Performante",
    image: carModel2,
    power: "666",
    speed: "306",
    acceleration: "3.3",
  },
];

const ModelsSection = () => {
  return (
    <section className="snap-section relative flex flex-col justify-center bg-background overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-line mb-4" />
          <h2 className="text-4xl md:text-6xl text-heading-xl text-foreground">
            Our Models
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative border border-border overflow-hidden cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-none group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-none" />
              </div>
              <div className="p-6 bg-background border-t border-border">
                <h3 className="text-2xl md:text-3xl text-heading-xl text-foreground">
                  {model.name}
                </h3>
                <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-1">
                  {model.subtitle}
                </p>
                <div className="flex gap-8 mt-6">
                  <div>
                    <span className="spec-value text-2xl">{model.power}</span>
                    <span className="text-muted-foreground text-xs block uppercase tracking-widest mt-1">CV</span>
                  </div>
                  <div>
                    <span className="spec-value text-2xl">{model.speed}</span>
                    <span className="text-muted-foreground text-xs block uppercase tracking-widest mt-1">km/h</span>
                  </div>
                  <div>
                    <span className="spec-value text-2xl">{model.acceleration}s</span>
                    <span className="text-muted-foreground text-xs block uppercase tracking-widest mt-1">0-100</span>
                  </div>
                </div>
                <button className="btn-brutal text-xs mt-6 w-full">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
