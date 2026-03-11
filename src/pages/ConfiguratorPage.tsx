import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
import temerarioImg from "@/assets/temerario.jpg";
import revueltoImg from "@/assets/revuelto.jpg";
import configuratorImg from "@/assets/configurator-bg.jpg";
import urusImg from "@/assets/car-model-2.jpg";

const models = [
  { name: "Temerario", slug: "temerario", image: temerarioImg },
  { name: "Revuelto", slug: "revuelto", image: revueltoImg },
  { name: "Urus SE", slug: "urus", image: urusImg },
  { name: "Huracán", slug: "huracan", image: configuratorImg },
];

const ConfiguratorPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-20">
        <div className="px-8 md:px-16 mb-12">
          <h1 className="text-heading-xl text-4xl md:text-6xl text-foreground mb-4">Configurator</h1>
          <p className="text-sm text-muted-foreground font-body">Choose your model to start configuring.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mx-8 md:mx-16">
          {models.map((model, i) => (
            <button
              key={model.name}
              onClick={() => setSelected(i)}
              className={`relative aspect-video overflow-hidden group ${i === selected ? 'ring-2 ring-foreground' : ''}`}
            >
              <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-heading-xl text-2xl text-foreground">{model.name}</h2>
              </div>
            </button>
          ))}
        </div>

        <div className="px-8 md:px-16 mt-12 text-center">
          <h2 className="text-heading-xl text-2xl md:text-4xl text-foreground mb-6">
            Configure your {models[selected].name}
          </h2>
          <button className="btn-filled-white">Start Configuration</button>
          <p className="mt-8 text-[10px] text-muted-foreground font-body max-w-2xl mx-auto">
            The fuel consumption and emission values shown are for configurator demonstration purposes only.
          </p>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default ConfiguratorPage;
