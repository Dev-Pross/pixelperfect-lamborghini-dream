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
      { name: "S", image: revueltoImg },
      { name: "Performante", image: temerarioImg },
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
      { name: "Tecnica", image: urusImg },
      { name: "STO", image: revueltoImg },
    ],
  },
];

const ModelsHeroSlides = () => {
  return (
    <div>
      {models.map((model) => (
        <ModelCard key={model.name} {...model} />
      ))}
    </div>
  );
};

export default ModelsHeroSlides;
