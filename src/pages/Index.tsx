import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
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
        <DealerSection />
        <ConfiguratorSection />
        <NewsSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
