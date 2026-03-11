import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt={name}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative z-10 w-full px-8 md:px-[10vw] pb-[6vh] md:pb-[10vh]">
        {/* Sub-model tabs */}
        {subModels && subModels.length > 0 && (
          <div className="flex gap-8 mb-12">
            {subModels.map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => setActiveTab(i)}
                className={`text-[11px] tracking-[0.2em] font-bold uppercase pb-3 transition-colors duration-300 relative ${
                  i === activeTab
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {sub.name}
                {/* Active line indicator */}
                {i === activeTab && (
                  <motion.div 
                    layoutId={`active-tab-${slug}`}
                    className="absolute bottom-0 left-0 right-0 h-px bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/70 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          {tagline}
        </motion.p>

        {/* Massive Model Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-black uppercase leading-[0.85] tracking-[-0.02em] mb-12"
          style={{ fontSize: "clamp(4rem, 9vw, 8rem)", fontFamily: "var(--font-heading)" }}
        >
          {name}
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-5"
        >
          <Link 
            to={`/models/${slug}`} 
            className="border border-white/20 text-white px-10 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-white/10 hover:border-white/50 transition-all"
          >
            Explore the model
          </Link>
          <button 
            className="border border-white/20 text-white px-10 py-4 text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-white/10 hover:border-white/50 transition-all"
          >
            Download brochure
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelCard;
