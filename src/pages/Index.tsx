import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ModelsHeroSlides from "@/components/ModelsHeroSlides";
import ModelsSection from "@/components/ModelsSection";
import DealerSection from "@/components/DealerSection";
import ConfiguratorSection from "@/components/ConfiguratorSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";
import SocialSidebar from "@/components/SocialSidebar";
import ConfiguratorPageV2 from "./ConfiguratorPageV2";

const Index = () => {
  return (
    <>
      <NavBar />
      <SocialSidebar />
      <main>
        <HeroSection />
        <ConfiguratorPageV2 />
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
