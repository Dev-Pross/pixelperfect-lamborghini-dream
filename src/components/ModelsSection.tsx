import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ModelCard from "./ModelCard";
import temerarioImg from "@/assets/temerario.jpg";
import revueltoImg from "@/assets/revuelto.jpg";
import urusImg from "@/assets/car-model-2.jpg";
import huracanImg from "@/assets/car-model-1.jpg";

const models = [
  {
    name: "Temerario",
    tagline: "Beyond any satisfhat means",
    slug: "temerario",
    image: temerarioImg,
    subModels: [
      { name: "Temerario", image: temerarioImg },
    ],
  },
  {
    name: "Urus",
    tagline: "You can't hide who you are",
    slug: "urus",
    image: urusImg,
    subModels: [
      { name: "SE", image: urusImg },
      { name: "S", image: urusImg },
      { name: "Performante", image: urusImg },
    ],
  },
  {
    name: "Revuelto",
    tagline: "The ultimate fusion of power",
    slug: "revuelto",
    image: revueltoImg,
    subModels: [
      { name: "Revuelto", image: revueltoImg },
    ],
  },
  {
    name: "Huracán",
    tagline: "Every road becomes a racetrack",
    slug: "huracan",
    image: huracanImg,
    subModels: [
      { name: "Sterrato", image: huracanImg },
      { name: "Tecnica", image: huracanImg },
      { name: "STO", image: huracanImg },
    ],
  },
];

const ModelsSection = () => {
  return (
    <div>
      {/* Models header */}
      <section className="px-8 md:px-16 py-16 flex items-center justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading-xl text-3xl md:text-5xl text-foreground"
        >
          Models
        </motion.h2>
        <Link to="/models" className="nav-link hidden md:inline-flex items-center gap-2">
          Discover all Models
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
          </svg>
        </Link>
      </section>

      {/* Model cards */}
      {models.map((model) => (
        <ModelCard key={model.name} {...model} />
      ))}
    </div>
  );
};

export default ModelsSection;
