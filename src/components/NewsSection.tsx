import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import heroImg from "@/assets/hero-headlight.jpg";

const articles = [
  {
    slug: "motorsport-season-2026",
    image: news1,
    category: "Motorsport",
    date: "03.10.2026",
    title: "The new season begins: Racing excellence on every circuit",
  },
  {
    slug: "corporate-sustainability",
    image: news2,
    category: "Corporate",
    date: "03.05.2026",
    title: "A commitment to innovation and sustainable luxury",
  },
  {
    slug: "interior-craftsmanship",
    image: news3,
    category: "After Sales",
    date: "02.28.2026",
    title: "The art of interior craftsmanship: Bespoke details",
  },
  {
    slug: "driving-academy",
    image: heroImg,
    category: "Arena",
    date: "02.20.2026",
    title: "Driving Academy 2026: Unleash your potential on track",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="bg-background py-20">
      <div className="px-8 md:px-16 flex items-center justify-between mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading-xl text-3xl md:text-5xl text-foreground"
        >
          News
        </motion.h2>
        <Link to="/news" className="nav-link hidden md:inline-flex items-center gap-2">
          Read more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="flex gap-6 overflow-x-auto hide-scrollbar px-8 md:px-16 pb-4">
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
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body">
                  {article.category}
                </span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[10px] text-muted-foreground font-body">
                  {article.date}
                </span>
              </div>
              <h3 className="text-sm text-foreground font-body leading-relaxed group-hover:opacity-70 transition-opacity">
                {article.title}
              </h3>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
