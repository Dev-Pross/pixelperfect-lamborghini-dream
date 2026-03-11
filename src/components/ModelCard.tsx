import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SubModel {
  name: string;
  image: string;
}

interface ModelCardProps {
  name: string;
  tagline: string;
  image: string;
  slug: string;
  subModels?: SubModel[];
}

const ModelCard = ({ name, tagline, image, slug, subModels }: ModelCardProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentImage = subModels && subModels.length > 0 ? subModels[activeTab]?.image || image : image;

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <img
        src={currentImage}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-24">
        {/* Sub-model tabs */}
        {subModels && subModels.length > 0 && (
          <div className="flex gap-6 mb-8">
            {subModels.map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => setActiveTab(i)}
                className={`text-xs tracking-[0.2em] uppercase font-body pb-2 border-b-2 transition-all ${
                  i === activeTab
                    ? "text-foreground border-foreground"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-3"
        >
          {tagline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-heading-xl text-4xl md:text-6xl lg:text-7xl text-foreground mb-8"
        >
          {name}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <Link to={`/models/${slug}`} className="btn-outline-white">
            Explore the model
          </Link>
          <button className="btn-outline-white">
            Download brochure
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelCard;
