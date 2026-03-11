import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import RevealSection from "@/components/RevealSection";
import ModelsSection from "@/components/ModelsSection";
import BrandSection from "@/components/BrandSection";
import SpecsSection from "@/components/SpecsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [navVisible, setNavVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setNavVisible(container.scrollTop > window.innerHeight * 0.5);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar visible={navVisible} />
      <div ref={containerRef} className="snap-container">
        <HeroSection onScrollPast={() => {}} />
        <RevealSection />
        <ModelsSection />
        <SpecsSection />
        <BrandSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
