import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import temerarioImg from "@/assets/temerario.jpg";
import revueltoImg from "@/assets/revuelto.jpg";
import urusImg from "@/assets/car-model-2.jpg";
import huracanImg from "@/assets/car-model-1.jpg";

const allModels = [
  { name: "Temerario", slug: "temerario", image: temerarioImg, tagline: "Beyond any satisfhat means" },
  { name: "Urus", slug: "urus", image: urusImg, tagline: "You can't hide who you are" },
  { name: "Revuelto", slug: "revuelto", image: revueltoImg, tagline: "The ultimate fusion of power" },
  { name: "Huracán", slug: "huracan", image: huracanImg, tagline: "Every road becomes a racetrack" },
];

const ModelsPage = () => {
  return (
    <>
      <NavBar />
      <main className="pt-24 pb-20">
        <div className="px-8 md:px-16 mb-16">
          <h1 className="text-heading-xl text-4xl md:text-6xl text-foreground">All Models</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {allModels.map((model, i) => (
            <motion.div
              key={model.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/models/${model.slug}`} className="group block relative aspect-video overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="section-label mb-2">{model.tagline}</p>
                  <h2 className="text-heading-xl text-3xl md:text-4xl text-foreground">{model.name}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default ModelsPage;
