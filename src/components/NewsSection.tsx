import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import heroImg from "@/assets/hero-headlight.jpg";

const articles = [
  {
    slug: "sea-expo-2026-bahrain",
    image: news1,
    category: "Events",
    date: "15 APR 2026",
    title: "eDrive at Sea Expo 2026, Bahrain",
    description: "eDrive took part in Sea Expo 2026 in Bahrain, one of the key marine and watersports industry events in the Gulf region. The exhibition became an important platform for meetings with watersports operators, investors, and strategic partners.",
  },
  {
    slug: "boat-show-2025-abu-dhabi",
    image: news2,
    category: "Events",
    date: "02 MAR 2026",
    title: "eDrive at International Boat Show 2025, Abu Dhabi",
    description: "eDrive participated in the International Boat Show 2025 in Abu Dhabi, presenting its latest JetCar developments and manufacturing capabilities to an international audience.",
  },
  {
    slug: "dubai-boat-show-2025",
    image: news3,
    category: "Events",
    date: "18 FEB 2026",
    title: "eDrive at Dubai International Boat Show 2025",
    description: "eDrive participated in the Dubai International Boat Show 2025, one of the largest and most influential boat shows in the world, engaging with global partners and potential clients.",
  },
  {
    slug: "updated-model-r",
    image: heroImg,
    category: "Product",
    date: "05 JAN 2026",
    title: "Introducing the Updated Model R",
    description: "eDrive proudly presents the updated Model R, featuring next-generation performance improvements in build quality, refined detailing, and optimized performance characteristics.",
  },
  {
    slug: "updated-model-f",
    image: news1,
    category: "Product",
    date: "20 DEC 2025",
    title: "Introducing the Updated Model F",
    description: "The Model F has received a comprehensive update focused on luxury, comfort, and guest experience with upgraded finishes, improved ergonomics, and refined visual elements.",
  },
  {
    slug: "continuous-evolution",
    image: news2,
    category: "Engineering",
    date: "10 DEC 2025",
    title: "Continuous Product Evolution",
    description: "At eDrive, product development is a continuous process. We regularly introduce product upgrades based on real operational feedback, environmental conditions, and client experience.",
  },
  {
    slug: "resort-investors",
    image: news3,
    category: "Business",
    date: "01 DEC 2025",
    title: "Designed for Resorts and Investors",
    description: "eDrive JetCars are engineered not only as leisure vehicles, but as revenue-generating assets. Our models are developed with resort operations, rental efficiency, and long-term durability in mind.",
  },
  {
    slug: "global-expansion",
    image: heroImg,
    category: "Corporate",
    date: "15 NOV 2025",
    title: "What's Next for eDrive",
    description: "eDrive continues to expand internationally, with ongoing discussions and projects across multiple regions. Our focus remains on strategic partnerships, manufacturing scalability, and new premium destinations.",
  },
];

const NewsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="news" className="bg-tiffany py-20">
      <div className="px-8 md:px-16 flex items-center justify-between mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-black/50 mb-2 font-bold">{t('news.subtitle')}</p>
          <h2 className="text-3xl md:text-5xl text-black font-bold tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            {t('news.title')}
          </h2>
        </motion.div>
        <Link to="/news" className="hidden md:inline-flex items-center gap-2 text-black/70 hover:text-black text-xs tracking-[0.15em] uppercase font-bold transition-colors">
          {t('news.readMore')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="flex gap-6 overflow-x-auto styled-scrollbar px-8 md:px-16 pb-4">
        {articles.map((article, i) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex-shrink-0 w-[320px] md:w-[380px] group cursor-pointer"
          >
            <Link to={`/news/${article.slug}`}>
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-black/50 font-bold">
                  {article.category}
                </span>
                <span className="text-[10px] text-black/30">•</span>
                <span className="text-[10px] text-black/50 font-body">
                  {article.date}
                </span>
              </div>
              <h3 className="text-sm text-black font-body leading-relaxed group-hover:opacity-70 transition-opacity font-medium">
                {article.title}
              </h3>
              <p className="text-xs text-black/50 font-body leading-relaxed mt-2 line-clamp-3">
                {article.description}
              </p>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
