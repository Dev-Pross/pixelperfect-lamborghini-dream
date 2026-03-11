import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import temerarioImg from "@/assets/temerario.jpg";
import revueltoImg from "@/assets/revuelto.jpg";
import configuratorImg from "@/assets/configurator-bg.jpg";

const tabs = [
  { name: "Temerario", image: temerarioImg },
  { name: "Revuelto", image: revueltoImg },
  { name: "Urus SE", image: configuratorImg },
];

const ConfiguratorSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-background py-20">
      <div className="px-8 md:px-16 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading-xl text-3xl md:text-5xl text-foreground mb-8"
        >
          Configurator
        </motion.h2>

        {/* Tab bar */}
        <div className="flex gap-8 border-b border-border">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(i)}
              className={`pb-4 text-xs tracking-[0.2em] uppercase font-body border-b-2 transition-all ${
                i === activeTab
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="relative aspect-[16/7] overflow-hidden mx-8 md:mx-16">
        <img
          src={tabs[activeTab].image}
          alt={tabs[activeTab].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <h3 className="text-heading-xl text-2xl md:text-4xl text-foreground mb-6">
            Configure your {tabs[activeTab].name}
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/configurator" className="btn-filled-white">
              Start configuration
            </Link>
            <Link to={`/models/${tabs[activeTab].name.toLowerCase().replace(' ', '-')}`} className="btn-outline-white">
              Explore the model
            </Link>
          </div>
        </div>
      </div>

      <p className="px-8 md:px-16 mt-6 text-[10px] text-muted-foreground leading-relaxed max-w-4xl">
        The fuel consumption and emission values shown are for configurator demonstration purposes only. 
        Actual values may vary depending on driving style, road conditions, and other factors.
      </p>
    </section>
  );
};

export default ConfiguratorSection;
