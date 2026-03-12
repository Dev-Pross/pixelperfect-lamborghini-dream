import NavBar from "@/components/NavBar";
import HeroSectionV2 from "@/components/HeroSectionV2";
import ModelsSection from "@/components/ModelsSection";
import DealerSection from "@/components/DealerSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";
import SocialSidebar from "@/components/SocialSidebar";
import SmoothScroll from "@/components/SmoothScroll";
import ConfiguratorPageV2 from "./ConfiguratorPageV2";

const Index = () => {
  return (
    <>
      <SmoothScroll />
      <NavBar />
      <SocialSidebar />
      <main>
        <HeroSectionV2 />
        <ConfiguratorPageV2 />
        <ModelsSection />
        <DealerSection />
        <NewsSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
