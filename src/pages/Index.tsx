import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ModelsHeroSlides from "@/components/ModelsHeroSlides";
import ModelsSection from "@/components/ModelsSection";
import DealerSection from "@/components/DealerSection";
import ConfiguratorSection from "@/components/ConfiguratorSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ModelsSection />

        <ModelsHeroSlides />


        <DealerSection />

        <ConfiguratorSection />
        <NewsSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
