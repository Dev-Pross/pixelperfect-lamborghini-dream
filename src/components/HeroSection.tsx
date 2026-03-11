import heroImg from "@/assets/hero-headlight.jpg";

interface HeroSectionProps {
  onScrollPast: () => void;
}

const HeroSection = ({ onScrollPast }: HeroSectionProps) => {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Supercar headlight detail"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/30" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="w-16 h-[2px] bg-primary animate-pulse-glow" />
        <p className="text-muted-foreground text-xs tracking-[0.4em] uppercase font-body">
          Scroll to ignite
        </p>
        <svg
          className="w-5 h-5 text-muted-foreground animate-bounce mt-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="square" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
